const fs = require('fs')
const path = require('path')
const util = require('util')
const morphFileContents = require('./morphFileContents')
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)
const readdir = util.promisify(fs.readdir)

const DATA_DIR = path.join(__dirname, '../data')
const RESPONSES_DIR = path.join(DATA_DIR, 'responses/200')

function reduceLocationInfoArrayToObject (schoolLocationData) {
  return Promise.resolve(schoolLocationData.reduce((acc, cur) => {
    acc[cur.urn] = cur.schoolLocation
    return acc
  }, {}))
}

function readAllFileContents (fileNames) {
  return Promise.all(fileNames.map((fileName) => {
    return readFile(path.join(RESPONSES_DIR, fileName)).then((fileContent) => {
      return Promise.resolve({
        urn: fileName.split('.')[0],
        schoolLocation: JSON.parse(fileContent)
      })
    })
  }))
}

function buildDataSet () {
  const readCsvPromise = readFile(path.join(DATA_DIR, 'source.csv'), 'utf8')
  const readLatlngDataPromise = readdir(RESPONSES_DIR)
    .then(readAllFileContents)
    .then(reduceLocationInfoArrayToObject)

  morphFileContents(readCsvPromise, readLatlngDataPromise)
    .then((json) => {
      return writeFile(path.join(DATA_DIR, '/dataSet.json'), JSON.stringify(json))
    })
    .catch((err) => console.log(err))
}

buildDataSet()

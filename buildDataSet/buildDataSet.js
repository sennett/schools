const fs = require('fs')
const path = require('path')
const util = require('util')
const morphFileContents = require('./morphFileContents')
const DATA_DIR = path.join(__dirname, '../data')

function buildDataSet () {
  const readFile = util.promisify(fs.readFile)
  const writeFile = util.promisify(fs.writeFile)
  morphFileContents(readFile(path.join(DATA_DIR, 'source.csv'), 'utf8'))
    .then((json) => {
      return writeFile(path.join(DATA_DIR, '/dataSet.json'), JSON.stringify(json))
    })
    .catch((err) => console.log(err))
}

buildDataSet()

const parse = require('csv-parse')

const COLUMNS = ['urn',
  'localAuthorityCode',
  'localAuthorityName',
  'establishmentNumber',
  'establishmentName',
  'street',
  'locality',
  'address3',
  'town',
  'county',
  'postcode',
  'typeOfEstablishment',
  'statutoryHighestAge',
  'statutoryLowestAge',
  'boarders',
  'sixthForm',
  'ukprn',
  'phaseOfEducation',
  'gender',
  'religiousCharacter',
  'religiousEthos',
  'admissionsPolicy',
  'websiteAddress',
  'telephoneNumber',
  'headteacher',
  'establishmentStatus',
  'reasonEstablishmentOpened',
  'openingDate',
  'parliamentaryConstituencyCode',
  'parliamentaryConstituencyName',
  'region']

function parseCsv (fileContents) {
  return new Promise((resolve, reject) => {
    parse(fileContents, { delimiter: ',' }, (err, csvData) => {
      if (err) {
        reject(err)
      } else {
        resolve(csvData)
      }
    })
  })
}

function pivotCsvToJson (data) {
  data.shift() // remove header row
  let json = {
    schools: data.map((row) => {
      let school = {}
      COLUMNS.forEach((columnName, index) => {
        school[columnName] = row[index]
      })
      return school
    })
  }
  return Promise.resolve(json)
}

function mergeSchoolAndLatlng (promiseResolutions) {
  let [schoolData, latlngData] = promiseResolutions
  schoolData.schools = schoolData.schools
    .filter((school) => school.urn in latlngData)
    .map((school) => {
      return {
        ...school,
        ...latlngData[school.urn].json.results[0].geometry.location
      }
    })
  return Promise.resolve(schoolData)
}

function morphFileContents (csvFileHandlePromise, latlngDataPromise) {
  const schoolDataPromise = csvFileHandlePromise
    .then(parseCsv)
    .then(pivotCsvToJson)

  return Promise.all([schoolDataPromise, latlngDataPromise])
    .then(mergeSchoolAndLatlng)
}

module.exports = morphFileContents

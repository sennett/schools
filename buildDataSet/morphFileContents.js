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

function morphFileContents (csvFileHandlePromise) {
  return csvFileHandlePromise
    .then((fileContents) => {
      return new Promise((resolve, reject) => {
        parse(fileContents, { delimiter: ',' }, (err, csvData) => {
          if (err) {
            reject(err)
          } else {
            resolve(csvData)
          }
        })
      })
    })
    .then((data) => {
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
    })
}

module.exports = morphFileContents

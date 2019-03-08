var parse = require('csv-parse')
var fs = require('fs')

var URN = 0
var LOCAL_AUTHORITY_CODE = 1
var LOCAL_AUTHORITY_NAME = 2
var ESTABLISHMENT_NUMBER = 3
var ESTABLISHMENT_NAME = 4
var STREET = 5
var LOCALITY = 6
var ADDRESS3 = 7
var TOWN = 8
var COUNTY = 9
var POSTCODE = 10
var TYPE_OF_ESTABLISHMENT = 11
var STATUTORY_HIGHEST_AGE = 12
var STATUTORY_LOWEST_AGE = 13
var BOARDERS = 14
var SIXTH_FORM = 15
var UKPRN = 16
var PHASE_OF_EDUCATION = 17
var GENDER = 18
var RELIGIOUS_CHARACTER = 19
var RELIGIOUS_ETHOS = 20
var ADMISSIONS_POLICY = 21
var WEBSITE_ADDRESS = 22
var TELEPHONE_NUMBER = 23
var HEADTEACHER = 24
var ESTABLISHMENT_STATUS = 25
var REASON_ESTABLISHMENT_OPENED = 26
var OPENING_DATE = 27
var PARLIAMENTARY_CONSTITUENCY_CODE = 28
var PARLIAMENTARY_CONSTITUENCY_NAME = 29
var REGION = 30
var LAT = 31
var LONG = 31

function parseRow (row) {
  return {
    urn: row[URN],
    name: row[ESTABLISHMENT_NAME],
    website: row[WEBSITE_ADDRESS]
  }
}

function parseDataCsv (cb) {
  var parser = parse({ delimiter: ',' }, (err, data) => {
    data.shift() // remove header row
    cb({
      fetchByUrn: function (urn) {
        return parseRow(data.find((row) => {
          return row[URN] === urn
        }))
      }
    })
  })

  fs.createReadStream(__dirname + '/data.csv').pipe(parser)
}

module.exports = parseDataCsv
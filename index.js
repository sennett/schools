var fs = require('fs')
var request = require('request')
var parseDataCsv = require('./parseDataCsv')
var async = require('async')
var RateLimiter = require('limiter').RateLimiter

var googleMapsClient = require('@google/maps').createClient({
  //key: 'previouskey'
})

var limiter = new RateLimiter(50, 'second')

function genIndexes (data) {
  data['0'].forEach((value, index) => {
    console.log(
      `var ${value
        .split(' ').join('_')
        .toUpperCase()
        .replace('(', '')
        .replace(')', '')} = ${index}`)
  })
}
// TODO refactor this monstrosity to parseDataCsv
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

var COUNTIES = ['West Midlands']
var RELIGIOUSNESS_CHARACTERS = ['Does not apply', 'None']
var RELIGIOUSNESS_ETHOSES = ['Does not apply', 'None', '']
var PHASES = ['Primary', 'All Through']
var MIN_AGE = 4

function writeLatLngData () {
  parseDataCsv((data) => {
    // find distinct areas
    var distinctAreas = []
    var schools = data.filter((school) => {
      return COUNTIES.includes(school[COUNTY])
        && RELIGIOUSNESS_ETHOSES.includes(school[RELIGIOUS_ETHOS])
        && parseInt(school[STATUTORY_LOWEST_AGE]) <= MIN_AGE

    }).map((school) => {
      return {
        urn: school[URN],
        name: school[ESTABLISHMENT_NAME],
        address: [
          school[ESTABLISHMENT_NAME],
          school[STREET],
          school[LOCALITY],
          school[ADDRESS3],
          school[TOWN],
          school[COUNTY],
          school[POSTCODE],
        ]
          .map((addressComponent) => addressComponent.trim())
          .filter((addressComponent) => addressComponent !== '')
          .join(', ')
      }
    })
    console.log('start length:', schools.length)
    var latCount = 0
    var lngCnt = 0
    async.map(schools, (school, callback) => {
      limiter.removeTokens(1, () => {
        googleMapsClient.geocode({ address: school.address }, (err, response) => {
          // request.get('https://example.com/', (err, response, body) => {
          latCount++
          lngCnt--
          if (!err) {
            var dir
            if (response.status === 200) {
              dir = '200'
            } else {
              dir = 'everythingElse'
            }
            var fileName = `responses/${dir}/${school.urn}.json`
            fs.writeFile(fileName, JSON.stringify(response), 'utf8', () => {})
            callback(null, {
              ...school,
              lat: latCount,
              lng: lngCnt
            })
          } else {
            console.log('error')
            callback(err)
          }
        })
      })
    }, (err, results) => {

      // write this data
      console.log('end length:', results.length)
      var schools = {
        schools: results
      }
      fs.writeFile('latLngData.json', JSON.stringify(schools), 'utf8', () => console.log('done'))
    })
  })
}

// writeLatLngData()

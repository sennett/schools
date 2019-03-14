var fs = require('fs')
var async = require('async')
var RateLimiter = require('limiter').RateLimiter

var googleMapsClient = require('@google/maps').createClient({
  // key: 'previouskey'
})

var limiter = new RateLimiter(50, 'second')

// TODO refactor this monstrosity to parseDataCsv
var URN = 0
var ESTABLISHMENT_NAME = 4
var STREET = 5
var LOCALITY = 6
var ADDRESS3 = 7
var TOWN = 8
var COUNTY = 9
var POSTCODE = 10
var STATUTORY_LOWEST_AGE = 13
var RELIGIOUS_ETHOS = 20

var COUNTIES = ['West Midlands']
var RELIGIOUSNESS_ETHOSES = ['Does not apply', 'None', '']
var MIN_AGE = 4

let writeLatLngData = (data) => {
  // find distinct areas
  var schools = data.filter((school) => {
    return COUNTIES.includes(school[COUNTY]) &&
      RELIGIOUSNESS_ETHOSES.includes(school[RELIGIOUS_ETHOS]) &&
      parseInt(school[STATUTORY_LOWEST_AGE]) <= MIN_AGE
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
        school[POSTCODE]
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
    if (err) {
      console.log(err)
    }
    var schools = {
      schools: results
    }
    fs.writeFile('latLngData.json', JSON.stringify(schools), 'utf8', () => console.log('done'))
  })
}

// writeLatLngData()

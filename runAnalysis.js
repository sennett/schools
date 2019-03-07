var NUM_SCHOOLS = 3
var DISTANCE = 100

var fs = require('fs')
var async = require('async')

// read all files

var dir = 'responses/200'

fs.readdir(dir, (err, files) => {

  var geoData = []
  async.each(files, (fileName, callback) => {

    fs.readFile(`${dir}/${fileName}`, 'utf8', (err, fileContents) => {
      if (err) {
        callback(err)
      } else {
        var data = JSON.parse(fileContents)
        data.urn = fileName
        geoData.push(data)
        callback()
      }
    })
  }, (err) => {
    console.log('here')
    if (err) {
      console.log(':(')
    } else {
      console.log('smallest lat', Math.min(...mapData(geoData).map((point) => point.location.latitude)))
      console.log('biggest lat', Math.max(...mapData(geoData).map((point) => point.location.latitude)))
      console.log('smallest lng', Math.min(...mapData(geoData).map((point) => point.location.longitude)))
      console.log('biggest lng', Math.max(...mapData(geoData).map((point) => point.location.longitude)))
    }
  })
})

function checkData (geoData) {
  console.log('num results', geoData.length)
  console.log('statuses ok?', geoData.every((queryResult) => queryResult.json.status === 'OK'))
  console.log('one result for each query?', geoData.every((queryResult) => queryResult.json.results.length === 1))
}

function mapData (geoData) {
  return geoData.map((school) => ({
    location: {
      latitude: school.json.results[0].geometry.location.lat,
      longitude: school.json.results[0].geometry.location.lng
    }
  }))
}

// analyse data

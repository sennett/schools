var fs = require('fs')
var async = require('async')
var clusterFinder = require('./clusterFinder')
var convertMetersToGeocode = require('./convertMetersToGeocode')
var parseDataCsv = require('./parseDataCsv')

var dir = 'responses/200'

function runAnalysis (distance, numSchools, cb) {
  parseDataCsv((schoolRepository) => {
    fs.readdir(dir, (err, files) => {
      var geoData = []
      async.each(files, (fileName, callback) => {
        fs.readFile(`${dir}/${fileName}`, 'utf8', (err, fileContents) => {
          if (err) {
            callback(err)
          } else {
            var data = JSON.parse(fileContents)
            let urn = fileName.split('.')[0]
            data.schoolInfo = schoolRepository.fetchByUrn(urn)
            geoData.push(data)
            callback()
          }
        })
      }, (err) => {
        console.log('here')
        if (err) {
          console.log(':(')
        } else {
          let results = clusterFinder(convertMetersToGeocode(distance), numSchools, geoData.map((school) => {
            return {
              schoolData: school.schoolInfo,
              x: school.json.results[0].geometry.location.lng,
              y: school.json.results[0].geometry.location.lat
            }
          }))
          cb(results)
        }
      })
    })
  })
}

// analyse data

module.exports = runAnalysis

var fs = require('fs')
var async = require('async')
const path = require('path')
var clusterFinder = require('./clusterFinder')
var convertMetersToGeocode = require('./convertMetersToGeocode')

var dir = 'responses/200'

function runAnalysis (distance, numSchools, cb) {
  distance = distance * 2 // want distance from central point, not between schools
  fs.readFile(path.join(__dirname, 'data/dataSet.json'), (err, schoolData) => {
    if (err) {
      console.log(err)
    }
    schoolData = JSON.parse(schoolData)
    fs.readdir(dir, (err, files) => {
      if (err) {
        console.log(err)
      }
      var geoData = []
      async.each(files, (fileName, callback) => {
        fs.readFile(`${dir}/${fileName}`, 'utf8', (err, fileContents) => {
          if (err) {
            callback(err)
          } else {
            var data = JSON.parse(fileContents)
            let urn = fileName.split('.')[0]
            data.schoolInfo = schoolData.schools.find((school) => school.urn === urn)
            geoData.push(data)
            callback()
          }
        })
      }, (err) => {
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

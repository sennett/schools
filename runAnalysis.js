const fs = require('fs')
const path = require('path')
const clusterFinder = require('./clusterFinder')
const convertMetersToGeocode = require('./convertMetersToGeocode')

function runAnalysis (distance, numSchools, cb) {
  distance = distance * 2 // want distance from central point, not between schools
  fs.readFile(path.join(__dirname, 'data/dataSet.json'), (err, schoolData) => {
    if (err) {
      console.log(err)
    }
    schoolData = JSON.parse(schoolData)
    let results = clusterFinder(convertMetersToGeocode(distance), numSchools, schoolData.schools.map((school) => {
      return {
        ...school,
        x: school.lng,
        y: school.lat
      }
    }))
    cb(results)
  })
}

module.exports = runAnalysis

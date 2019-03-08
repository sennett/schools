const BronKerbosch = require('almete.bronkerbosch')

function distanceBetweenPoints (first, second) {
  let xDist = first.x - second.x
  let yDist = first.y - second.y
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

// https://stackoverflow.com/a/14231286/614523
// JS floating point math has limitations. could use decimal.js here if more accuracy is required
function findCenter (points) {
  let numPoints = points.length
  if (numPoints === 1) {
    return points[0]
  }

  let x = 0
  let y = 0
  let z = 0

  points.forEach((point) => {
    let lat = point.y * Math.PI / 180
    let lng = point.x * Math.PI / 180

    x += Math.cos(lat) * Math.cos(lng)
    y += Math.cos(lat) * Math.sin(lng)
    z += Math.sin(lat)
  })

  x = x / numPoints
  y = y / numPoints
  z = z / numPoints

  let centralLongitude = Math.atan2(y, x)
  let centralSquareRoot = Math.sqrt(x * x + y * y)
  let centralLatitude = Math.atan2(z, centralSquareRoot)

  return {
    x: centralLongitude * 180 / Math.PI,
    y: centralLatitude * 180 / Math.PI
  }
}

function clusterFinder (maxDistanceAllowed, numberOfSchoolsRequired, data) {
  let groupsOfTwo = []

  for (let i = 0; i < data.length; i++) {
    let first = data[i]
    for (let j = i + 1; j < data.length; j++) {
      let second = data[j]
      if (distanceBetweenPoints(first, second) <= maxDistanceAllowed) {
        groupsOfTwo.push([first, second])
      }
    }
  }

  let allGroups = BronKerbosch(groupsOfTwo)
  return allGroups.filter((group) => group.length >= numberOfSchoolsRequired).map((points) => {
    return {
      points,
      center: findCenter(points)
    }
  })
}

module.exports = clusterFinder

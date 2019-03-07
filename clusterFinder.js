const BronKerbosch = require('almete.bronkerbosch')

function distanceBetweenPoints (first, second) {
  let xDist = first.x - second.x
  let yDist = first.y - second.y
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
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
  return allGroups.filter((group) => group.length >= numberOfSchoolsRequired)
}

module.exports = clusterFinder

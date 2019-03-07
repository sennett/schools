function clusterFinder (maxDistanceAllowed, numberOfSchoolsRequired, data) {
  let numberOperations = 0
  let groupsOfTwo = []

  function pointsClose (first, second) {
    let xDist = first.x - second.x
    let yDist = first.y - second.y
    let distance = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
    return distance <= maxDistanceAllowed
  }

  for (let i = 0; i < data.length; i++) {
    let first = data[i]
    for (let j = i + 1; j < data.length; j++) {
      numberOperations++
      let second = data[j]
      if (pointsClose(first, second)) {
        groupsOfTwo.push([first, second])
      }
    }
  }

  let groupsOfThree = []
  for (let i = 0; i < groupsOfTwo.length; i++) {
    var first = groupsOfTwo[i]
    for (let j = i + 1; j < groupsOfTwo.length; j++) {
      let second = groupsOfTwo[j]
      // find if these intersect
      for (let k = 0; k < first.length; k++) {
        for (let l = 0; l < second.length; l++) {
          numberOperations++
          if (first[k] === second[l]) { // they intersect

          }
        }
      }
    }
  }

  console.log(numberOperations)
}

// draws circles `gridSize` apart, over the entire range, and uses pythagoras to find points within max distance.
// hilariously inefficient.
function sadClusterFinder (maxDistanceAllowed, numberOfSchoolsRequired, gridSize, data) {
  // find scan range
  let biggestX
  let biggestY
  let smallestX
  let smallestY
  data.forEach((point) => {
    biggestX = point.x > biggestX ? point.x : (biggestX || point.x)
    biggestY = point.y > biggestY ? point.y : (biggestY || point.y)

    smallestX = point.x < smallestX ? point.x : (smallestX || point.x)
    smallestY = point.y < smallestY ? point.y : (smallestY || point.y)
  })

  // scan
  let discoveredPoints = []
  for (let scanX = smallestX; scanX <= biggestX; scanX = scanX + gridSize) {
    console.log((biggestX - scanX) / gridSize)
    for (let scanY = smallestY; scanY <= biggestY; scanY = scanY + gridSize) {
      let count = 0
      data.forEach((point) => {
        let xDist = Math.abs(point.x - scanX)
        let yDist = Math.abs(point.y - scanY)
        let distance = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
        if (distance < maxDistanceAllowed) {
          count++
        }
      })
      if (count >= numberOfSchoolsRequired) {
        discoveredPoints.push({
          x: scanX,
          y: scanY,
          count
        })
      }
    }
  }

  return discoveredPoints
}

module.exports = clusterFinder

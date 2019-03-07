// function clusterFinder (maxDistanceAllowed, numberOfSchoolsRequired, data) {
//   let nodes = []
//
//   for (let i = 0; i < data.length; i++) {
//     let firstNode = data[i]
//     firstNode.edges = firstNode.edges || []
//     for (let j = i + 1; j < data.length; j++) {
//       let secondNode = data[j]
//       secondNode.edges = secondNode.edges || []
//       let distance = distanceBetweenPoints(firstNode, secondNode)
//       firstNode.edges.push({
//         nodeLink: secondNode,
//         weight: distance
//       })
//       secondNode.edges.push({
//         nodeLink: firstNode,
//         weight: distance
//       })
//     }
//     nodes.push(firstNode)
//   }
//
//   let returnable = []
//   let alreadyPushed = []
//
//   nodes.forEach((node) => {
//     // include node if has correct number of edges with correct weight
//     let relevantEdges = node.edges.filter((edge) => {
//       return edge.weight <= maxDistanceAllowed
//     })
//
//     if (relevantEdges.length + 1 >= numberOfSchoolsRequired) { // include current node
//       let pushable = [
//         node,
//         ...relevantEdges.map((edge) => edge.nodeLink)
//       ]
//       returnable.push(pushable)
//     }
//   })
// }

const BronKerbosch = require('almete.bronkerbosch')

function distanceBetweenPoints (first, second) {
  let xDist = first.x - second.x
  let yDist = first.y - second.y
  let distance = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
  return distance
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
  let result = allGroups.filter((group) => group.length >= numberOfSchoolsRequired)

  return result
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

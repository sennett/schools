var clusterFinder = require('./clusterFinder')
var convertMetersToGeocode = require('./convertMetersToGeocode')

describe('clusterFinder', () => {
  describe('simple test cases', () => {
    let testData = [{
      x: 1, y: 1
    }, {
      x: 2, y: 1
    }, {
      x: 1, y: 2
    }, {
      x: 3, y: 4
    }]

    test('positive result', () => {
      let results = clusterFinder(2, 3, testData)

      expect(results.length).toBe(1)
      expect(results[0].points.length).toBe(3)
    })

    test('negative result because of distance', () => {
      let results = clusterFinder(0.5, 3, testData)

      expect(results.length).toBe(0)
    })

    test('negative result because of point count', () => {
      let results = clusterFinder(1, 4, testData)

      expect(results.length).toBe(0)
    })
  })

  describe('complex cases', () => {
    describe('negative numbers', () => {
      describe('all negative', () => {
        let testData = [{
          x: -1, y: -1
        }, {
          x: -2, y: -2
        }, {
          x: -2, y: -3
        }]

        test('positive result', () => {
          let results = clusterFinder(2, 2, testData)

          expect(results.length).toBe(2)
          expect(results[0].points.length).toBe(2)
        })

        test('negative result because of distance', () => {
          let results = clusterFinder(0.5, 2, testData)

          expect(results.length).toBe(0)
        })

        test('negative result because of point count', () => {
          let results = clusterFinder(1, 3, testData)

          expect(results.length).toBe(0)
        })
      })

      describe('some negative', () => {
        let testData = [{
          x: -2, y: 2
        }, {
          x: -1, y: 1
        }, {
          x: 1, y: 2
        }, {
          x: 1, y: 1
        }, {
          x: -1, y: -1
        }, {
          x: -2, y: -2
        }, {
          x: 1, y: -1
        }, {
          x: 1, y: -2
        }, {
          x: 3, y: -6
        }]

        test('positive result', () => {
          let results = clusterFinder(5, 8, testData)

          expect(results.length).toBeGreaterThan(0)
        })

        test('negative result because of distance', () => {
          let results = clusterFinder(0.5, 2, testData)

          expect(results.length).toBe(0)
        })

        test('negative result because of point count', () => {
          let results = clusterFinder(10, 10, testData)

          expect(results.length).toBe(0)
        })

        test('positive result because of large distance count', () => {
          let results = clusterFinder(15, 9, testData)

          expect(results.length).toBe(1)
        })
      })
    })

    describe('small numbers', () => {
      let testData = [{
        x: 0.000001, y: 0.000001
      }, {
        x: 0.000002, y: 0.000001
      }, {
        x: 0.000001, y: 0.000002
      }]

      test('positive result', () => {
        let results = clusterFinder(1, 3, testData)

        expect(results.length).toBe(1)
      })

      test('negative result because of distance', () => {
        let results = clusterFinder(0.0000005, 3, testData)

        expect(results.length).toBe(0)
      })

      test('negative result because of point count', () => {
        let results = clusterFinder(1, 4, testData)

        expect(results.length).toBe(0)
      })
    })
  })

  describe('real data', () => {
    // from real data:
    // smallest lat 52.266958
    // smallest lng -2.3038512
    // biggest lat 52.6680175
    // biggest lng -1.4391685

    // x = longitude, y = lat

    let testData = [{
      x: -2.3038512, y: 52.266958 // bottom left
    }, {
      x: -1.4391685, y: 52.6680175 // top right
    }, {
      x: -1.892702, y: 52.435290 // next two points are schools in the middle of the area and close enough to be flagged when requesting two schools
    }, {
      x: -1.890728, y: 52.436480
    }, {
      x: -2.016273, y: 52.575979 // this school is too far away, so nothing comes up when requesting three schools
    }]

    test('positive result', () => {

      let maxDistance = 200 // meters
      let gridSize = 10 // meters

      let results = clusterFinder(convertMetersToGeocode(maxDistance), 2, testData)

      expect(results.length).toBeGreaterThan(0)
    })

    // function convertMetersToGeocodeOld (meters) {
    //   // dinstances taken from gmaps in birmingham :D
    //   // 52.434524, -1.892822
    //   // 52.433682, -1.892924
    //   // 94.65m
    //   let xDist = -1.892822 - -1.892924
    //   let yDist = 52.434524 - 52.433682
    //   let dist = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
    //   return meters * (dist / 94.65)
    // }
  })

  describe('groupings', () => {

    test('finds the destinct groups', () => {
      let testData = [{
        x: 1, y: 2
      }, {
        x: 2, y: 3
      }, {
        x: 3, y: 2
      }, {
        x: 5, y: 10
      }, {
        x: 5, y: 12
      }, {
        x: 7, y: 12
      }, {
        x: 7, y: 10
      }, {
        x: 12, y: 7
      }, {
        x: 15, y: 7
      }, {
        x: 13, y: 3
      }, {
        x: 14, y: 1
      }, {
        x: 13, y: 2
      }, {
        x: 15, y: 2
      }, {
        x: 15, y: 3
      }]

      let results = clusterFinder(3, 3, testData)

      expect(results.length).toBe(3)
    })

    test('node in multiple groups', () => {
      let testData = [{
        x: 2, y: 2
      }, {
        x: 2, y: 3
      }, {
        x: 3, y: 2
      }, {
        x: 3, y: 3
      }, {
        x: 3, y: 4
      }, {
        x: 4, y: 3
      }, {
        x: 4, y: 4
      }, {
        x: 4, y: 5
      }, {
        x: 5, y: 4
      }, {
        x: 5, y: 5
      }]

      let results = clusterFinder(Math.sqrt(2), 4, testData)

      expect(results.length).toBe(3)

      expect(results[0].points.length).toBe(4)
      expect(results[0].points).toContainEqual({
        x: 2, y: 2
      })
      expect(results[0].points).toContainEqual({
        x: 2, y: 3
      })
      expect(results[0].points).toContainEqual({
        x: 3, y: 2
      })
      expect(results[0].points).toContainEqual({
        x: 3, y: 3
      })

      expect(results[1].points.length).toBe(4)
      expect(results[1].points).toContainEqual({
        x: 3, y: 3
      })
      expect(results[1].points).toContainEqual({
        x: 3, y: 4
      })
      expect(results[1].points).toContainEqual({
        x: 4, y: 3
      })
      expect(results[1].points).toContainEqual({
        x: 4, y: 4
      })

      expect(results[2].points.length).toBe(4)
      expect(results[2].points).toContainEqual({
        x: 4, y: 4
      })
      expect(results[2].points).toContainEqual({
        x: 4, y: 5
      })
      expect(results[2].points).toContainEqual({
        x: 5, y: 4
      })
      expect(results[2].points).toContainEqual({
        x: 5, y: 5
      })
    })
  })

  describe('central points', function () {
    // JS floating point math has limitations. could use decimal.js here if more accuracy is required
    describe('basic case', () => {
      let testData = [{
        x: 2, y: 3
      }, {
        x: 2, y: 4
      }, {
        x: 3, y: 3
      }, {
        x: 3, y: 4
      }]

      let results = clusterFinder(Math.sqrt(2), 4, testData)

      expect(results[0].center.x).toBeCloseTo(2.5)
      expect(results[0].center.y).toBeCloseTo(3.5)
    })

    describe('negative case', () => {
      let testData = [{
        x: -2, y: -3
      }, {
        x: -2, y: -4
      }, {
        x: -3, y: -3
      }, {
        x: -3, y: -4
      }]

      let results = clusterFinder(Math.sqrt(2), 4, testData)

      expect(results[0].center.x).toBeCloseTo(-2.5)
      expect(results[0].center.y).toBeCloseTo(-3.5)
    })
  })
})

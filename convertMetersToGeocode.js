function convertMetersToGeocode (meters) {
  // 6.95 m -> 0.0001 (https://en.wikipedia.org/wiki/Geographic_coordinate_system#Length_of_a_degree). close enough.
  return meters / 69500
}

module.exports = convertMetersToGeocode
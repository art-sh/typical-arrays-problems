exports.min = (array) => (!array || !array.length)
  ? 0
  : Math.min(...array);

exports.max = (array) => (!array || !array.length)
  ? 0
  : Math.max(...array);

exports.avg = (array) => (!array || !array.length)
  ? 0
  : array.reduce((sum, item) => sum + item, 0) / array.length

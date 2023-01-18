
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix) {
    return []
  }
  matrix = matrix.map((mat, i) => i % 2 === 1 ? mat.reverse() : mat)
  return [...matrix.flat()]
}

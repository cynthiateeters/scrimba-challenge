function extractMatrixColumn(matrix, column) {
  //  write code here.
  const arr = [];
  for (let i = 0; i < matrix.length; i += 1) {
    arr.push(matrix[i][column]);
  }
  return arr;
}

export { extractMatrixColumn };

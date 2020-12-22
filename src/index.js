function extractMatrixColumn(matrix, column) {
  //  write code here.
  return matrix.map((row) => {
    return row[column];
  });
}

export { extractMatrixColumn };

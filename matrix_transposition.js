const transpose = function (matrix) {
  let finalArray = [];
  for (let i = 0; i < matrix[0].length; i++) {
    finalArray.push([]);
  }
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
      finalArray[column][row] = matrix[row][column];
    }
  }
  return finalArray;
};

module.exports = transpose;

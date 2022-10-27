const transpose = require("../../async/matrix_transposition");

const wordSearch = (letters, word) => {
  const verticalJoin = transpose(letters).map((xs) => xs.join(""));
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    } else {
      for (x of verticalJoin) {
        if (x.includes(word)) {
          return true;
        }
      }
    }
  }
  return false;
};

module.exports = wordSearch;

const transpose = require("./matrix_transposition");

const wordSearch = (letters, word) => {
  let transposedArray = transpose(letters);
  const horizontalJoin = letters.map((ls) => ls.join(""));
  const verticalJoin = transposedArray.map((xs) => xs.join(""));
  const horizontalJoinReversed = letters.map((ys) => ys.reverse().join(""));
  const verticalJoinReversed = transposedArray.map((zs) =>
    zs.reverse().join("")
  );
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    } else {
      for (x of verticalJoin) {
        if (x.includes(word)) {
          return true;
        } else {
          for (y of horizontalJoinReversed) {
            if (y.includes(word)) {
              return true;
            } else {
              for (z of verticalJoinReversed) {
                if (z.includes(word)) {
                  return true;
                }
              }
            }
          }
        }
      }
    }
  }
  return false;
};

wordSearch([
  ["A", "W", "C", "F", "Q", "U", "A", "L"],
  ["S", "E", "I", "N", "F", "E", "L", "D"],
  ["Y", "F", "C", "F", "Q", "U", "A", "L"],
  ["H", "M", "J", "T", "E", "V", "R", "G"],
  ["W", "H", "C", "S", "Y", "E", "R", "L"],
  ["B", "F", "R", "E", "N", "E", "Y", "B"],
  ["U", "B", "T", "W", "A", "P", "A", "I"],
  ["O", "D", "C", "A", "K", "U", "A", "S"],
  ["E", "Z", "K", "F", "Q", "U", "A", "L"],
]);
module.exports = wordSearch;

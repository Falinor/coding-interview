module.exports = (word) => {
  const vector = [];
  for (let char of word) {
    if (vector[char]) {
      return false;
    }
    vector[char] = true;
  }
  return true;
};

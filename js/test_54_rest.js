function getExtremeScores(scores) {
  const result = {
    best: Math.max(...scores),
    worst: Math.min(...scores),
  };

  return result;
}

console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));
console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));
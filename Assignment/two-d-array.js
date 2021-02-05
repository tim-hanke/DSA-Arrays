function twoDArray(arr) {
  let newArr = JSON.parse(JSON.stringify(arr));

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        for (let k = 0; k < arr.length; k++) {
          newArr[k][j] = 0;
        }
        for (let l = 0; l < arr[i].length; l++) {
          newArr[i][l] = 0;
        }
      }
    }
  }
  return newArr;
}

const input = [
  [1, 0, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
];
console.log("Input:", input);
console.log("Output:", twoDArray(input));

function filterUnder5(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 5) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

const numbers = [3, 5, 15, 15, 49, 8, 2, -5];
console.log("Input:", numbers);
console.log("Output:", filterUnder5(numbers));

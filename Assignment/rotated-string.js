function rotatedString(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const doubledString = str1 + str1;

  let isRotated = false;
  let slice;

  for (let i = 0; i < str1.length; i++) {
    slice = doubledString.slice(i, i + str1.length);
    if (slice === str2) {
      isRotated = true;
    }
  }

  return isRotated;
}

let input1 = "amazon";
let input2 = "azonma";
console.log("Input:", input1, input2);
console.log("Output:", rotatedString(input1, input2));

input2 = "azonam";
console.log("Input:", input1, input2);
console.log("Output:", rotatedString(input1, input2));

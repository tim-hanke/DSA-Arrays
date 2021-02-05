function mergeArrays(arr1, arr2) {
  const combinedLength = arr1.length + arr2.length;
  let newArray = [];
  let index1 = 0,
    index2 = 0;

  for (let i = 0; i < combinedLength; i++) {
    if (index2 >= arr2.length || arr1[index1] <= arr2[index2]) {
      newArray[i] = arr1[index1];
      index1++;
    } else {
      newArray[i] = arr2[index2];
      index2++;
    }
  }

  return newArray;
}

const arr1 = [1, 3, 6, 8, 11];
const arr2 = [2, 3, 5, 8, 9, 10];
console.log(arr1, " and ", arr2);
console.log(mergeArrays(arr1, arr2));

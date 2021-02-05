function products(arr) {
  let products = [];
  for (let i = 0; i < arr.length; i++) {
    // let currentIndex = arr[i];
    let currentProduct = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i != j) {
        currentProduct *= arr[j];
      }
    }
    products[i] = currentProduct;
  }
  return products;
}

const input = [1, 3, 9, 4];
console.log("Input:", input);
console.log("Output:", products(input));

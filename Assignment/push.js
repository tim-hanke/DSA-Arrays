const Array = require("./my-array");

function main() {
  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(3);
  // Add more items to the array
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);

  console.log(arr);

  arr.pop();
  arr.pop();
  arr.pop();

  console.log(arr);

  // Print the 1st item in the array arr.
  console.log(arr.get(0));

  // Empty the array and add just 1 item: arr.push("tauhida");
  arr.pop();
  arr.pop();
  arr.pop();
  arr.push("tauhida");

  // Print this 1 item that you just added.
  console.log(arr.get(0));
}

main();

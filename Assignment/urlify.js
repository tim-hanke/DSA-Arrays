function main() {
  let input = "tauhida parveen";
  console.log("Input:", input);
  console.log("Output:", urlify(input));

  input = "www.thinkful.com /tauh ida parv een";
  console.log("Input:", input);
  console.log("Output:", urlify(input));
}

function urlify(url) {
  // just using built in methods would be:
  // return url.split(" ").join("%20");

  // if we break it down a little:
  let urlArray = url.split("");
  for (let i = 0; i < urlArray.length; i++) {
    if (urlArray[i] === " ") {
      urlArray.splice(i, 1, "%20");
    }
  }
  return urlArray.join("");
  // I think splice itself is O(n), so this would be
  // O(n^2)
}

main();

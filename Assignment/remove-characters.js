function removeCharacters(str, rem) {
  let removedStr = "";
  for (let i = 0; i < str.length; i++) {
    let testChar = str.charAt(i);
    let validChar = true;
    for (let j = 0; j < rem.length; j++) {
      if (testChar === rem.charAt(j)) {
        validChar = false;
      }
    }
    if (validChar) {
      removedStr += testChar;
    }
  }

  return removedStr;
}

const inputString = "Battle of the Vowels: Hawaii vs. Grozny";
const inputFilter = "aeiou";
console.log("Input:", inputString, inputFilter);
console.log("Output:", removeCharacters(inputString, inputFilter));

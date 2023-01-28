var password = document.getElementById("password");

var charMap = new Map();
charMap.set("a", ["a", "A", "@", "4"]);
charMap.set("b", ["b", "B", "8"]);
charMap.set("c", ["c", "C", "(", "{"]);
charMap.set("d", ["d", "D", ")", "}"]);
charMap.set("e", ["e", "E", "3"]);
charMap.set("f", ["f", "F"]);
charMap.set("g", ["g", "G", "6"]);
charMap.set("h", ["h", "H", "#"]);
charMap.set("i", ["i", "I", "!", "1"]);
charMap.set("j", ["j", "J"]);
charMap.set("k", ["k", "K"]);
charMap.set("l", ["l", "L", "1"]);
charMap.set("m", ["m", "M"]);
charMap.set("n", ["n", "N"]);
charMap.set("o", ["o", "O", "0"]);
charMap.set("p", ["p", "P"]);
charMap.set("q", ["q", "Q"]);
charMap.set("r", ["r", "R"]);
charMap.set("s", ["s", "S", "$", "5"]);
charMap.set("t", ["t", "T", "7"]);
charMap.set("u", ["u", "U"]);
charMap.set("v", ["v", "V"]);
charMap.set("w", ["w", "W"]);
charMap.set("x", ["x", "X"]);
charMap.set("y", ["y", "Y"]);
charMap.set("z", ["z", "Z"]);
charMap.set("1", ["1", "!"]);
charMap.set("2", ["2", "@"]);
charMap.set("3", ["3", "#"]);
charMap.set("4", ["4", "$"]);
charMap.set("5", ["5", "%"]);
charMap.set("6", ["6", "^"]);
charMap.set("7", ["7", "&"]);
charMap.set("8", ["8", "*"]);
charMap.set("9", ["9", "("]);
charMap.set("0", ["0", ")"]);
charMap.set("!", ["!", "1"]);
charMap.set("@", ["@", "2"]);
charMap.set("#", ["#", "3"]);
charMap.set("$", ["$", "4"]);
charMap.set("%", ["%", "5"]);
charMap.set("^", ["^", "6"]);
charMap.set("&", ["&", "7"]);
charMap.set("*", ["*", "8"]);
charMap.set("(", ["(", "9"]);
charMap.set(")", [")", "0"]);
// add event listener to the button
document.getElementById("generate").addEventListener("click", genPassword);
function genPassword() {
  var userInput = document.getElementById("userInput").value;
  var password = "";
  var crypto = window.crypto || window.msCrypto;
  for (var i = 0; i < userInput.length; i++) {
    var charOptions = charMap.get(userInput[i].toLowerCase());
    if (!charOptions) {
      // if the character is not in the map, use it as is
      password += userInput[i];
      continue;
    }
    var randomNumber = new Uint32Array(1);
    crypto.getRandomValues(randomNumber);
    var randomIndex = randomNumber[0] % charOptions.length;
    password += charOptions[randomIndex];
  }
  document.getElementById("password").value = password;
}

document.getElementById("copy").addEventListener("click", copyPassword);
function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");
}

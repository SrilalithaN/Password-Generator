// Declraing Arrays
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// Declaring Variables
var confirmLength;
var confirmSpecialChar;
var confirmNumericChar;
var confirmUpperCase;
var confirmLowerCase;

var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// code to generate password
function generatePassword() {
  var confirmLength = prompt(
    "Choose the number of Characters for your password"
  );

  while (confirmLength < 8 || confirmLength > 128) {
    // Validates user input
    // Start user input prompts
    confirmLength = parseInt(
      prompt("You must choose between 8 and 128. Try again")
    );
  }
  //Repeat the number of characters chosen
  alert(`The password will have ${confirmLength} characters`);

  // Selecting the parameters for password
  var confirmSpecialChar = confirm(
    "Click OK if you wish to include special characters."
  );
  var confirmNumericChar = confirm(
    "Click OK if you wish to include numeric characters."
  );
  var confirmUpperCase = confirm(
    "Click OK if you wish to include Upppercase alphabets."
  );
  var confirmLowerCase = confirm(
    "Click OK if you wish to include Lowercase alphabets."
  );

  // loop if answer is outside the parameters
  if (
    confirmSpecialChar === false &&
    confirmNumericChar === false &&
    confirmUpperCase === false &&
    confirmLowerCase === false
  ) {
    alert("Please choose at least one parameter");
    var confirmSpecialChar = confirm(
      "Click OK if you wish to include special characters."
    );
    var confirmNumericChar = confirm(
      "Click OK if you wish to include numeric characters."
    );
    var confirmUpperCase = confirm(
      "Click OK if you wish to include Upppercase alphabets."
    );
    var confirmLowerCase = confirm(
      "Click OK if you wish to include Lowercase alphabets."
    );
  }
  //declaring an array for saving the chosen parameters for password
  var passwordchars = [];
  // all 4 parameters ok
  if (
    confirmSpecialChar &&
    confirmNumericChar &&
    confirmUpperCase &&
    confirmLowerCase
  ) {
    passwordchars = passwordchars.concat(
      specialCharacters,
      confirmNumericChar,
      confirmUpperCase,
      confirmLowerCase
    );
  }
  // 3 parameters ok
  else if (confirmSpecialChar && confirmNumericChar && confirmUpperCase) {
    passwordchars = passwordchars.concat(
      confirmSpecialChar,
      numericCharacters,
      confirmUpperCase
    );
  } else if (confirmSpecialChar && confirmNumericChar && confirmLowerCase) {
    passwordchars = passwordchars.concat(
      specialCharacters,
      numericCharacters,
      lowerCasedCharacters
    );
  } else if (confirmSpecialChar && confirmUpperCase && confirmLowerCase) {
    passwordchars = passwordchars.concat(
      specialCharacters,
      upperCasedCharacters,
      lowerCasedCharacters
    );
  } else if (confirmNumericChar && confirmUpperCase && confirmLowerCase) {
    passwordchars = passwordchars.concat(
      numericCharacters,
      upperCasedCharacters,
      lowerCasedCharacters
    );
  }
  // 2 parameters ok
  else if (confirmSpecialChar && confirmNumericChar) {
    passwordchars = passwordchars.concat(specialCharacters, numericCharacters);
  } else if (confirmSpecialChar && confirmUpperCase) {
    passwordchars = passwordchars.concat(
      specialCharacters,
      upperCasedCharacters
    );
  } else if (confirmSpecialChar && confirmLowerCase) {
    passwordchars = passwordchars.concat(
      specialCharacters,
      lowerCasedCharacters
    );
  } else if (confirmNumericChar && confirmUpperCase) {
    passwordchars = passwordchars.concat(
      numericCharacters,
      upperCasedCharacters
    );
  } else if (confirmNumericChar && confirmLowerCase) {
    passwordchars = passwordchars.concat(
      numericCharacters,
      lowerCasedCharacters
    );
  } else if (confirmUpperCase && confirmLowerCase) {
    passwordchars = passwordchars.concat(
      upperCasedCharacters,
      lowerCasedCharacters
    );
  }
  // 1 paramter ok
  else if (confirmSpecialChar) {
    passwordchars = passwordchars.concat(specialCharacters);
  } else if (confirmNumericChar) {
    passwordchars = passwordchars.concat(numericCharacters);
  } else if (confirmUpperCase) {
    passwordchars = passwordchars.concat(upperCasedCharacters);
  } else if (confirmLowerCase) {
    passwordchars = passwordchars.concat(lowerCasedCharacters);
  }
  console.log(passwordchars);

  // making an empty string for saving generated password
  var generatedPassword = "";

  for (var i = 0; i < confirmLength; i++) {
    generatedPassword =
      generatedPassword +
      passwordchars[Math.floor(Math.random() * passwordchars.length)];
    console.log(generatedPassword);
  }
  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

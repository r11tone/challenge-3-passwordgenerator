// variables (characters allowed in password)
var characterLength = 8;
var choiceArray = []

var specialCharacterArray = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+',];
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbersArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input

function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var randomPassword = generatePassword();
    passwordText.value = randomPassword;
  } else {
    passwordText.value = "";
  }

}
//generating password
function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomLetter = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomLetter];
  }
  return password;
}
//prompts for generating password
function getPrompts() {
  choiceArray = [];

  characterLength = parseInt(prompt("Choose a length of at least 8 characters and no more than 128 characters"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length needs to be 8 - 128 characters long.");
    return false;
  }
  if (confirm("Do you want to add SPECIAL CHARACTERS in your password?")) {
    choiceArray = choiceArray.concat(specialCharacterArray);
  }
  if (confirm("Do you want to add LOWERCASE letters in your password?")) {
    choiceArray = choiceArray.concat(lowerCaseArray);
  }
  if (confirm("Do you want to add UPPERCASE letters in your password?")) {
    choiceArray = choiceArray.concat(upperCaseArray);
  }
  if (confirm("Do you want to add NUMBERS in your password?")) {
    choiceArray = choiceArray.concat(numbersArray);
  }
  return true;
}

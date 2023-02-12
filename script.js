// variables
var passwordLength = 10; //random number reassigned at prompts
var passwordArray = [];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '~', '<', '>', '?', '/', ';', '{', '}', '[', ']'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
 function writePassword() { //when user clicks it runs this function
  var finalPrompts = makePrompts(); //then runs prompts to gather final arrays based on choices.
  var passwordText = document.querySelector("#password");

  if (finalPrompts) { //if true then run rest of function
    var finalPassword = generatePassword();
    passwordText.value = finalPassword;
  } else {
      passwordText.value = ""; //return empty
  }
}

// Prompt
function makePrompts() {
  passwordArray = [];

    passwordLength = prompt("How many characters do you want in your password?");

  if (passwordLength == NaN || passwordLength < 8 || passwordLength > 128) {
    alert("Password needs to contain 8 - 128 characters");
    return false;
  }
  if (confirm("Would you like uppercase letters?")) {
    passwordArray = passwordArray.concat(upperCase);
  }
  if (confirm("Would you like lowercase letters?")) {
    passwordArray = passwordArray.concat(lowerCase);
  }
  if (confirm("Would you like numbers?")) {
    passwordArray = passwordArray.concat(numbers);
  }
  if (confirm("Would you like special characters?")) {
    passwordArray = passwordArray.concat(specialSymbols);
  }
  return true;
}

// ForLoop to randomize characters for password array + password length
function generatePassword() {
  var password = "";
  for(var i = 0; i < passwordLength; i++) {
    var randomCharacter = Math.floor(Math.random() * passwordArray.length);
    password = password + passwordArray[randomCharacter];
  }
  return password;
}


var numbers = [1,2,3,4,5,6,7,8,9,0]
var symbols = ["@", "!", "$", "#", "*", "%"]
var Uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var Lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var charLength = "12";
var choiceArr = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var correct = getPrompts();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  if(correct) {
    var newpass = generatePassword();
    passwordText.value = newpass;
  } else {
    passwordText.value = "";
  }

}

function generatePassword(){
  var password = "";
  for (var i = 0; i < charLength; i++){
    var random = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[random];
  }
  return password;
}


function getPrompts() {
  charLength = parseInt(prompt("How many characters do you want in your password? Minimum 8, Maximum 128"));

  if(isNaN(charLength) || charLength < 8 || charLength > 128) {
    alert('Character length has to be between 8 and 128 digits.');
    return false;
  }

  if(confirm('Would you like to add lowercase letters in your passowrd?')); {
  choiceArr = choiceArr.concat(Lowercase);
}

if(confirm('Would you like to add uppercase letters in your passowrd?')); {
  choiceArr = choiceArr.concat(Uppercase);
}

if(confirm('Would you like to add symbols in your passowrd?')); {
  choiceArr = choiceArr.concat(symbols);
}

if(confirm('Would you like to add numbers in your passowrd?')); {
  choiceArr = choiceArr.concat(numbers);
}
return true;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

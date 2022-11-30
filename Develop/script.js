const header = document.getElementById("header");
const inputArea = document.getElementById("inputArea");


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var numChar = prompt("How many characters in the password?");
  var spChar = prompt("include special characters?");
  var numbers = prompt("include numbers?");
  if (numbers === "yes"){
    numbers = true;
  }else{
    numbers = false;
  }
  if (spChar === "yes"){
    spChar = true;
  }else{
    spChar = false;
  }

  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

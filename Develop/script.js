const header = document.getElementById("header");
const inputArea = document.getElementById("inputArea");


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  header.textContent = "How many characters?"
  inputArea.style.display  = "flex";
  generateBtn.addEventListener("characters", );
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

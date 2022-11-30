const header = document.getElementById("header");
const inputArea = document.getElementById("inputArea");


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // Input Prompts
  var numChar = prompt("How many characters in the password?");
  var numbers = prompt("include numbers?");
  var spChar = prompt("include special characters?");
  var upperChar = prompt("include capitals?");

  //changing values to true or false
   if (spChar === "yes"){
    spChar = true;
  }else{
    spChar = false;
  }

  if (numbers === "yes"){
    numbers = true;
  }else{
    numbers = false;
  }

  if (upperChar === "yes"){
    upperChar = true;
  }else{
    upperChar = false;
  }

  
  var password = generatePassword(numChar,spChar,numbers,upperChar);
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(l, spChar, num, caps){

  //charsets for numbers and special characters
  var charset = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var nmCharset = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","1","2","3","4","5","6","7","8","9","0"];
  var spCharset = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","{","]","}","/","|","~","]",",","<",".",">","?"];
  var spnmCharset = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","{","]","}","/","|","~","]",",","<",".",">","?","1","2","3","4","5","6","7","8","9","0"];
  

  //setting the current charset
  currentCharset = [];
  if(num == true && spChar == true){
    currentCharset = spnmCharset;
  }else if (num == true && spChar == false){
    console.log("numonly");
    currentCharste = nmCharset;

  }else if (num == false && spChar == true){
    currentCharset = spCharset
    console.log("spOnly")
  }else{
    currentCharset = charset
  }

  // password array
  password = [];

  //loop for randomly picking characters from the current charset
  for(var i = 0; i<l; i++){
    rand = Math.random()* currentCharset.length;
    randChar = currentCharset[Math.round(rand)];
    randCaps = (Math.random() * 2) + 1;

    //logic for adding capitals
    if(randCaps > 2 && caps == true){
      console.log(randChar);
      
      //checking if the random character is part of the letters charset
      if (charset.indexOf(randChar) !== -1){
        randChar = randChar.toUpperCase();
      }
    }
    //pushing the character to the password array
    password.push(randChar);
    
  }
  
  //joins the characters in the password array with no space in between
  return password.join("");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
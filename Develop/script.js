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

  //
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
  var charset = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var nmCharset = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","1","2","3","4","5","6","7","8","9","0"];
  var spCharset = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","{","]","}","/","|","~","]",",","<",".",">","?"];
  var spnmCharset = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","{","]","}","/","|","~","]",",","<",".",">","?","1","2","3","4","5","6","7","8","9","0"];
  
  t = [];
  if(num == true && spChar == true){
    t = spnmCharset;
  }else if (num == true && spChar == false){
    console.log("numonly");
    t = nmCharset;

  }else if (num == false && spChar == true){
    t = spCharset
    console.log("spOnly")
  }else{
    t = charset
  }
  password = [];

  for(var i = 0; i<l; i++){
    rand = Math.random()* t.length;
    randChar = t[Math.round(rand)];
    randCaps = (Math.random() * 2) + 1;

    if(randCaps > 2 && caps == true){
      console.log(randChar);
      
      if (charset.indexOf(randChar) !== -1){
        randChar = randChar.toUpperCase();
      }
    }
    password.push(randChar);
    
  }
  

  return password.join("");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
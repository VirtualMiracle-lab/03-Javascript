// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  
  // variables for the random password
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var symbols = "!@#$%^&*()";
  var pwField = document.getElementById("password");
  var plength;
  var pwCharSet = "";
  var generatePassword = "";


  // prompt to ask how long you want the password
var plength = prompt ("Pick a number between 8 and 25?");

  if(plength < 8) {
    alert("Select a number between 8 and 25");
    return;
  }

  if(plength > 25) {
    alert("Select a number between 8 and 25");
    return;
  }

  // variable for confirm messages
var uCase = confirm("Would you like to use uppercase letters?");
  if (uCase == true) {
    pwCharSet += upperCase;
  }

var lCase = confirm("Would you like to use lowercase letters?");
    if (lCase == true) {
      pwCharSet += lowerCase;
    }

var sym = confirm("Would you like to use symbols?");
    if (sym == true) {
      pwCharSet += symbols;
    }
  
var num = confirm("Would you like to use numbers?");
    if (num == true) {
      pwCharSet += numbers;
    }
  
console.log(pwCharSet)


    // for loop to create the random password
    for (let i = 0; i < plength; i++) {
      generatePassword += pwCharSet.charAt(Math.floor(Math.random() * pwCharSet.length));
    }

    // formula to push to the HTML
    pwField.innerHTML = generatePassword

}
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
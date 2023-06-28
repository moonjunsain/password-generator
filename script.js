// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var passwordForReturn = "";
  var pLength = 0;
  pLength = prompt("How long do you want your password to be? (Please Enter only positive whole number)");

  // checks if pLength is actually an integer
  if(Number.isInteger(pLength)){
    // proceed
  } else {
    // pLength has to be an int
    return "Please Enter Proper Value";
  }

  
// Returns password generated
  return passwordForReturn;
}
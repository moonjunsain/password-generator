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
  pLength = prompt("How long do you want your password to be? (min: 8, max: 128)");
  pLength = parseInt(pLength);
 

  // checks if pLength is actually an integer and within the range
  if(Number.isInteger(pLength) && pLength <= 128 && pLength >= 8){
    console.log("The number is valid");
    // proceed
    // confirm for any necessary properties for the password
    var includeSpecial = confirm("Do you want to include special characters?");
    var includeLowercase = confirm("Do you want to include lowercase characters?");
    var includeUppercase = confirm("Do you want to include uppercase characters");
    var includeNumeric = confirm("Do you want to include numbers?");

    
  } else {
    // pLength has to be an int
    console.log("The number is not valid");
    return "Please Enter Proper Value";
  }
  
// Returns password generated
  return passwordForReturn;
}
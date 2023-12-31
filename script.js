// Assignment Code
var generateBtn = document.querySelector("#generate");
// a list of variables for later use to create random password
const lowercases = "abcdefghijklmnopqrstuvwxyz";
const uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const specials = "~!@#$%^&*()?<>-=_+[]{};':\\|/";

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
  // To make it applicable for <= and >=
  pLength = parseInt(pLength);
 

  // checks if pLength is actually an integer and within the range
  if(Number.isInteger(pLength) && pLength <= 128 && pLength >= 8){
    console.log("The number is valid");
    // proceed
    // confirm for any necessary properties for the password
    var stringForCharacters = "";
    var includeSpecial = confirm("Do you want to include special characters?");
    
    // when the user says ok
    if(includeSpecial){
      stringForCharacters += specials
    }

    var includeLowercase = confirm("Do you want to include lowercase characters?");
    if(includeLowercase){
      stringForCharacters += lowercases;
    }

    var includeUppercase = confirm("Do you want to include uppercase characters?");
    if(includeUppercase){
      stringForCharacters += uppercases;
    }

    var includeNumeric = confirm("Do you want to include numbers?");
    if(includeNumeric){
      stringForCharacters += numbers;
    }
    
    // When the user said no to all of the above
    if(!includeLowercase && !includeNumeric && !includeSpecial && !includeUppercase) {
      alert("C'mon at least give me something to work on");
      return "Stop being so picky";
    }
  
  } else {
      // when pLength does not follow the guideline
      console.log("The number is not valid");
      alert("What did I say about the password length tsk tsk");
      return "Please Enter Proper Value";
  }

  // calling function to generate a string consists of stringForCharacters(It's been building up)
  passwordForReturn = createRandomString(pLength, stringForCharacters);
  // Returns password generated
  return passwordForReturn;
}

// function for creating a string composed of random characters
function createRandomString(length, characters){
  var result = "";
  // for loop to concatenate random characters to result
  for(var i = 0; i < length; i++){
    // using Math.random to obtain random index (no need to add min since our min here is just 0 for index)
    var randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

// Assignment Code

const generateBtn = document.querySelector("#generate");

const getPasswordLength = () => {
  const userInput = prompt("put in a password length between 8 - 128 chars");
  return userInput;
};

const getPasswordCriteria = () => {
  const confirmNumber = confirm("Will this contain numbers?");
  const confirmCharacter = confirm("Will this contain special characters?");
  const confirmUppercase = confirm("Will this contain Uppercase letters?");
  const confirmLowercase = confirm("Will this contain Lowercase letters?");
  return {
    isConfirmNumber: confirmNumber,
    isConfirmCharacter: confirmCharacter,
    isConfirmUppercase: confirmUppercase,
    isConfirmLowercase: confirmLowercase,
    // loop through object to ensure atleast one is chosen, then alert if one isn't and if/else to ensure we have 2 plus once we have this loop through to gen password from random func
  };
};
// create four functions to generate random return using in build method of charcode
const getRandomPassword = () => {
  function isConfirmLowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  function isConfirmUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  function isConfirmNumber() {
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  function isConfirmCharacter() {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
};

// main function to generate the random password
const generatePassword = () => {
  const passwordLength = getPasswordLength();
  const passwordLengthInput = parseInt(passwordLength);
  const isNumber = Number.isInteger(passwordLengthInput);
  if (!isNumber || passwordLengthInput < 8 || passwordLengthInput > 128) {
    alert("please enter a valid password length");
  } else {
    return passwordLengthInput && getPasswordCriteria();
  }

  /*
   * All your code goes here to generate a password
   */
  return "";
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

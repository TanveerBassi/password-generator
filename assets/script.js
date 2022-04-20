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
  };
};

const getRandomPassword = () => {};

// main function to generate the random password
const generatePassword = () => {
  const passwordLength = getPasswordLength();
  const passwordLengthInput = parseInt(passwordLength);
  const isNumber = Number.isInteger(passwordLengthInput);
  if (!isNumber || passwordLengthInput < 8 || passwordLengthInput > 128) {
    alert("please enter a valid password length");
    //alert
  } else {
    return passwordLengthInput && getPasswordCriteria();
    //proceed with code
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

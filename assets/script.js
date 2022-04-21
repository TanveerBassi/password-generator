// Assignment Code
const generateBtn = document.querySelector("#generate");

const getPasswordLength = () => {
  // create a prompt and store as a variable
  const userInput = prompt(
    "Please input a password lenght between 8 - 128 characters"
  );
  // parse userInput covert string to int
  const passwordLength = parseInt(userInput);

  if (!isNaN(passwordLength) && passwordLength >= 8 && passwordLength <= 128) {
    // If passwordlenght isn't a number or less then 8 or above 128 characters - return password length
    return passwordLength;
  }
  //if statement criteria is not met prompt alert to put in valid section
  else {
    alert("Please put in a valid selection");
  }
};

// main function to generate the random password
const generatePassword = () => {
  // get the password length
  const passwordLength = getPasswordLength();

  // get the password criteria
  const passwordCriteria = getPasswordCriteria();

  // create random password
  const password = createRandomPassword(passwordLength, passwordCriteria);

  return password;
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

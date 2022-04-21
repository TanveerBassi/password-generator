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
    // If password length isn't a number or less then 8 or above 128 characters - return password length
    return passwordLength;
  }
  //if statement criteria is not met prompt alert to put in valid section
  else {
    alert("Please put in a valid selection");
    window.location.reload(true);
    document.getElementById("password").reset();
  }
};

const getPasswordCriteria = () => {
  // four prompts created - which are variables
  const lowercase = confirm("do you want lowercase in your password?");
  const uppercase = confirm("do you want uppercase in your password?");
  const numeric = confirm("do you want numbers in your password?");
  const specialCharacter = confirm(
    "do you want special characters in your password?"
  );

  //empty array created to hold user choice
  const choiceArray = [];
  // if one user choices one of the selected prompts push into array
  if (lowercase) {
    choiceArray.push("abcdefghijklmnopqrstuvwxyz");
  }

  if (uppercase) {
    choiceArray.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }

  if (numeric) {
    choiceArray.push("0123456789");
  }

  if (specialCharacter) {
    choiceArray.push("%&'()*+,-./:;<=>?@[]^_`");
  }

  return choiceArray;
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

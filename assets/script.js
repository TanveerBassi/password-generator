// Assignment Code

const generateBtn = document.querySelector("#generate");

const getPasswordLength = () => {
  const userInput = prompt(
    "Please provide a password length between 8 - 128 characters"
  );
  return userInput;
};

const getPasswordCriteria = () => {
  const userQuestions = [
    "Would you like to include lowercase in your password?",
    "Would you like to include uppercase in your password?",
    "Would you like to include special characters in your password?",
    "Would you like to include numbers in your password?",
  ];

  const characters = [
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    " !#%&*+,./?@",
    "0123456789",
  ];

  const resultArray = [];

  for (let i = 0; i < userQuestions.length; i += 1) {
    const userChoice = confirm(question[i]); 

    if (userChoice) {

      resultArray.push(characters[i]);
    }
  }

  if (resultArray.length === 0){
    alert ("please select atleat one password criteria");
  } else {
    return resultArray;
  }
//   const userQuestions = [];

//   const confirmNumber = confirm("Will this contain numbers?");
//   const confirmCharacter = confirm("Will this contain special characters?");
//   const confirmUppercase = confirm("Will this contain Uppercase letters?");
//   const confirmLowercase = confirm("Will this contain Lowercase letters?");

//   // check if user has selected atleast one criteria

//   // const passwordCriteriaArray = [];
//   // //pass into array once have ones that have been selected
//   // if (
//   //   // 4 negative
//   // ) {
//   //   alert("You must choose a criteria!");
//   // } else {
//   //   prompt("My guy");
//   // }
//   // four if statements - if confirm number is into the array
//   // loop through object to ensure atleast one is chosen, then alert if one isn't and if/else to ensure we have 2 plus once we have this loop through to gen password from random func
//   // maybe use Object.entries()

//   var passwordCriteria = {
//     confirmNumber: confirmNumber,
//     confirmCharacter: confirmCharacter,
//     confirmUppercase: confirmUppercase,
//     confirmLowercase: confirmLowercase,
//   };

//   return passwordCriteria;
// };
//DO THIS TOMORROW, THIS CAUSING ISSUES MAKE THIS SIMPLER
// create four functions to generate random return using in build method of charcode
const randomNumberGenerator = {
  lowerCase: function isConfirmLowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  },

  upperCase: function isConfirmUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  },

  number: function isConfirmNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  },

  specialCharacter: function isConfirmCharacter() {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
    //create array to hold password return value
    //return to generatePassword to display on screen
  },
};

// main function to generate the random password
const generatePassword = () => {
  const passwordLength = getPasswordLength();
  // password length validation
  const passwordLengthInput = parseInt(passwordLength);
  const isNumber = Number.isInteger(passwordLengthInput);

  var possibleCharacters = [];

  if (!isNumber || passwordLengthInput < 8 || passwordLengthInput > 128) {
    alert("please enter a valid password length");
  } else {
    const passwordCriteria = getPasswordCriteria();

    // if (passwordCriteria.confirmNumber) {
    //   const numbersOptions1 = [
    //     "0",
    //     "1",
    //     "2",
    //     "3",
    //     "4",
    //     "5",
    //     "6",
    //     "7",
    //     "8",
    //     "9",
    //   ];
    //   const numbersOptions2 = [
    //     "0",
    //     "1",
    //     "2",
    //     "3",
    //     "4",
    //     "5",
    //     "6",
    //     "7",
    //     "8",
    //     "9",
    //   ];

    //   possibleCharacters = possibleCharacters.concat(numbersOptions1);
    //   possibleCharacters = possibleCharacters.concat(numbersOptions2);

    //   console.log("possibleCharacter: " + possibleCharacters);
    // }

    /*if (passwordCriteria.confirmNumber) {
      var temp = randomNumberGenerator.number;
      console.log(temp());
    }*/

  //   console.log("passwordCriteria: " + passwordCriteria.confirmNumber);
  // }

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

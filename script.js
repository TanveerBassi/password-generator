// Assignment Code
const generateBtn = document.querySelector("#generate");

// const getPasswordLenght = () => {

// }

// const getPasswordCriteria = () => {

// }

// const getRandomPassword = () => {

// }

//click on button - links to prompt
//! prompt 1 - enter a password between 8 - 128
//! alert great! that meets our criteria for characters!characters this can include lowercase, uppercase, numeric, and/or special characters
//store prompt 1 answer a variable - example initialPassword = "TanveerBassi123" - info cust has supplied
//! prompt 1 - if customer enters password less then 8 or more then 128 characters, alert cust please enter a character between 8 - 128 characters
//! prompts 2 - if cust has made a password between 8 -128 characters
//! prompt

// main function to generate the random password
const generatePassword = () => {
  /*
   * All your code goes here to generate a password
   */
  /*mock window prompt to see if it works
  result = window.prompt("yoooo put in a password");
  console.log(result);;*/
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//!plan
//when I click on generate password -

//series of prompts for password criteria: 8 characters and no more than 128 characters, character types to include in the password. confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//arrays for prompts?
//prompts - on screen - for password criteria -
//objects for prompts

//! GIVEN I need a new, secure password
// WHEN I click the button to generate a password
//! onclick event, linked to button on HTML
// THEN I am presented with a series of prompts for password criteria
//! prompts on screen for confirm password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//! arrays for each character list - sorted in array - with a result which we sort as a function - 2D array - to hold arrays of characters we have
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
//! create function userInput which confirms at least one character type has been selected which is stored in a variable called isValidInput
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
//! create function called generatedAnswer once criteria is met, user clicks generate buutton and a password is created that meets criteria user has input
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

//! # 03 JavaScript: Password Generator

//! ## Your Task

// This week's Challenge requires you to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

// The password can include special characters. If you’re unfamiliar with these, see this [list of password special characters](https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation.

//! ## User Story

// ```
// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security
// ```

//! ## Acceptance Criteria

// ```
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```

// ## Mock-Up

// The following image shows the web application's appearance and functionality:

// ![The Password Generator application displays a red button to "Generate Password".](./Assets/03-javascript-homework-demo.png)

// ## Grading Requirements

// > **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
// >
// > - A repository that has no code
// >
// > - A repository that includes a unique name but nothing else
// >
// > - A repository that includes only a README file but nothing else
// >
// > - A repository that only includes starter code

// This Challenge is graded based on the following criteria:

// ### Technical Acceptance Criteria: 40%

// - Satisfies all of the preceding acceptance criteria.

// ### Deployment: 32%

// - Application deployed at live URL.

// - Application loads with no errors.

// - Application GitHub URL submitted.

// - GitHub repository that contains application code.

// ### Application Quality: 15%

// - Application user experience is intuitive and easy to navigate.

// - Application user interface style is clean and polished.

// - Application resembles the mock-up functionality provided in the Challenge instructions.

// ### Repository Quality: 13%

// - Repository has a unique name.

// - Repository follows best practices for file structure and naming conventions.

// - Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

// - Repository contains multiple descriptive commit messages.

// - Repository contains quality readme file with description, screenshot, and link to deployed application.

// ## Review

// You are required to submit the following for review:

// - The URL of the deployed application.

// - The URL of the GitHub repository, with a unique name and a readme describing the project.

// ---

// © 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

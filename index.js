// console.log("hello");

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generateMarkdown");
const path = require("path");

// TODO: Create an array of questions for user input
const readmeQuestions = [
  {
    type: "input",
    message: "What is the title of your application?",
    name: "title", 
  },
  {
    type: "input",
    message: "Provide a description of your application?",
    name: "description",
  },
  {
    type: "input",
    message: "How can others you install your application?",
    name: "installation",
  },
  {
    type: "input",
    message: "How do you use your application?",
    name: "usage",
  },
  {
    type: "checkbox",
    message: "What License did you use for this repository?",
    choices: 
    [ "MIT",
      "GNU General Public License 2.0",
      "Apache License 2.0",
      "GNU General Public License 3.0"],
    name: "license", 
  },
  {
    type: "input",
    message: "How can others contribute to this project?",
    name: "contributing",
  },
  {
    type: "input",
    message: "How can others update the tests for your project?",
    name: "tests"
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address where users can contact you?",
    name: "email",
  },
  {
    type: "input",
    message: "Is there any other information you wish to provide?",
    name: "other",
  }
];

// TODO: Create a function to write README file
function promptUser() {
  inquirer
    .prompt(readmeQuestions)
    .then((response) =>
      fs.writeFileSync("README.md", generate.generateMarkdown(response))
    )
    .then(() => console.log("Successfully wrote to generateMarkdown"))
    .catch((err) => console.error(err));
}

promptUser();

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); 
const generate = require('./utils/generateMarkdown.js');
const path = require('path');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
      {
        type: "input",
        message: "What is a good Title for your project?",
        name: "title", 
      },
      {
        type: "input",
        message: "What is a good Description of your project?",
        name: "description", 
      },
      {
        type: "input",
        message: "How do you Install your application?",
        name: "installation",
      },
      {
        type: "input",
        message: "How do you Install your application?",
        name: "installation",
      },
      {
        type: "input",
        message: "How do you Use your application?",
        name: "usage",
      },
      {
        type: "checkbox",
        message: "What License did you use for this repository?",
        choices: ["MIT", "GNU General Public License 2.0", "Apache License 2.0", "GNU General Public License 3.0"],
        name: "license",
      },
      {
        type: "input",
        message: "How can people Contribute to your project?",
        name: "contributing",
      },
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
      },
      {
        type: "input",
        message: "What is your email address where users and contributors can send questions?",
        name: "email"
      } 
    ]);
};

// init();

// TODO: Create a function to write README file
    promptUser()
      .then((response) => fs.writeFileSync('README.md', generateMarkdown(response)))
      .then(() => console.log('Successfully wrote to generateMarkdown'))
      .catch((err) => console.error(err));


// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

















// console.log("hello");

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); 
const generate = require("./utils/generateMarkdown");
const path = require('path');

// TODO: Create an array of questions for user input
    const readmeQuestions= [
      {
        type: "input",
        message: "What is a good title of your project?",
        name: "title", 
      },
      {
        type: "input",
        message: "What is a good description of your project?",
        name: "description", 
      },
      {
        type: "input",
        message: "How do you install your application?",
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
        choices: ["MIT", "GNU General Public License 2.0", "Apache License 2.0", "GNU General Public License 3.0"],
        name: "license",
      },
      {
        type: "input",
        message: "How to contribute to this project?",
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
    ];


// TODO: Create a function to write README file
    function promptUser() {
      inquirer.prompt(readmeQuestions).then((response) => fs.writeFileSync('README.md', generate.generateMarkdown(response)))
      .then(() => console.log('Successfully wrote to generateMarkdown'))
      .catch((err) => console.error(err));
    }

   promptUser(); 

















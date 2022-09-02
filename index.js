const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

//Questions for the prompt
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please provide a description of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "How do you install your project?",
    name: "install",
  },
  {
    type: "input",
    message: "How do you use your project?",
    name: "usage",
  },
  {
    type: "checkbox",
    message: "What licenses does your project have?",
    choices: [
      {
        name: "MIT",
        value: {
          badgeImageURL: "https://img.shields.io/badge/License-MIT-yellow.svg",
          licenseLink: "https://opensource.org/licenses/MIT",
          licenseName: "MIT",
        },
      },
      {
        name: "GNU",
        value: {
          badgeImageURL: "https://img.shields.io/badge/License-GPLv3-blue.svg",
          licenseLink: "https://www.gnu.org/licenses/gpl-3.0",
          licenseName: "GNU",
        },
      },
      {
        name: "Apache",
        value: {
          badgeImageURL:
            "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
          licenseLink: "https://opensource.org/licenses/Apache-2.0",
          licenseName: "Apache",
        },
      },
    ],
    name: "licenses",
  },
  {
    type: "input",
    message: "How would you like others to contribute?",
    name: "contribute",
  },
  {
    type: "input",
    message:
      "Please provide instructions of how to run the tests for this project.",
    name: "test",
  },
  {
    type: "input",
    message: "What is your full name?",
    name: "fullName",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your GitHub profile URL?",
    name: "gitHub",
  },
  {
    type: "input",
    message: "Please specify how to reach you for additional questions.",
    name: "contactInstructions",
  },
];

const fileName = "./README-demo/README.md";

//Creating README file
function writeToFile(fileName, fileContents) {
  fs.writeFile(fileName, fileContents, (err) => {
    err ? console.error(err) : console.log("Success!");
  });
}

//function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    var fileContents = generateMarkdown(responses);

    writeToFile(fileName, fileContents);
  });
}

// Function call to initialize app
init();

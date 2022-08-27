// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    }, {
        type: "input",
        message: "Please provide a description of your project.",
        name: "description",
    }, {
        type: "input",
        message: "How do you install your project?",
        name: "install",
    }, {
        type: "input",
        message: "How do you use your project?",
        name: "usage",
    }, {
        type: "checkbox",
        message: "What licenses does your project have?",
        //choices: //put choices here!!
        name: "license",
    }, {
        type: "input",
        message: "How would you like others to contribute?",
        name: "contribute",
    },  {
        type: "input",
        message: "Please provide instructions of how to run the tests for this project.",
        name: "test",
    },{
        type: "input",
        message: "What is your full name?",
        name: "name",
    },{
        type: "input",
        message: "What is your email address?",
        name: "email",
    },{
        type: "input",
        message: "What is your GitHub profile URL?",
        name: "gitHub",
    },{
        type: "input",
        message: "Please specify how to reach you for additional questions.",
        name: "question",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


// ACCEPTANCE CRITERIA
// - WHEN I am prompted for information about my application repository
        // THEN a high-quality, professional   README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// - WHEN I enter my project title
        // THEN this is displayed as the title of the README
// - WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
        // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// - WHEN I choose a license for my application from a list of options
        // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// - WHEN I enter my GitHub username
        // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// - WHEN I enter my email address
        // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// - WHEN I click on the links in the Table of Contents
        // THEN I am taken to the corresponding section of the README
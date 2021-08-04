// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown.js");

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
    {
        type: "input",
        message: "What is your project title?",
        name: "title"
    } 
])};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then((answers) => writeFileAsync(`./GeneratedReadme/${answers.title}.md`, generateMarkdown(answers)))
    .then(() => console.log("Sucess!"))
    .catch((err) => console.error(err));
}


// Function call to initialize app
init();

//Our dependencies
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown.js");

//Creates our readme asynchronously
const writeFileAsync = util.promisify(fs.writeFile);

//Our questions array
const promptUser = () => {
    return inquirer.prompt([
    {
        type: "input",
        message: "Please enter your project title as it appears on Github",
        name: "title"
    }, 
    {
        type: "input",
        message: "Please enter a short description of your project. Points to cover: What was your motivation?\n Why did you build this?\n What does it solve?\n What did you learn?\n It can be pasted in if it is multi-line.",
        name: "description"
    },
    {
        type: "input",
        message: "Please provide a step by step guide to the installation of the project. \n It can be pasted in if it is multi-line.",
        name: "installation"
    },
    {
        type: "input",
        message: "Please provide the instructions and examples for use.",
        name: "usage"
    },
    {
        type: "input",
        message: "Please provide the relative file path for a screenshot.\n This MUST be relative to the end project for which we are generating this ReadMe",
        name: "usageScreenshot"
    },
    {
        type: "input",
        message: "Please list any contributors on this project as a comma seperated list (e.g Tom, Dick, Harry)",
        name: "contributors"
    },
    {
        type: "input",
        message: "Please list any 3rd party technologies used as a comma seperated list (e.g JQuery, Moment.js, Bootstrap)",
        name: "technology"
    },
    {
        type: "list",
        message: "Please pick the license you wish to apply.",
        name: "license",
        choices : ["GNU Affero General Public License v3.0", "Apache License 2.0", "BSD 2-Clause \"Simplified\" License", "BSD 3-Clause \"New\" or \"Revised\" License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 1.0", "GNU General Public License v2.0", "GNU General Public License v3.0",  "MIT License", "Mozilla Public License 2.0", "The Unlicense", "None"]       
    },
    {
        type: "input",
        message: "Please enter your Github Username",
        name: "username"
    },
    {
        type: "input",
        message: "Please input your email address.",
        name: "emailAddress"
    }
    // {
    //     type: "input",
    //     message: "Please input any tests for the code.",
    //     name: "tests"
    // }

])};


//Create out function
function init() {
    promptUser()
    .then((answers) => writeFileAsync(`./GeneratedReadme/${answers.title}.md`, generateMarkdown(answers)))
    .then(() => console.log("Sucess!"))
    .catch((err) => console.error(err));
}


// Function call to initialize app
init();

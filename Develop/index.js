// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generatorMarkdown = require ("./utils/generateMarkdown");

const path = require ("path");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your application?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a brief description and purpose of your application."
    },
    {
        type: "input",
        name: "technologies",
        message: "Please list the technologies used for your application?"
    },
    {
        type: "input",
        name: "installation",
        message: "What steps are required to install your application. Please provide step by step instructions."
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide usage instructions, please include screenshots or demo video."
    }, 
    {
        type: "input",
        name: "deployment",
        message: "Please provide the github pages link and github repo link to your application."
    }
    ,
    {
        type: "input",
        name: "sources",
        message: "Please list the sources used to complete this application."
    },
    {
        type: "list",
        name: "license",
        message: "would you like a license?",
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    }











];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        writeToFile("README.md",generatorMarkdown({...answers}))
    })

}

// Function call to initialize app
init();
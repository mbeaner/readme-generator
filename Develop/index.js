// Packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What would you like the title of your project to be?'
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: "list",
        name: "license",
        message: "Select a license you would like to use for this project.",
        choices: ["MIT", "Apache2.0", "Boost1.0", "GPL v3", "IBM Public License Version 1.0" ,"BSD3", "None"]
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a brief description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Explain how to install your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Explain how to use your Project.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Give instructions on how to contribute to your project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Explain how to run test for this project.'
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err);
        } else {
            console.log('File created!');
        }
    });
};

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => 
        writeToFile('newREADME.md', generateMarkdown(data))
    )
}

// Function call to initialize app
init();

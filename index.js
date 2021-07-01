// require statements
const inquirer = require('inquirer');
const fs = require('fs')

// array of questions for user input
const questions = [
    {type: 'input', message: 'What is your GitHub username?', name: 'username'},
    {type: 'input', message: 'What is your email address?', name: 'email'},
    {type: 'input', message: "What is your project's name?", name: 'project'},
    {type: 'input', message: 'Write a short description of project:', name: 'description'},
    {type: 'input', message: 'Enter in type of license for project:', name: 'license'},
    {type: 'input', message: 'What command to use to install dependencies?', name: 'install'},
    {type: 'input', message: 'What command to use to run tests?', name: 'tests'},
    {type: 'input', message: 'What does user need to know about repo?', name: 'info'},
    {type: 'input', message: 'What does user need to know to contribute?', name: 'contribute'}
];

// function to write README file
function writeToFile(fileName, data) {}

// initializes the app
function init() {
inquirer 
    .prompt(questions)
}

// calls function to initialize app
init();

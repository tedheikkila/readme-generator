// require statements
const inquirer = require('inquirer');
const fs = require('fs')
const generate = require('./utils/generateMarkdown')

// array of questions for user input
const questions = [
    {type: 'input', message: "What is your project's name?", name: 'title'},
    {type: 'input', message: 'What is your GitHub username?', name: 'username'},
    {type: 'input', message: 'What is your email address?', name: 'email'},
    {type: 'input', message: 'Write a short description of the app:', name: 'description'},
    {type: 'list', message: 'Select a license for the app:', choices: ['MIT', 'Apache', 'Mozilla', 'None'], name: 'license'},
    {type: 'list', message: 'Desired command to install dependencies?', choices: ['npm install', 'npm i'], name: 'installation'},
    {type: 'list', message: 'Desired command to run tests?', choices: ['npm test', 'npm t'], name: 'tests'},
    {type: 'input', message: 'What does a user need to know about the repo?', name: 'usage'},
    {type: 'input', message: 'What does a user need to know to contribute?', name: 'contributing'},
    {type: 'confirm', message: 'Compile README file now?', name: 'compile'},
];

// calls function to initialize app (node index.js)
init();

// initializes the app
function init() {
inquirer 
    .prompt(questions)

    .then ((data) => {

        const fileName = `${data.title.toLowerCase()}.md`

        writeToFile(fileName, data)
    })
}

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, generate.generateMarkdown(data), (err) => {
        if(err) console.log("err:", err);
    })
}

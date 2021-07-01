// require statements
const inquirer = require('inquirer');
const fs = require('fs')

// array of questions for user input
const questions = [
    {type: 'input', message: 'What is your GitHub username?', name: 'username'},
    {type: 'input', message: 'What is your email address?', name: 'email'},
    {type: 'input', message: "What is your project's name?", name: 'project'},
    {type: 'input', message: 'Write a short description of project:', name: 'description'},
    {type: 'input', message: 'Enter in the type of license for project:', name: 'license'},
    {type: 'input', message: 'Desired command to install dependencies:', name: 'install'},
    {type: 'input', message: 'Desired command to run tests:', name: 'tests'},
    {type: 'input', message: 'What does a user need to know about the repo?', name: 'info'},
    {type: 'input', message: 'What does a user need to know to contribute?', name: 'contribute'}
];

// calls function to initialize app
init();

// initializes the app
function init() {
inquirer 
    .prompt(questions)

    .then ((data) => {

        const saveData = `
        ${data.username},
        ${data.email},
        ${data.project},
        ${data.description},
        ${data.license},
        ${data.install},
        ${data.test},
        ${data.info},
        ${data.contribute},
        `

        const fileName = `${data.project.toLowerCase()}.md`

        writeToFile(fileName, saveData)
    })

}

// function to write README file
function writeToFile(fileName, saveData) {

    fs.writeFile(fileName, saveData, (err) => {
        if(err) console.log("err:", err);
    })

    

}

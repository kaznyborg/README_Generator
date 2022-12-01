// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What do you want to call the project',
        name: 'fileName'
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'How does a user intall this project?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'How does a user use this project?',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'What kind of liscense is your project?',
        name: 'license',
        choices: [
            'MIT',
            'ISC',
            'CC0'
        ]    
    },
    {
        type: 'input',
        message: 'Who was involved in the development of this project?',
        name: 'credits'
    },
    {
        type: 'input',
        message: 'How can a user contribute to this project?',
        name: 'contribute'
    },
    {
        type: 'input',
        message: 'What tests should be used for this project?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'If there are any questions how can you be contacted at your GitHub?',
        name: 'questionsgit'
    },

    {
        type: 'input',
        message: 'If there are any questions how can you be contacted at your email?',
        name: 'questionsEmail'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(response => {
            const md = generateMarkdown(response)
            writeToFile(`${response.fileName}.md`, md)
        })
}

// Function call to initialize app
init();

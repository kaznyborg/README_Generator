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
            {name: 'Apache', value:'[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'},
            {name: 'Boost', value:'[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'},
            {name: 'BSD', value:'[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'},
            {name: 'Eclipse', value:'[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'},
            {name: 'GNU', value:'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'},
            {name: 'The Organization for Ethical Source', value:'[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)'},
            {name: 'IBM', value:'[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'},
            {name: 'ISC', value:'[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'},
            {name: 'MIT', value:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'},
            {name: 'Mozilla', value:'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'},
            {name: 'Open Data Commons', value:'[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)'},
            {name: 'Open Database License', value:'[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)'},
            {name: 'Public Domain Dedication and License', value:'[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)'},
            {name: 'Perl', value:'[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'},
            {name: 'SIL', value:'[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)'},
            {name: 'WTFPL', value:'[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)'},
            {name: 'Zlib', value:'[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)'},
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

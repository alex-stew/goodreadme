const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('../utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        message: 'What is the name of your project/application?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please, enter a description for your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What dependencies are required to run your project/application?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the purpose of your project/application?',
        name: 'usage',
    },
    {
        type: 'input',
        message: "Add any contributors you'd like to credit for their work on the project.",
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'What are the testing instructions?',
        name: 'test',
    },
    {
        type: 'input',
        message: "Who is recieving the credit for this work?",
        name: 'credits',
    },
    {
        type: 'checkbox',
        message: 'Please, select a License from the following:',
        choices: [
            "Apache",
            "MIT",
            "ISC",
            "GNU GPLv3"
        ],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your contact email for this project/application?',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Successfully wrote a 'good' readME.md file on your behalf :)!!");
    })
}

// TODO: Create a function to initialize app
async function init() {
    try {
        const data = await inquirer.prompt(questions);
        const readMe = generateMarkdown(data);

        await writeToFile(`${data.title}".md", readMe`);
    } catch (err) {
        console.log(err);
    }
}

// Function call to initialize app
init();
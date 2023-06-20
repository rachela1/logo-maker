const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');

const prompt = inquirer.createPromptModule();

prompt([
    {
     type: 'input',
     message: 'Enter logo characters (up to three characters).',
     name:'logoCharacters',
    },
    {
     type: 'input',
     message: 'Choose the text color (color keyword OR a hexadecimal number).',
     name: 'textColor',
    },
    {
     type: 'list',   
     message: 'Choose a shape.',
     choices: ['circle', 'triangle', 'square'],
     name: 'logoShape',
    },
    {
     type: 'input',
     message: 'Choose the shape color (color keyword OR a hexadecimal number).',
     name: 'shapeColor',
    },
]).then((answers) => {
    // if (answers.text.length > 3) {
    //     console.log("No more than 3 characters, please.");
    //     promptUser();
    // } else {
    //     writeToFile('logo.svg', answers);
    // }
    console.table(answers);
});

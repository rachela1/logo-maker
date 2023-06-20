const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');

const prompt = inquirer.createPromptModule();

prompt([
    {
     type: 'input',
     message: 'Enter logo characters (up to three characters).',
     name:'characters',
    },
    {
     type: 'input',
     message: 'Choose the text color (color keyword OR a hexadecimal number).',
     name: 'text color',
    },
    {
     type: 'list',   
     message: 'Choose a shape.',
     choices: ['circle', 'triangle', 'square'],
     name: 'shape',
    },
    {
     type: 'input',
     message: 'Choose the shape color (color keyword OR a hexadecimal number).',
     name: 'shape color',
    },
]).then((answers) =>{
    console.table(answers);
});
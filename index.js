const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
const {generateSVG} = require('./lib/generateSVG');
const {generateShape} = require('./lib/generateShape');

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
     choices: ['Circle', 'Triangle', 'Square'],
     name: 'logoShape',
    },
    {
     type: 'input',
     message: 'Choose the shape color (color keyword OR a hexadecimal number).',
     name: 'shapeColor',
    },
]).then((data) => {
    const svgPath = ("logo.svg");
    const finishedLogo = generateShape(data);

    fs.writeFile(svgPath, generateSVG(finishedLogo), (err) =>
        err ? console.error(err) : console.log("Completed logo.svg")
    );
});

const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');
const inquirer = require('inquirer')

const getUserInput = (questions) => {
    return inquirer.prompt(questions);
};

const generateLogo = ()=> {
    let text, textColor, selectedShape, shapeColor;
}

getUserInput([
    {
        type: 'input',
        name: 'text',
        message: 'Enter 3 characters for text',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter textColor',
    },
    {
        type: 'checkbox',
        name: 'shapeChoice',
        message: 'Choose shape',
        Choices: [
            { name: 'Circle', value: '1' },
            { name: 'Triangle', value: '2' },
            { name: 'Square', value: '3' }
        ]
    }
])
//I WANT to generate a simple logo for my projects
//SO THAT I don't have to pay a graphic designer
//Acceptance Criteria
//GIVEN a command-line application that accepts user input
//WHEN I am prompted for text
//THEN I can enter up to three characters
//WHEN I am prompted for the text color
//THEN I can enter a color keyword (OR a hexadecimal number)
//WHEN I am prompted for a shape
//THEN I am presented with a list of shapes to choose from: circle, triangle, and square
//WHEN I am prompted for the shape's color
//THEN I can enter a color keyword (OR a hexadecimal number)
//WHEN I have entered input for all the prompts
//THEN an SVG file is created named `logo.svg`
//AND the output text "Generated logo.svg" is printed in the command line
//WHEN I open the `logo.svg` file in a browser
//THEN I am shown a 300x200 pixel image that matches the criteria I entered (via javascript)
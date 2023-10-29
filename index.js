//import lib and inquire
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');
const inquirer = require('inquirer')

//function to get user input
const getUserInput = (questions) => {
    return inquirer.prompt(questions);
};

//function to generate the logo
const generateLogo = ()=> {
    let text, textColor, selectedShape, shapeColor;

//start process of obtaining user info
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
        type: 'input',
        name: 'shapeChoice',
        message: 'Choose a shape - 1 for Circle, 2 for Triangle, 3 for Square:',
    }
])

    .then((answers) => {
        //store user inputs
        text = answers.text;
        textColor = answers.textColor;
        const shapeChoices = answers.shapeChoice;
        //check selected shape
        if (shapeChoices === '1') {
            selectedShape = new Circle(50);
        }
        if (shapeChoices === '2') {
            selectedShape = new Triangle();
        }
        if (shapeChoices === '3') {
           return getUserInput([
            {
                type:'input',
                name: 'sideLength',
                message: 'Enter side length of square:',
            }
           ]);
        } else {
            console.log('Invalid, default Circle.');
            selectedShape = new Circle(50);
        //default to circle
        return null;
        }
    })
    .then((result) => {
        //create square if selected
        if (result) {
            selectedShape = new Square(parseInt(result.sideLength, 10) || 50);
        }
        return getUserInput([
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter Shape color:'
            }
        ]);
    })

    .then((answers) => {
        //store shape color
        shapeColor = answers.shapeColor;
        //svg cont
        const svgContent = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          ${selectedShape.getSVG()}
          <text x="100" y="150" fill="${textColor}">${text}</text>
        </svg>
      `;
        //writes svg cont to examples folder
        fs.writeFile('examples/logo.svg', svgContent, (err) => {
          if (err) {
            throw err;//error
          } else {
            console.log('Generated logo.svg'); //success!
          }
        });
      })
      .catch((err) => {
        throw err;//error
      });
};
  
  //starts process
  generateLogo();
    

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
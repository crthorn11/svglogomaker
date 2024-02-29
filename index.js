const fs = require("fs");
const inquirer = require('inquirer');
const path = require('path');
const generateSvg = require('/');

const questions = [
    {
        type: 'input',
        text: 'characters',
        message: 'Please enter at least 3 characters',
    },
    {
        type: 'input',
        name: 'Text color',
        message: 'Please choose text color',
    },
    {
        type: 'checkbox',
        name: 'shapes',
        message: 'Please choose a shape',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        name: 'shape color',
        message: 'Please enter shape color',
    },
];

//create shape classes
//Im not sure if I should create a letters class as an array this.letters []; or a full class with constructor

class shape {
    constructor(circle, triangle, square) {
        this.circle = circle;
        this.triangle = triangle;
        this.square = square;
    }
}
//create render methods
addShape(shape) {
    this.shape.push(createdSVG);
}

const circle = shape();
const triangle = shape();
const square = shape();


function writeToFile(fileName, data) {
    //
    return fs.writeFileSync(path.join(process.cwd(), fileName). data);
}

function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log('Generated logo.svg');
        writeToFile('./svglogomaker/createdSVG', writeToFile('generated.svg', responses));
    });
}

//add classes for shaped and letters?
//add class for letters?
//create gitignore file
//create shape files?
//add render method to actually create something
//research available methods for js and svg
//create code inside of render method that allows me to make each shape, start with circle to make sure it works
//each shape tested for the render method
//debug writeToFile path
//create example svg file with app
//Folders for each function/class?
//export each shape
//research more and create jest tester
//check that the code is dry
// gitignore for json
//finish readme
//submit

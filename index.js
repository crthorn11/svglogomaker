const fs = require("fs");
const inquirer = require('inquirer');
const path = require('path');

const questions = [
    {
        type: 'input',
        text: 'characters',
        message: 'Please enter at least 3 characters',
    },
    {
        type: 'input',
        text: 'Text color',
        message: 'Please choose text color',
    },
    {
        type: 'checkbox',
        text: 'shapes',
        message: 'Please choose a shape',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        text: 'shape color',
        message: 'Please enter shape color',
    },
];

class Shape {
    constructor(text, textColor) {
        this.text = text;
        this.textColor = textColor;
    }
}

class Circle extends Shape {
    constructor(text, shapeColor, textColor) {
        super(text, textColor);
        this.shapeColor = shapeColor;

    }
    render() {
        return `<circle cx="150", cy="100", r="80", fill="${this.shapeColor}" />`;
    }
}
class Triangle extends Shape {
    constructor(text, shapeColor, textColor) {
        this.text = text;
        this.shapeColor = shapeColor;
        this.textColor = textColor
    }
    render() {
        return `<triangle points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }
}
class Square extends Shape {
    constructor(text, shapeColor, textColor) {
        this.text = text;
        this.shapeColor = shapeColor;
        this.textColor = textColor
    }
    render() {
        return `<square x="25" y="25" width="200" height="200" fill="${this.shapeColor}" />`;
    }
}
const newCircle = new Circle(
    "SVG",
    "GREEN",
    "WHITE",
);

function addShape(shape) {
    this.shape.push(createdSVG);
}

function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log('Generated logo.svg');
        writeToFile('./', writeToFile('generated.svg', responses));
    });
}

init();

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

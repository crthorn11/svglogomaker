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

class Shape{
    constructor(text, textColor){
        this.text = text;
        this.textColor = textColor;
    }
}

class Circle extends Shape{
    constructor(text,shapeColor, textColor){
        super(  text,textColor)
        this.shapeColor = shapeColor;
     
    }
    render(){
        console.log("Hello")
        return <circle cx="150" cy="100" r="80" fill="green" />
    }
}
class Triangle extends Shape{
    constructor(text, shapeColor, textColor){
        this.text = text;
        this.shapeColor = shapeColor;
        this.textColor = textColor
    }
}
class Square extends Shape{
    constructor(text, shapeColor, textColor){
        this.text = text;
        this.shapeColor = shapeColor;
        this.textColor = textColor
    }
}
let example = new Circle("AAA", "blue", "red")
let exampelTwo = new Circle("aa","ss","dd")
console.log(exampelTwo.render())
console.log(example.render())
//create render methods
function addShape(shape) {
    this.shape.push(createdSVG);
}

// const circle = new shape()
// const triangle = new shape()
// const square = new shape()

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

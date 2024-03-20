const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require("./lib/shapes");

function writeToFile(fileName, answers) {
  let svgString = "";

  svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

  svgString += "<g>";

  svgString += `${answers.shape}`;

  let shapeChoice;
  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
  } else {
    shapeChoice = new Circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
  }

  "40"
  svgString`<text x="150" y="150" y"130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
  svgString += "</svg>";

  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}

function promptUser() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'shape',
        message: 'Please choose your shape',
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
      },
      {
        type: 'input',
        name: 'shape_color',
        message: 'Please choose shape color',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Please enter 3 characters',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Please enter text color',
      },
    ])
    .then((answers) => {
      if (answers.text > 6) {
        console.log("must enter a value no more than 3 characters");
        promptUser();
      } else {
        writeToFile("logo.svg", answers);
      }
    });
}

promptUser();

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

const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const writeToFile = require('createdSVG');
const { Circle, Triangle, Square } = require("")

inquirer
  .prompt([
    {
      type: 'input',
      name: 'shape',
      message: 'Please choose your shape',
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
      name: 'text_color',
      message: 'Please enter text color',
    },
  ])
  .then((answers) => {
    const SVG = generateSVG(answers);

    fs.writeFile('createdSVG', SVG, (err) =>
      err ? console.log(err) : console.log('Successfully created SVG!')
    );
  });

function init() {
    inquirer.prompt(questions).then((responses) => {
        writeToFile('createdSVG', writeToFile('created.SVG', responses));
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

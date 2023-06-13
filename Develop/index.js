const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter the text for the logo (up to three characters):',
    validate: (input) => {
      if (input.length > 3) {
        return 'Please enter up to three characters.';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color:'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color:'
  }
];

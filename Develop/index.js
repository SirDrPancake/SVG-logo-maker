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

function generateLogo(answers) {
  const { text, textColor, shape, shapeColor } = answers;

  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                      <rect width="100%" height="100%" fill="${shapeColor}" />
                    <text x="50%" y="50%" fill="${textColor}" font-size="60" text-anchor="middle">${text}</text>
                      </svg>`;

  fs.writeFile('logo.svg', svgContent, (err) => {
    if (err) throw err;
    console.log('Generated logo.svg');
  });
}

inquirer.prompt(questions).then(generateLogo);
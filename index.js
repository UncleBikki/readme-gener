// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the Name of your Project',
    
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project',
        },
    
        {
            type: 'input',
            name: 'install',
            message: 'How do you install your project?',
        },
    
        {
            type: 'input',
            name: 'usage',
            message: 'Please describe how to use your project',
        },
    
        {
            type: 'input',
            name: 'contribution',
            message: 'Who contributed to this project?'
        },
        
        {
            type: 'input',
            name: 'test',
            message: 'How can do you test your project?'
        },
    
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'
        },
    
        {
            type: 'list',
            name: 'license',
            message: 'which licensing did you use?',
            choices: ['Unlicensed', 'GNU v2.0', 'MIT']
        },
    
        {
            type: 'input',
            name:'email',
            message: 'Please provide a valid email to reach out to you. (Required)',
        }

    ])

}
questions()


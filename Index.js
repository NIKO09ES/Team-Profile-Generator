const { writeFile, copyFile } = require('./utils/generate-site.js');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee.js');
//  arrays for the manager, engineer and intern
const managerData = [];
const engineerData = [];
const internData = [];



const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team manager name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the team manager name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the team manager ID number? (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the team manager ID number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team manager Email? (Required)',
            validate: idEmail => {
                if (idEmail) {
                    return true;
                } else {
                    console.log('Please enter the team manager Email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the team manager office number? (Required)',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('Please enter the team manager office number!');
                    return false;
                }
            }
        },
    ])
    .then(input => {
        const {name, id, email, officeNumber} = input;

        const manager = new Manager(name, id, email, officeNumber);
        console.table(manager);
        managerData.push(manager);
        promptChoice();
    })
};

const promptChoice = () => {
    console.log(`
    ==================
    Add a New Employee
    ==================
    `);

    return inquirer.prompt([
        {
            type: 'list',
            name: 'Choice',
            message: 'please select one of the following options',
            choices: ['Engineer', 'Intern', 'Done']
        },
    ])
        .then(input => {
            if (input.Choice === 'Engineer') {
                promptEngineer();
            } else if (input.Choice === 'Intern') {
                promptIntern();
            } else {
                writeFile([...managerData, ...engineerData, ...internData]);
            }
        });
}

const promptEngineer = () => {
    console.log(`
    ==================
    Add a New Engineer
    ==================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineer name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the engineer name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the engineer ID number? (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the engineer ID number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineer Email? (Required)',
            validate: idEmail => {
                if (idEmail) {
                    return true;
                } else {
                    console.log('Please enter the engineer Email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineer GitHub username? (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter the engineer GitHub username!');
                    return false;
                }
            }
        },
    ])
    .then(input => {
        const {name, id, email, github} = input;

        const engineer = new Engineer(name, id, email, github);
        console.table(engineer);
        engineerData.push(engineer);
        // console.table(engineerData);
        promptChoice();
    })
};

const promptIntern = () => {
    console.log(`
    ==================
    Add a New Intern
    ==================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the intern name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the intern name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the intern ID number? (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the intern ID number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the intern Email? (Required)',
            validate: idEmail => {
                if (idEmail) {
                    return true;
                } else {
                    console.log('Please enter the intern Email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the intern school? (Required)',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter the intern school!');
                    return false;
                }
            }
        },
    ])
    .then(input => {
        const {name, id, email, school} = input;

        const intern = new Intern(name, id, email, school);
        console.table(intern);
        internData.push(intern);
        promptChoice();
    })
};

promptManager()

module.exports = {managerData, engineerData, internData}
//   .then(promptProject)
//   .then(portfolioData => {
//     return generatePage(portfolioData);
//   })
//   .then(pageHTML => {
//     return writeFile(pageHTML);
//   })
//   .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })
//   .then(copyFileResponse => {
//     console.log(copyFileResponse);
//   })
//   .catch(err => {
//     console.log(err);
//   });
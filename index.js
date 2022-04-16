//html generator page
const generateHTML = require('./src/generateHTML');

//team members
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//node modules
const fs = require('fs');
const inquirer = require('inquirer');

//team array
const teamArray = [];

//manager prompt
const addManager = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Who is the manager of this team?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a valid name.");
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'id',
        message: "Please enter the manager's ID.",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a valid ID.");
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'officeNumber',
        message: "Please enter the manager's office number.",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a valid office number.");
                return false;
            }
        }
    },
]).then(managerInput => {
    let { name, id, email, officeNumber } = managerInput;
    const manager = new Manager(name, id, email, officeNumber);

    teamArray.push(manager);
    console.log(manager);
})
};

const addEmployee = () => {
    console.log("You are now adding employees to the team");

    return inquirer.prompt ([
    {
        type: 'list',
        name: 'role',
        message: "Please choose your employees role.",
        choices: ['Engineer', 'Intern']
    },

    {
        type: 'input',
        name: 'name',
        message: "What is the name of the employee?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a valid name.");
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'id',
        message: "Please enter the employee's ID.",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a valid ID.");
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: "Please enter the employee's email.",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a valid email.");
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'github',
        message: "Please enter the employee's GitHub username.",
        when: (input) => input.role === "Engineer",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a valid GitHub username.");
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'school',
        message: "Please enter the intern's school.",
        when: (input) => input.role === "Intern",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a valid school name.");
                return false;
            }
        }
    },

    {
        type: 'confirm',
        name: 'confirmFunction',
        message: "Would you like to add more team members?",
        default: false
    }
]).then(employeeData => {
    let { name, id, email, role, github, school, confirmFunction } = employeeData ;
    let employee;

    if (role === "Engineer") {
        employee = new Engineer (name, id, email, github);
        console.log(employee);
    } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
        console.log(employee);
    } 

    teamArray.push(employee);

    if(confirmFunction) {
        return addEmployee(teamArray);
    } else {
        return teamArray;
    }
})
};

//Function to generate html page file using fs file system
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        //if there is an error
        if (err) {
            console.log(err);
            return;
        //when the profile is created
        } else {
            console.log('Your team profile has been created in index.html!')
        }
    })
};

addManager().then(addEmployee).then(teamArray => {
    return generateHTML(teamArray);
}).then(pageHTML => {
    return writeFile(pageHTML);
}).catch(err => {
    console.log(err);
});
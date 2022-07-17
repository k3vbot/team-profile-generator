const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Manager = require('./lib/Manager.class');
const Engineer = require('./lib/Engineer.class');
const Intern = require('./lib/Intern.class');

const distPath = path.resolve(__dirname, 'dist', 'team.html');

const render = require('./lib/htmlRenderer');

const team = [ ];

class teamBuilder {
    confirmManager() {
        inquirer
            .prompt([
                {
                    type: 'confirm',
                    message: 'Are you the team manager?',
                    name: 'managerConfirm'
                }
            ]).then(res => {
                if (res.managerConfirm) {
                    this.createManager()
                } else {
                    console.log('You need to be a manager to create a team');
                    process.exit(0);
                }
            })
    };

    createManager() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is your name?',
                    name: 'managerName'
                },
                {
                    type: 'input',
                    message: 'What is your Employee ID',
                    name: 'managerID'
                },
                {
                    type: 'input',
                    message: 'What is your office phone number',
                    name: 'managerNumber'
                },
                {
                    type: 'input',
                    message: 'What is your office email?',
                    name: 'managerEmail'
                },
            ]).then(res => {
                const manager = new Manager(res.managerName, res.managerID, res.managerEmail, res.managerNumber);
                team.push(manager);
                this.createTeam();
            });
    };

    createTeam() {
        inquirer
            .prompt([
                {
                    type: 'list',
                    message: 'What team members would you like to create?',
                    choices: ['Engineer', 'Intern', "I'm done adding team members"],
                    name: 'employeeType'
                }
            ]).then(res => {
                if(res.employeeType ==='Engineer'){
                    this.createEngineer();
                } else if (res.employeeType === 'Intern') {
                    this.createIntern();
                } else {
                    fs.writeFile(distPath, render(team), err => {
                        if (err) throw err;
                        console.log('team.html document created!');
                    })
                }
            });
    };

    createEngineer() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is the name of this engineer?',
                    name: 'engineerName'
                },
                {
                    type: 'input',
                    message: 'What is the ID of this engineer?',
                    name: 'engineerID'
                },
                {
                    type: 'input',
                    message: 'What is the GitHub username of this engineer?',
                    name: 'engineerGithub'
                },
                {
                    type: 'input',
                    message: 'What is the email address of this engineer?',
                    name: 'engineerEmail'
                },
            ]).then(res => {
                const engineer = new Engineer(res.engineerName, res.engineerID, res.engineerEmail, res.engineerGithub);
                team.push(engineer);
                this.createTeam();
            });
    };

    createIntern() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is the name of this intern?',
                    name: 'internName'
                },
                {
                    type: 'input',
                    message: 'What is the ID of this intern?',
                    name: 'internID'
                },
                {
                    type: 'input',
                    message: 'What school does this intern go to?',
                    name: 'internSchool'
                },
                {
                    type: 'input',
                    message: 'What is the email address of this intern?',
                    name: 'internEmail'
                }
            ]).then(res => {
                const intern = new Intern(res.internName, res.internID, res.internEmail, res.internSchool);
                team.push(intern);
                this.createTeam();
            });
    }
}

const startApp = new teamBuilder();

startApp.confirmManager();

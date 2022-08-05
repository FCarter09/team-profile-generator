const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

class EmployeeInfo {

    constructor(name) {
        this.name = name
        this.email = name + "@company.com"
        this.id = Math.floor(Math.random() * 100);
        this.officeNumber = Math.floor(Math.random() * 10)
        this.role = "employee"
        this.githubUserName = name + "@github.com"
        this.school = "school"
    }

    managerPrompt() {
        this.name = new Manager()
        this.id = new Manager()
        this.email = new Manager()
        this.role = new Manager()

        return inquirer.prompt([
            {
                type: 'text',
                name: 'name',
                message: "What is the manager's name?"

            },
            {
                type: 'input',
                name: 'managerId',
                message: "Please enter the manager's ID?"
            },
            {
                type: 'link',
                name: 'managerEmail',
                message: "Please enter manager's email address?"
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: "Please enter manager's office number?"
            },
            {
                type: 'input',
                name: 'managerRole',
                message: "What is their role?"
            },
            {
                type: 'confirm',
                name: 'confirmEngineer',
                message: 'Would you like to add Engineer?',
                default: true

            },
            {
                when: ({ confirmEngineer }) => {
                    if (confirmEngineer) {
                        // return true
                         return this.engineerPrompt()
                    } else {
                        return false
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmIntern',
                message: 'Would you like to add an Intern?',
                default: true
            },
            {
                when: ({ confirmIntern }) => {
                    if (confirmIntern) {
                        // return true
                         return this.internPrompt()
                    } else {
                        return false
                    }
                }
            },
                
        ])
        
        .then(({ name, managerId, managerEmail, managerRole }) => {
            this.name = new Manager(name);
            this.id = new Manager(managerId);
            this.email = new Manager(managerEmail);
            this.role = new Manager(managerRole);
            
        })

    }

    engineerPrompt() {
        this.name = new Engineer()
        this.id = new Engineer()
        this.email = new Engineer()
        this.githubUserName = new Engineer()
        this.role = new Engineer()
        
       return inquirer.prompt([
                {
                    type: 'text',
                    name: 'engineer',
                    message: "What is the engineer's name?"
                },
                {
                    type: 'text',
                    name: 'engineerId',
                    message: "Please enter the engineers's ID?"
                },
                {
                    type: 'link',
                    name: 'engineerEmail',
                    message: "Please enter engineer's email address?"
                },
                {
                    type: 'link',
                    name: 'engineerGithub',
                    message: "Please enter engineer's github:"
                },
                {
                    type: 'input',
                    name: 'engineerRole',
                    message: "What is their role?"
                },
                {
                    type: 'confirm',
                    name: 'confirmEngineer',
                    message: 'Would you like to add Engineer?',
                    default: true
    
                },
                {
                    when: ({ confirmEngineer }) => {
                        if (confirmEngineer) {
                            // return true
                             return this.engineerPrompt()
                        } else {
                            return false
                        }
                    }
                },
                {
                    type: 'confirm',
                    name: 'confirmIntern',
                    message: 'Would you like to add an Intern?',
                    default: true
                },
                {
                    when: ({ confirmIntern }) => {
                        if (confirmIntern) {
                            // return true
                             return this.internPrompt()
                        } else {
                            return false
                        }
                    }
                },
                
            ])

            .then(({ name, engineerId, engineerEmail, engineerGithub, engineerRole }) => {
                this.name = new Engineer(name);
                this.id = new Engineer(engineerId);
                this.email = new Engineer(engineerEmail);
                this.githubUsername = new Engineer(engineerGithub)
                this.role = new Engineer(engineerRole)
            })
    }

    internPrompt() {
        this.name = new Intern()
        this.id = new Intern()
        this.email = new Intern()
        this.school = new Intern()
        this.role = new Intern()

        return inquirer.prompt([
                {
                    type: 'text',
                    name: 'internName',
                    message: "What is the intern's name?"
                },
                {
                    type: 'input',
                    name: 'internId',
                    message: "Please enter the intern's ID?"
                },
                {
                    type: 'link',
                    name: 'internEmail',
                    message: "Please enter intern's email address?"
                },
                {
                    type: 'text',
                    name: 'internSchool',
                    message: "Please enter intern's school:"
                },
                {
                    type: 'input',
                    name: 'internRole',
                    message: "What is their role?"
                },
                {
                    type: 'confirm',
                    name: 'confirmEngineer',
                    message: 'Would you like to add Engineer?',
                    default: true
    
                },
                {
                    when: ({ confirmEngineer }) => {
                        if (confirmEngineer) {
                            // return true
                             return this.engineerPrompt()
                        } else {
                            return false
                        }
                    }
                },
                {
                    type: 'confirm',
                    name: 'confirmIntern',
                    message: 'Would you like to add an Intern?',
                    default: true
                },
                {
                    when: ({ confirmIntern }) => {
                        if (confirmIntern) {
                            // return true
                             return this.internPrompt()
                        } else {
                            return false
                        }
                    }
                },
            ])
            .then(({ name, internId, internEmail, internSchool, internRole }) => {
                this.name = new Intern(name);
                this.id = new Intern(internId);
                this.email = new Intern(internEmail);
                this.school = new Intern(internSchool)
                this.role = new Intern(internRole)
            })
    }
 }

module.exports = EmployeeInfo

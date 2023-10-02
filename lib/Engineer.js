const Employee = require('./Employee')

// this gets the identical information from Employee
class Engineer extends Employee {
    constructor(name, email, id, github) {
        super(name, email, id);
        this.role = 'Engineer'
        this.github = github

    }

    getGithub() {
        return this.github
    }

}

module.exports = Engineer;
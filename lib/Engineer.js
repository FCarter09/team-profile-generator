const Employee = require('./Employee')

// this gets the identical information from Employee
class Engineer extends Employee {
    constructor(name, email, id) {
        super(name, email, id);
        this.role = 'Engineer'
        this.githubUserName = name + "@github.com"

    }

    getGithub() {
        return this.githubUserName
    }

}

module.exports = Engineer;
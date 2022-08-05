const Employee = require('./Employee')

// this gets the identical information from Employee
class Engineer extends Employee {
    constructor(name, email, id, role) {
        super(name, email, id, role);

        this.githubUserName = name + "@github.com"

    }

    getGithub() {
        return this.githubUserName
    }

}

module.exports = Engineer;
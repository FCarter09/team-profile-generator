const Employee = require('./Employee')

// this gets the identical information from Employee
class Intern extends Employee {
    constructor(name, email, id, role) {
        super(name, email, id, role);

        this.school = "school"

    }

    getSchool() {
        return this.school
    }
}

module.exports = Intern
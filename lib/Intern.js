const Employee = require('./Employee')

// this gets the identical information from Employee
class Intern extends Employee {
    constructor(name, email, id) {
        super(name, email, id);
        this.role = 'Intern'
        this.school = "school"

    }

    getSchool() {
        return this.school
    }
}

module.exports = Intern
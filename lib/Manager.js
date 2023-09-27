const Employee = require('./Employee')

// this gets the identical information from Employee
class Manager extends Employee {
    constructor(name, email, id) {
        super(name, email, id);
        this.role = 'Manager';
        this.officeNumber = Math.floor(Math.random() * 10)

    }

    // getRole() {
    //     return this.role
    // }

    getOfficeNumber() {
        return this.officeNumber
    }

}

// const managerOne = new Manager('David')

// console.log(managerOne);







module.exports = Manager;
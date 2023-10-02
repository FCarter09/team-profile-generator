const Employee = require('./Employee')

// this gets the identical information from Employee
class Manager extends Employee {
    constructor(name, email, id, officeNumber) {
        super(name, email, id);
        this.role = 'Manager';
        this.officeNumber = officeNumber

        

    }

    // getRole() {
    //     return this.role
    // }

    getOfficeNumber() {
        return this.officeNumber
    }

}

// const managerOne = new Manager('David', 'david@yahoo.com', '001', '10')

// console.log(managerOne);
// console.log('managerOne', managerOne.getOfficeNumber());







module.exports = Manager;


class Employee {
    constructor(name, email, id) {
        // attributes of employee
        this.name = name
        this.email = email
        this.id = id
        this.role = "employee"
    }
        //class methods for the employee
        getName() {
            return this.name
        }

        getID() {
            return this.id
        }
        
        getEmail() {
            return this.email
        }

        getRole() {
            return this.role
        }

}


module.exports = Employee;







// const employeeOne = new Employee("Bill")
// const employeeTwo = new Employee("Jack")

// // console.log(employeeOne);
// // console.log(employeeOne.name); 
// // console.log(employeeOne.email);
// // console.log(employeeTwo.email);
// // console.log(employeeOne.getName());



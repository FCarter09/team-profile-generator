

class Employee {
    constructor(name) {
        // attributes of employee
        this.name = name
        this.email = name + "@company.com"
        this.id = Math.floor(Math.random() * 100);
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


//   employeePrompt() {
//     // this.name = new Manager()
//     // this.id = new Manager()
//     // this.email = new Manager()
//     // this.role = new Manager()

//    return inquirer.prompt ([
//           {
//             type: 'text',
//             name: 'name',
//             message: "What is the manager's name?"

//           },
//           {
//             type: 'input',
//             name: 'managerId',
//             message: "Please enter the manager's ID?"
//           },
//           {
//             type: 'text',
//             name: 'managerEmail',
//             message: "Please eneter manager's email address?"
//           },
//           {
//             type: 'input',
//             name: 'managerOfficeNumber',
//             message: "Please enter manager's office number?"
//           },
//           {
//             type: 'confirm',
//             name: 'confirmEmployee',
//             message: 'Would you like to add Engineer or Intern?',
//             default: true
//           },
          
//         {
//             type: 'checkbox',
//             name: 'employee',
//             message:"Please select 'Engineer' or 'Intern'",
//             choices: ['Engineer', 'Intern'],
//             when: ({ confirmEmployee }) => {
//                 if (confirmEmployee) {
//                   return true;
//                 } else {
//                   return false;
//                 }
//               }
//         }
//         ])

//         // .then(({ name, managerId, managerEmail }) => {
//         //     this.name = new Manager(name);
//         //     this.id = new Manager(managerId);
//         //     this.email = new Manager(managerEmail);
//         // })
//    }
}


module.exports = Employee;







// const employeeOne = new Employee("Bill")
// const employeeTwo = new Employee("Jack")

// // console.log(employeeOne);
// // console.log(employeeOne.name); 
// // console.log(employeeOne.email);
// // console.log(employeeTwo.email);
// // console.log(employeeOne.getName());



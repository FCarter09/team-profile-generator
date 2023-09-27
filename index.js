// receives inquire file
const inquirer = require('inquirer');

// file that uses fs to write output to an html file
const {writeFile, copyFile} = require('./utils/generate-page');


// import Classes of Employees
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

//finalHTML will store all HTML of the employees in the company
// this is an accumulator variable. Instead of accumulating numbers it accumulates text (strings)
const finalHTML = ''

const askQuestions = () => {
    // ask what type of employee to create
    inquirer.prompt({
        type: 'list', 
        message: 'What kind of employee do you want to create?',
        name: 'employeeType',
        choices: ['Manager', 'Engineer', 'Intern', 'Exit']
    })
    .then((userChoice) => {
        //evaluate the user choice

        //if the user chooses to create a manager...
        // the only info we need to create ANY employee type is the name of the employee
        if (userChoice.employeeType === 'Manager') {
            inquirer.prompt({
                type: 'input',
                message: 'What is the name of the Manager?',
                name: 'managerName'
            })
            .then((userChoice) => {
                // create new Manager
                const newManager =  new Manager(userChoice.managerName)
                console.log('New Manager information: ', newManager)
                // To DO: add this new manager to HTML
                // make the html for this manager here
                const managerHTML = `
                <p>${newManager.name}</p>
                <p>${newManager.email}</p>
                `
                // add managerHTML to the finalHTML
                finalHTML += managerHTML
            })
        } else if (userChoice.employeeType === 'Engineer') {
            inquirer.prompt({
                type: 'input',
                message: 'What is the name of the Engineer?',
                name: 'engineerName'
            })
            .then((userChoice) => {
                //create new Engineer
                const newEngineer = new Engineer(userChoice.engineerName)
                console.log('New Engineer Information: ', newEngineer)
                // TO DO: add this new engineer to HTML
                // make the html for this engineer here
                const engineerHTML = `
                <p>${newEngineer.name}</p>
                <p>${newEngineer.email}</p>
                `

                // add engineer HTML to the finalHTML
                finalHTML += engineerHTML

            })
        } else if (userChoice.employeeType === 'Intern') { ///intern
            inquirer.prompt({
                type: 'input',
                message: 'What is the name of the Intern?',
                name: 'internName'
            })
            .then((userChoice) => {
                //create new Intern
                const newIntern = new Intern(userChoice.internName)
                console.log('New Intern Information: ', newIntern);
                // TO DO: add this new Intern to HTML
                // make the html for this intern here

                const internHTML = `
                <p>${newIntern.name}</p>
                <p>${newIntern.email}</p>
                `

                // add engineer HTML to the finalHTML
                finalHTML += internHTML
                

            })

        }
    })
}


//after asking all questions, use fs to write output to an html file
// you will write finalHTML to an output file called 'generate-page' in utils folder


askQuestions()

    // NOTE: Commented code below causes inquire prompts to exit after asking first question

    // .then(pageHTML => {
    //     return writeFile(pageHTML);
    // })

    // .then(writeFileResponse => {
    //     console.log(writeFileResponse);
    //     return copyFile();
    // })

    // .then(copyFileResponse => {
    //     console.log(copyFileResponse);
    // })

    // .catch(err => {
    //     console.log(err);
    // });



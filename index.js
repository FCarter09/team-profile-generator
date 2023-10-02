// receives inquire file
const inquirer = require('inquirer');

// file that uses fs to write output to an html file
const {writeFile, copyFile} = require('./utils/generate-page');

//receives page-template
const generatePage = require('./src/page-template');


// import Classes of Employees
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')



const askQuestions = () => {

    //finalHTML will store all HTML of the employees in the company
    // this is an accumulator variable. Instead of accumulating numbers it accumulates text (strings)
    let finalHTML = ''

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
            inquirer.prompt([
              {
                type: 'input',
                name: 'name',
                message: 'What is the name of the manager?',
                
              },
              {
                type: 'input',
                name: 'id',
                message: "What is the manager's employee ID?"
              },
              {
                type: 'input',
                name: 'email',
                message: "What is the manager's email address?"
              },
              {
                type: 'input',
                name: 'officeNumber',
                message: "What is the manager's office number?"
              }

            ])
            .then((userChoices) => {
                // create new Manager
                const newManager =  new Manager(userChoices.name, userChoices.email, userChoices.id, userChoices.officeNumber)
                console.log('New Manager information:', newManager)

                // get createManagerHTMLCard from page-template.js and store as variable 'managerData'
                const managerData = generatePage.createManagerHTMLCard(newManager)

                // add managerData to the finalHTML
                finalHTML += managerData

                // callback askQuestions() to return user back to questions
                askQuestions();
            })
        } else if (userChoice.employeeType === 'Engineer') {
            inquirer.prompt([
                {
                type: 'input',
                message: 'What is the name of the Engineer?',
                name: 'name'
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "What is the engineer's employee ID?"
                  },
                  {
                    type: 'input',
                    name: 'email',
                    message: "What is the engineer's email address?"
                  },
                  {
                    type: 'input',
                    name: 'github',
                    message: "What is the engineer's github?"
                  }

            ])
            .then((userChoices) => {
                //create new Engineer
                const newEngineer = new Engineer(userChoices.name, userChoices.email, userChoices.id, userChoices.github)
                console.log('New Engineer Information: ', newEngineer)
                
                // get createEngineerHTMLCard from page-template.js and store as variable 'engineerData'
                const engineerData = generatePage.createEngineerHTMLCard(newEngineer)

                // add engineerData to the finalHTML
                finalHTML += engineerData
                
                // callback askQuestions() to return user back to questions
                askQuestions();
    
            })
        } else if (userChoice.employeeType === 'Intern') { ///intern
            inquirer.prompt([
                {
                type: 'input',
                message: 'What is the name of the intern?',
                name: 'name'
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "What is the intern's employee ID?"
                  },
                  {
                    type: 'input',
                    name: 'email',
                    message: "What is the intern's email address?"
                  },
                  {
                    type: 'input',
                    name: 'school',
                    message: "What is the intern's school?"
                  }

            ])
            .then((userChoices) => {
                //create new Intern
                const newIntern = new Intern(userChoices.name, userChoices.email, userChoices.id, userChoices.school)
                console.log('New Intern Information: ', newIntern);
                
                // get createInternHTMLCard from page-template.js and store as variable 'internData'
                const internData = generatePage.createInternHTMLCard(newIntern)

                // add internData to the finalHTML
                finalHTML += internData    

            })

        }
    })

        // after you ask all the questions you have final html
        // create final HTML files using finalHTML variable
        // use html template from page-template.js
        

    
}


//after asking all questions, use fs to write output to an html file
// you will write finalHTML to an output file called 'generate-page' in utils folder
 askQuestions()






    // NOTE: Commented code below could possibly be used to execute app in asynchronous order using '.then' promises

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



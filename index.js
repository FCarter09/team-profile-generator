// receives inquire file
const inquirer = require('inquirer');  


//receives page-template
const generatePage = require('./src/page-template');

// import fs to write file
const fs  = require('fs')


// import Classes of Employees
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

//finalHTML will store all HTML of the employees in the company
// this is an accumulator variable. Instead of accumulating numbers it accumulates text (strings)
let finalHTML = []
let managerHTML = ''
let engineerHTML = ''
let internHTML = ''

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
                managerHTML = managerData

                // console.log('Manager HTML:', managerHTML);

                finalHTML.push(managerHTML)

                // console.log('Final HTML:', finalHTML);


                askQuestions()

               
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
                engineerHTML = engineerData

                // console.log('Engineer HTML:', engineerHTML)

                finalHTML.push(engineerHTML)

                // console.log('Final HTML:', finalHTML);

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
                internHTML = internData  
                
                // console.log('Intern HTML:', internHTML)
                
                finalHTML.push(internHTML)

                // console.log('Final HTML:', finalHTML);

                askQuestions();

            })
            }else if(userChoice.employeeType === 'Exit') {
              // htmlTemplate is an array
              // add finalHTML into htmlTemplate in correct place
              generatePage.HTMLtemplate.splice(1, 0, finalHTML)
              console.log(generatePage.HTMLtemplate);

              // join all the items into the html template array
              let generatedHTML = generatePage.HTMLtemplate.join()


              // deletes left over commas
              generatedHTML = generatedHTML.replace(/,/g,'');
              console.log('Generates HTML', generatedHTML);


              //after asking all questions, use fs to write output to an html file
              // fs.writeFile creates finalHTML after 'exit' is selected
              fs.writeFile('./dist/TeamProfile.html', generatedHTML, (error) =>
                error ? console.log('Error!') : console.log(`Output written to file: TeamProfile.html`));  //error handling is a required argument

              // fs copyFile copies styles.css from 'src' folder to styles.css in 'dist' folder 
              fs.copyFile('./src/style.css', './dist/style.css', (error) => 
                error ? console.log('Error!') : console.log(" './src/style.css' copied to './dist/style.css' "));
               
            }
        
    })
      
    
}


// call askQuestions function
 askQuestions()














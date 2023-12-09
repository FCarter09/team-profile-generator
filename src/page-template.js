
const createManagerHTMLCard = (manager) => {
    const managerHTML = `
        <div class="managers-card">
            <h3 class='employee-name'>${manager.name}</h3>
            <h4>${manager.role}</h4>
            <p><span>ID:</span>${manager.id}</p>
            <p><span>Email:</span><a href="mailto:${manager.email}">${manager.email}</a></p>
            <p><span>Office Number:</span>${manager.officeNumber}</p>
        </div>
    `
    return managerHTML
}

//Create engineer html card
const createEngineerHTMLCard = (engineer) => {
    const engineerHTML = `
        <div class="engineers-card">
            <h3 class='employee-name'>${engineer.name}</h3>
            <h4>${engineer.role}</h4>
            <p><span>ID:</span>${engineer.id}</p>
            <p><span>Email:</span><a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p><span>Github:</span><a href="https://github.com/${engineer.github}">Github Profile</a></p>
        </div>
    `
    return engineerHTML
}

// Create intern html card
const createInternHTMLCard = (intern) => {
    const internHTML = `
        <div class="interns-card">
            <h3 class='employee-name'>${intern.name}</h3>
            <h4>${intern.role}</h4>
            <p><span>ID:</span>${intern.id}</p>
            <p><span>Email:</span><a href="mailto:${intern.email}">${intern.email}</a></p>
            <p><span>School:</span>${intern.school}</p>
        </div>
    `
    return internHTML
}

const HTMLtemplate = [`
     <!DOCTYPE html> 
     <html lang="en"> 
     <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <title>Team Portfolio</title>
       <link rel="stylesheet" href="style.css">
     </head>
   
     <body>
        <header>
            Team Portfolio
        </header>
        <main class="employee-section">`,

        //PUT EMPLOYEE HTML HERE (manager, engineer, intern)
        //EMPLOYEE DATA FROM INDEX.js FILE IS CALLED 'finalHTML'
        

        `</main>
     </body>
     </html>
`];




// export function to generate entire page
module.exports = {
    createManagerHTMLCard,
    createEngineerHTMLCard,
    createInternHTMLCard,
    HTMLtemplate,
}
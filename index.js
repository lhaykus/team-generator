//Required packages
//Creating different files for employee, manager, intern, engineer to create classes and subclasses
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./Classes/manager");
const Engineer = require("./Classes/engineer");
const Intern = require("./Classes/intern");
const Employee = require("./Classes/employee");
const generateHTML = require("./Classes/generateHTML");


//Function to create an HTML, using switch case to choose what to display depending on what role was chosen
/*   `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    
</head>
<body>
<div class="container">
    <div class="jumbotron text-center p-5">
        <h1>Team Profile Generator</h1>
    </div>
<!--Cards for the team members info (name, job title, email, github) that will be created with node.js-->

    <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card text-white bg-primary mb-3">
            <div class="card-body">
              <h5 class="card-title">${answers.name}</h5>
              <p class="card-text">Job ${answers.role}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${answers.id}</li>
                <li class="list-group-item"><a href="#" class="card-link">${answers.email}</a></li>
                <li class="list-group-item"><a href="#" class="card-link">${answes.officeNumber}</a>
              </ul>
          </div>
        </div>
        <div class="col">
          <div class="card text-white bg-primary mb-3">
            <div class="card-body">
              <h5 class="card-title">${answers.name}</h5>
              <p class="card-text">${answers.job}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${answers.id}</li>
                <li class="list-group-item"><a href="#" class="card-link">${answers.email}</a></li>
                <li class="list-group-item"><a href="#" class="card-link">${answes.github}</a>
              </ul>
          </div>
        </div>
        <div class="col">
          <div class="card text-white bg-primary mb-3">
            <div class="card-body">
              <h5 class="card-title">${answers.name}</h5>
              <p class="card-text">${answers.job}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${answers.id}</li>
                <li class="list-group-item"><a href="#" class="card-link">${answers.email}</a></li>
                <li class="list-group-item"><a href="#" class="card-link">${answes.github}</a>
              </ul>
          </div>
        </div>
        <div class="col">
          <div class="card text-white bg-primary mb-3">
            <div class="card-body">
              <h5 class="card-title">${answers.name}</h5>
              <p class="card-text">${answers.job}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${answers.id}</li>
                <li class="list-group-item"><a href="#" class="card-link">${answers.email}</a></li>
                <li class="list-group-item"><a href="#" class="card-link">${answes.github}</a>
              </ul>
          </div>
        </div>
      </div>
</div>   
</body>
</html>`;
*/
//Creating an empty array to hold the team members

const teamMembers = [];


//Manager questions

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the Team Managers name?'

    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter employee ID',

    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter an email address',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the office number'
    }
];

//Engineer questions

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is engineers name',

    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter employee ID',

    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter an email address',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter github username'
    }


];

//Intern questions 

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the interns name',

    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter employee ID',

    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter an email address',
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school did you go to?'
    }
    
];

//Questions to ask if user wants to keep adding members or is done

const addEmployeesQuestion = [
    {
        type: 'list',
        name: 'role',
        message: 'Add more team members or select "Done" to generate your team',
        choices: ['Engineer','Intern', 'Done']
    }
];

//Function to start it all, calls managerprompt function first 
function init() {
    promptManager();
};

//function to create next employee or generate team depending on what the user chooses from the list
//using switch case so if 'intern' is chosen, the internprompt function is called, if engineer is chosen engineerprompt function is called and if done is chosen makeTeam function is called


//Function to create the manager card

function promptManager() {
    inquirer.prompt(managerQuestions).then(function(answers) {
        console.log('Manager');
        //
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        //pushing managers info into the teamMembers array
        teamMembers.push(manager);
        //call funciton to generate the team
        makeTeam();
    });
}

//Function to create the Intern card

function promptIntern() {
    inquirer.prompt(internQuestions).then(function(answers){
        console.log('Intern');
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMembers.push(intern);
        makeTeam();
    });
}

//function to create the Engineer card

function promptEngineer() {
    inquirer.prompt(engineerQuestions).then(function(answers){
        console.log('Engineer');
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamMembers.push(engineer);
        makeTeam();
    });
}

//Create function to generate the team 
//User is asked whether they want to add more members or if they are done
//If intern is chosen then the intern prompt function will be called
//If engineer is chosen, the engineer prompt fucntion will be called
//If done is selected then generateHTML will be called created a webpage

function makeTeam() {
    inquirer.prompt(addEmployeesQuestion).then(function(answers) {
        console.log(answers);
        switch(answers.role) {
            case "Intern":
                promptIntern();
            case "Engineer":
                promptEngineer();
            case 'Done':
                console.log("team created!");
                generateHTML();
                return;
    };
});

//Function for creating cards to add to the HTML contaning the answers from the terminal 
//Using a for loop to loop through the memebers saved in the teamMembers array and add a card for each member
function getHTML() {

    for (let i=0; i <teamMembers.length; i++) {
        const card = generateHTML(teamMembers[i]);
        html += card;
    }

    fs.writeFile()
}










}
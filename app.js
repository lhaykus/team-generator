//Required packages
//Creating different files for employee, manager, intern, engineer to create classes and subclasses
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Manager = require("./Classes/manager");
const Engineer = require("./Classes/engineer");
const Intern = require("./Classes/intern");
//const Employee = require("./Classes/employee");
const generateHTML = require("./Classes/generateHTML");

//write file using promises instead of callback function 
//referenced from mini project for node chapter
const writeFileAsync = util.promisify(fs.writeFile);


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
        choices: ['Engineer', 'Intern', 'Done']
    }
];

//Function to start it all, calls managerprompt function first 
function init() {
    promptManager()

};


//Create function to give user option to add more members or generate team
//User is asked whether they want to add more members or if they are done
//If intern is chosen then the intern prompt function will be called
//If engineer is chosen, the engineer prompt fucntion will be called
//If done is selected then getHTML will be called created a webpage

function next() {
    inquirer.prompt(addEmployeesQuestion).then(function (answers) {
        console.log(answers);

        switch (answers.role) {
            case "Intern":
                promptIntern();
            break

            case "Engineer":
                promptEngineer();
            break

            case 'Done':
                console.log("team created!");
                getHTML();

        };
    });

};


//Function to create the manager card

function promptManager() {
    //Asking the managerQuestions and putting the values of those answers into the HTML 
    inquirer.prompt(managerQuestions).then(function (answers) {
        //  console.log('Manager');
        //
        const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        //pushing managers info into the teamMembers array
        teamMembers.push(newManager);
        //call funciton to generate the team
        next();
    });
};

//Function to create the Intern card

function promptIntern() {
    inquirer.prompt(internQuestions).then(function (answers) {
        //  console.log('Intern');
        const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMembers.push(newIntern);
        next();
    });
};

//function to create the Engineer card

function promptEngineer() {
    inquirer.prompt(engineerQuestions).then(function (answers) {
        // console.log('Engineer');
        const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamMembers.push(newEngineer);
        next();
    });
};


//Creating the beginning and the end of the HTML 
let html =
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Asap&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../Assets/style.css" />
</head>
<body>
<div class="container-fluid">
<div class="row">
    <div class="jumbotron text-center p-5">
        <h1>My Team</h1>
        </div>
    </div>
</div>


<div class="container">
<div class="row row row-cols-1 row-cols-md-2 g-4">
        <div class="team-card col-12">
<!--Cards for the team members go here-->
        `;


let htmlEnd = `
</div>
          </div>
     </div>    
    </body>
 </html>;`



//Function for creating cards to add to the HTML contaning the answers from the terminal 
//Using a for loop to loop through the memebers saved in the teamMembers array and add a card for each member
function getHTML() {

    for (let i = 0; i < teamMembers.length; i++) {
        const memberCard = generateHTML(teamMembers[i]);
        html += memberCard;
    }
    html += htmlEnd;

    writeFileAsync('./example/team.html', html);
}

init();









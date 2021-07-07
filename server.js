//Required packages
const inquirer = require('inquirer');
const fs = require('fs');
const { type } = require('os');

//Function to create an HTML with the answers that are given in the terminal when using node.js and inquirer
const generateHTML = (answers) =>
`<!DOCTYPE html>
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
              <p class="card-text">Job ${answers.job}</p>
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

//Questions that will be asked in the termianl using inquirer 

inquirer
.prompt ([
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
        message: 'Enter github'
    }
    
])
//Requiring the employee file to create subclass for engineer
const Employee = require('./employee');

//Creating subclass for engineeer

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = this.getRole();
    }

    //Function to get github username
    getGithub() {
        return `${this.github}`;
    }

    //Override getRole to display engineer 
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;
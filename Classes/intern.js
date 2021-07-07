//Requiring the employee file to create subclass for intern
const Employee = require('./employee');

//Creating subclass for intern

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = this.getRole();
    }

//Function to get the school 
    getSchool() {
        console.log(this.school);
        return `${this.school}`;
    }

//Override role to be Intern
    getRole() {
        console.log("Intern");
        return "Intern";
    }
}

module.exports = Intern;
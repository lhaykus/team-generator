//Requiring the employee file to extend off of the employee class
const Employee = require("./employee");

//creating a subclass for manager

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
    //Super is used so you dont have to repeat the constructor parts that are the same between classes (name, id, email are both in employee and manager) 
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = this.getRole();
    }

    //function to get officeNumber
    getOfficeNumber() {
        return `${this.officeNumber}`;
    }

//Override getRole to return Manager not employee
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;
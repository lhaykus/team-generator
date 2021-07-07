//Creating a class for employee using constrictor function 


class Employee {
    constructor (name, id, email, role) {
        this.id = id;
        this.name = name;
        this. email = email;
        this.role = role;

    }

//creating a function to get the name from the info added into the terminal, console.log the name and 
//then returning and displaying the name to the html
getName() {
    console.log(this.name);
    return `${this.name}`;
}

//function to get the id 
getId() {
    console.log(this.id);
    return `${this.id}`;
}

getEmail() {
    console.log(this.email);
    return `${this.email}`;
}

//function getRole returns "employee"

getRole() {
    console.log('Employee');
    return 'Employee';

}



}

module.exports = Employee;
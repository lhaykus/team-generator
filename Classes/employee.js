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
    return `${this.name}`;
}

//function to get the id 
getId() {
    return `${this.id}`;
}

//function to get the email
getEmail() {
    return `${this.email}`;
}

//function getRole 
getRole() {
    return `${this.role}`;

}



}

module.exports = Employee;
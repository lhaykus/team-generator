const Employee = require('../Classes/employee');

//Creating employee object 
test('Get employee object', () => {
    //Making a new employee
    const e = new Employee("Loryn");
    //Expecting the new exployee to be created as an object
    expect(typeof (e)).toBe("object");
});


//Test to check getName() function
test("Get name using getName()", () => {
    //Creating a new employee with the name Colby
    const testValue = "Colby";
    //Creating the new employees name as the testValue
    const e = new Employee(testValue);
    //Expecting the getName() to produce the name Colby
    expect(e.getName()).toBe(testValue);
});

//Test to check getId() function
test('Get id using getId()', () => {
    //Creating an id 
    const testValue = "21";
    //Making employee equal to name with the testValue
    const e = new Employee("Colby", testValue);
    //Expecting the id to be 21
    expect(e.getId()).toBe(testValue);

});

//Test to check getEmail() function
test('Get email using getEmail()', () => {
    //Creating an email to be tested
    const testValue = "loryn@loryn.com";
    //Created employee to equal the name, id and testValue
    const e = new Employee("Colby", 21, testValue);
    //Expecting the email to be loryn@loryn.com
    expect(e.getEmail()).toBe(testValue);
});

//Test to check the getRole() function to return "Employee"
test('Get role using getRole()', () => {
    //Setting the role as employee
    const testValue = 'Employee';
    //Creating employee to equal all the paramaters from the other functions
    const e = new Employee("Colby", 21, "loryn@loryn.com", testValue);
    //Expecting the getRole function to return "Employee"
    expect(e.getRole()).toBe(testValue);
});
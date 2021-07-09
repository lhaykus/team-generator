const Manager = require('../Classes/manager');

//Testing getRole() to return 'Manager'
test('Return manager when using getRole()', () => {
    //Creating value to be 'manager'
    const testValue = "Manager";
    //Creating object for new manager
    const e = new Manager("Loryn", 1, 'loryn@loryn.com', testValue);
    //Expecting 'manager' to be returned when getRole() is called 
    expect(e.getRole()).toBe(testValue);
});

//Testing getOfficeNumber
test('Get office number using getOfficeNumber', () => {
    const testValue = "21";
    const e = new Manager("Loryn", 1, "loryn@loryn.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});
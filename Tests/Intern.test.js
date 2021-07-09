const Intern = require('../Classes/intern');

//Testing getRole() to return 'intern'
test('Returning intern when using getRole()', () => {
    //Creating value to be "Intern"
    const testValue = "Intern";
    //Creating object for new intern
    const e = new Intern("Loryn", 1, 'loryn@loryn.com', testValue);
    //Expecting getRole() to return 'intern'
    expect(e.getRole()).toBe(testValue);
});

//Testing getSchool()
test("Get school name using getSchool()", () => {
    //Creating value of school name
    const testValue = "DU";
    //Creating object for new intern
    const e = new Intern("Loryn", 1, "loryn@loryn.com", testValue);
    //Expecting getSchool to return 'DU' as school name
    expect(e.getSchool()).toBe(testValue);
});
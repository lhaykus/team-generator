const Engineer = require('../Classes/engineer');

//Testing getRole() to return "engineer"
test("Returning engineer using getRole()", () => {
    //Creating the role to be "Engineer"
    const testValue = 'Engineer';
    //Creating object of new engineer
    const e = new Engineer("Loryn", 1, "loryn@loryn.com", "github");
    //Expecting 'engineer' to be returned when getRole() is called
    expect(e.getRole()).toBe(testValue);
});

//Testing getGithub() function
test('get Github username using getGithub()', () => {
    //Creating value to be 'github'
    const testValue = 'github';
    //Creating object for new engineer
    const e = new Engineer("Loryn", 1, "loryn@loryn.com", testValue);
    //Expecting to get 'github' when getGithub is called
    expect(e.getGithub()).toBe(testValue);

});
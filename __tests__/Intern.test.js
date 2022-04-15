//Intern constructor 
const Intern = require('../lib/Intern');

//Intern object creation 
test('creates an Intern object', () => {
    const intern = new Intern('Davon', 13, 'davonb113@gmail.com', 'Vanderbilt');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// gets school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Davon', 13, 'davonb113@gmail.com', 'Vanderbilt');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Davon', 13, 'davonb113@gmail.com', 'Vanderbilt');

    expect(intern.getRole()).toEqual("Intern");
}); 
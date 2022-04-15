//Engineer constructor 
const Engineer = require('../lib/Engineer');

//Engineer object creation 
test('creates an Engineer object', () => {
    const engineer = new Engineer('Davon', 13, 'davonb113@gmail.com', 'DavonHB');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// gets github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Davon', 13, 'davonb113@gmail.com', 'DavonHB');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Davon', 13, 'davonb113@gmail.com', 'DavonHB');

    expect(engineer.getRole()).toEqual("Engineer");
});
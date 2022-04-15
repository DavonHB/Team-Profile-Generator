// Employee constructor
const Employee = require('../lib/Employee');

//Employee object creation
test('creates an employee object', () => {
    const employee = new Employee('Davon', 13, 'davonb113@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//gets id from getId()
test('gets employee name', () => {
    const employee = new Employee('Davon', 13, 'davonb113@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

//gets id from getId(), expect Number
test('gets employee name', () => {
    const employee = new Employee('Davon', 13, 'davonb113@gmail.com');

    expect(employee.getName()).toEqual(expect.any(Number));
});

//gets email from getEmail
test('gets employee email', () => {
    const employee = new Employee('Davon', 13, 'davonb113@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(emplyee.email.toString()));
});

//gets role from getRole()
test('gets employee role', () => {
    const employee = new Employee('Davon', 13, 'davonb113@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
});
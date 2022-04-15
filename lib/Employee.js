// Employee constructor
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //returns name
    getName() {
        return this.name;
    }

    //returns ID
    getId() {
        return this.id;
    }

    //returns email
    getEmail() {
        return this.email;
    }

    //returns role
    getRole() {
        return 'Employee';
    }
};

//export
module.exports = Employee;
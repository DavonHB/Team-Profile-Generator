//Manager constructor
class Manager {
    constructor (name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
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

    //returns officeNumber
    getOfficeNumber() {
        return this.officeNumber;
    }

    //returns role
    getRole() {
        return 'Manager';
    }
};

//exports
module.exports = Manager;
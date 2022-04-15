//Intern constructor 
class Intern {
    constructor (name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
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

    //returns school
    getSchool() {
        return this.school;
    }

    //returns role
    getRole() {
        return 'Intern';
    }
};

//exports
module.exports = Intern;
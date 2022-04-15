//Engineer constructor
class Engineer {
    constructor (name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
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

    //returns github
    getGithub() {
        return this.github;
    }

    //returns role
    getRole() {
        return 'Engineer';
    }
};

//export
module.exports = Engineer;
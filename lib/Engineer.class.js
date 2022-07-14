// name, 
// id,
// email,
// getName(),
// getId(),
// getEmail(),
// 'github'
// getGithub(),
// getRole() returns 'Engineer'

const Employee = require('./Employee.class');

class Engineer {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer
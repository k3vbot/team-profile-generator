// name, 
// id,
// email,
// getName(),
// getId(),
// getEmail(),
// school,
// getSchool(),
// getRole() returns 'Intern'

const Employee = require('./Employee.class');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(id, name, email);
        this.school = school;
    }
    
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern"
    }
}

module.exports = Intern
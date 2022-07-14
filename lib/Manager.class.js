// name, 
// id,
// email,
// officeNumber
// getName(),
// getId(),
// getEmail(),
// getOfficeNumber
// getRole() returns 'Manager'
const Employee = require('./Employee.class');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(id, name, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager"
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager
const Employee = require("../Employee");

class Intern extends Employee {
  constructor() {
    super("intern", "2345", "intern@gmail.com");

    this.school = "intern school";
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;

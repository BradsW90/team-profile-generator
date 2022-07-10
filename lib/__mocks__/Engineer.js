const Employee = require("../Employee");

class Engineer extends Employee {
  constructor() {
    super("Engineer", "1224", "engineer@gmail.com");

    this.userName = "github.com/engineer";
  }

  getGithub() {
    return this.userName;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;

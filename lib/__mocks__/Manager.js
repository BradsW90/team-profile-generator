const Employee = require("../Employee");

class Manager extends Employee {
  constructor() {
    super("manager", "managerId", "manager@gmail.com");

    this.phoneNumber = "8888888888";
  }

  getPhoneNumber() {
    return this.phoneNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;

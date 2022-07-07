const Employee = require("./Employee");

class Engineer extends Employee {
  consturctor(name, id, email, userName) {
    super(name, id, email);

    this.userName = userName;
  }

  getUserName() {
    return this.userName;
  }
}

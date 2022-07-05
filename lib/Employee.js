function Employee(name, id, email) {
  this.name = name;
  this.id = id;
  this.email = email;

  Employee.prototype.getName = function () {};
  Employee.prototype.getId = function () {};
  Employee.prototype.getEmail = function () {};
  Employee.prototype.getRole = function () {
    return "Employee";
  };
}

module.exports = Employee;

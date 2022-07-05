const Employee = require("../lib/Employee.js");

describe("Employee", () => {
  it("Should return an employee object", () => {
    const results = new Employee();
    expect(results.getRole()).toEqual("Employee");
  });
});

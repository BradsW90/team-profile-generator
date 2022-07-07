const Employee = require("../lib/Employee.js");

jest.mock("../lib/Employee.js");

describe("Employee", () => {
  it("Should return an employee object", () => {
    const results = new Employee();

    console.log(results);

    expect(results.name).toEqual("Scott");
    expect(results.id).toEqual("0423663");
    expect(results.email).toEqual("bswj90@gmail.com");
    expect(results.getRole()).toEqual("Employee");
  });
});

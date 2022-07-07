const Manager = require("../lib/Manager");

jest.mock("../lib/Manager");

describe("Manager", () => {
  it("Should return manager object", () => {
    const result = new Manager();

    expect(result.getName()).toEqual("manager");
    expect(result.getId()).toEqual("managerId");
    expect(result.getEmail()).toEqual("manager@gmail.com");
    expect(result.getPhoneNumber()).toEqual("8888888888");
    expect(result.getRole()).toEqual("Manager");
  });
});

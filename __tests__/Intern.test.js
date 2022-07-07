const Intern = require("../lib/Intern");

jest.mock("../lib/Intern");

describe("Intern", () => {
  it("Should return the Intern object", () => {
    const result = new Intern();

    expect(result.getName()).toEqual("intern");
    expect(result.getId()).toEqual("2345");
    expect(result.getEmail()).toEqual("intern@gmail.com");
    expect(result.getSchool()).toEqual("intern school");
    expect(result.getRole()).toEqual("Intern");
  });
});

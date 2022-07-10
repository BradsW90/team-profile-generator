const Engineer = require("../lib/Engineer");

jest.mock("../lib/Engineer");

describe("Engineer", () => {
  it("Should return Engineer object", () => {
    const result = new Engineer();

    expect(result.getName()).toEqual("Engineer");
    expect(result.getId()).toEqual("1224");
    expect(result.getEmail()).toEqual("engineer@gmail.com");
    expect(result.getGithub()).toEqual("github.com/engineer");
    expect(result.getRole()).toEqual("Engineer");
  });
});

const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const rosterPage = require("./src/template");

const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "Please enter the name of the team Manager.",
        validate: (teamManager) => {
          if (teamManager) {
            return true;
          } else {
            console.log("Please enter a team managers name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerId",
        message: "Please enter the manager's Id.",
        validate: (managerId) => {
          managerId = parseInt(managerId);

          if (Number.isInteger(managerId)) {
            return true;
          } else {
            console.log("Please enter a valid id number");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Please enter the email address of the manager.",
        validate: (managerEmail) => {
          if (managerEmail.includes("@") && managerEmail.includes(".com")) {
            return true;
          } else {
            console.log("Please enter a valid email address");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerNumber",
        message: "Please enter a 10 digit phone number.",
        validate: (managerNumber) => {
          const userInput = parseInt(managerNumber);
          const managerNumberArr = managerNumber.split("");
          if (managerNumberArr.length === 10 && Number.isInteger(userInput)) {
            return true;
          } else {
            console.log("Please enter a valid number!");
            return false;
          }
        },
      },
    ])
    .then((managerData) => {
      managerData.roster = [];
      return managerData;
    });
};

const menu = (dataObj) => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "Please add an employee or finish your roster",
        choices: ["engineer", "intern", "Finish building my team"],
        default: "Finish building my team",
      },
    ])
    .then((menuData) => {
      if (menuData.menu === "engineer") {
        return addEngineer(dataObj);
      } else if (menuData.menu === "intern") {
        return addIntern(dataObj);
      } else {
        return dataObj;
      }
    });
};

const addEngineer = (objectData) => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "Please enter the name of your engineer",
        validate: (engineerName) => {
          if (engineerName) {
            return true;
          } else {
            console.log("Please enter a name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "engineerId",
        message: "Please enter the id of the engineer",
        validate: (engineerId) => {
          engineerId = parseInt(engineerId);

          if (Number.isInteger(engineerId)) {
            return true;
          } else {
            console.log("Please enter a valid id number");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "please enter the engineer's email address",
        validate: (engineerEmail) => {
          if (engineerEmail.includes("@") && engineerEmail.includes(".com")) {
            return true;
          } else {
            console.log("Please enter a valid email address");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "Please enter engineer's github username",
        validate: (engineerGithub) => {
          if (engineerGithub) {
            return true;
          } else {
            console.log("Please enter the github username.");
            return false;
          }
        },
      },
    ])
    .then((engineerData) => {
      const { engineerName, engineerId, engineerEmail, engineerGithub } =
        engineerData;

      const engineerClass = new Engineer(
        engineerName,
        engineerId,
        engineerEmail,
        engineerGithub
      );

      objectData.roster.push(engineerClass);

      return menu(objectData);
    });
};

const addIntern = (nextData) => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "Please enter the intern's name",
        validate: (internName) => {
          if (internName) {
            return true;
          } else {
            console.log("Please enter a name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "internId",
        message: "Please enter the intern's id number",
        validate: (internId) => {
          internId = parseInt(internId);

          if (Number.isInteger(internId)) {
            return true;
          } else {
            console.log("Please enter a valid id number");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "internEmail",
        message: "Please enter the intern's email address",
        validate: (internEmail) => {
          if (internEmail.includes("@") && internEmail.includes(".com")) {
            return true;
          } else {
            console.log("Please enter a valid email address");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "internSchool",
        message: "What school is the intern attending",
        validate: (internSchool) => {
          if (internSchool) {
            return true;
          } else {
            console.log("please enter a school name");
            return false;
          }
        },
      },
    ])
    .then((internData) => {
      const { internName, internId, internEmail, internSchool } = internData;

      const internClass = new Intern(
        internName,
        internId,
        internEmail,
        internSchool
      );

      nextData.roster.push(internClass);

      return menu(nextData);
    });
};

addManager()
  .then(menu)
  .then((FinishedData) => {
    const rosterHTML = rosterPage(FinishedData);
    fs.writeFile("./dist/index.html", rosterHTML, (err) => {
      if (err) throw err;
    });
    console.log("Your roster HTML was created in the dist folder!");
  });

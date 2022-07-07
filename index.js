const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const roster = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "teamManager",
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

        console.log(managerId);

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
    {
      type: "list",
      name: "menu",
      message: "Please add an employee or finish your roster",
      choices: ["engineer", "intern", "Finish building my team"],
      default: "Finish building my team",
    },
  ]);
};

roster().then((newObject) => {
  console.log(newObject.menu);
});

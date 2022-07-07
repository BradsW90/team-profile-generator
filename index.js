const inquirer = require("inquirer");
const Employee = require("./lib/Employee.js");

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
        if (managerId.isInteger()) {
          return true;
        } else {
          console.log("Please enter");
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
        const userInput = parseInt(managerNumber).split("");
        if (userInput === 10) {
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

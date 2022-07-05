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
  ]);
};

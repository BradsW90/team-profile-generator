const Manager = require("../lib/Manager");

const rosterPage = (rosterData) => {
  const { managerName, managerId, managerEmail, managerNumber } = rosterData;

  const newManager = new Manager(
    managerName,
    managerId,
    managerEmail,
    managerNumber
  );

  return ` <!DOCTYPE html>
  <html lang=en>
  <head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Team Roster</title>
  <script src="https://kit.fontawesome.com/5bae9e23d6.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
  <h1>My Team</h1>
  <div class="card-container">
  <div class="card">
  <div class="card-title">
  <h3>${newManager.getName()}</h3>
  <h3><i class="fa-solid fa-person">${newManager.getRole()}</h3>
  </div>
  <div class="attribute">ID: ${newManager.getId()}</div>
  <div class="attribute">Email: <a href="mailTo:${newManager.getEmail()}">${newManager.getEmail()}</a></div>
  <div class="attribute">Office number: ${newManager.getPhoneNumber()}</div>
  </div>
  ${rosterData.roster
    .map(function (classes) {
      if (classes.getRole() === "Intern") {
        return `<div class="card">
    <div class="card-title">
    <h3>${classes.getName()}</h3>
    <h3><i class="fa-solid fa-school"><i>${classes.getRole()}</h3>
    </div>
    <div class="attribute">ID: ${classes.getId()}</div>
    <div class="attribute">Email: <a href="mailTo:${classes.getEmail()}">${classes.getEmail()}</a></div>
    <div class="attribute">School Attending: ${classes.getSchool()}</div>
    </div>`;
      } else {
        return `<div class="card">
      <div class="card-title">
      <h3>${classes.getName()}</h3>
      <h3><i class="fa-brands fa-dev"></i>${classes.getRole()}</h3>
      </div>
      <div class="attribute">ID: ${classes.getId()}</div>
      <div class="attribute">Email: <a href="mailTo:${
        classes.getEmail
      }">${classes.getEmail()}</a></div>
      <div class="attribute">GitHub account: <a href="github.com/${classes.getGithub()}">${classes.getGithub()}</a></div>
      </div>`;
      }
    })
    .join("")}
  </div>
  </body>
  </html>`;
};

module.exports = rosterPage;

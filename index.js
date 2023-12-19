const Shapes = require("./lib/shapes");
const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "list",
      message: "Please select a shape:",
      choices: ["Circle", "Triangle", "Square"],
      name: "type",
    },
    {
      type: "input",
      message: "Please enter a shape color by name or hexidecimal:",
      name: "fill",
    },
    {
      type: "input",
      message: "Please type up to 3 letters:",
      name: "letters",
    },
    {
      type: "input",
      message: "Please enter a color for letters:",
      name: "letterColor",
    },
  ])
  .then(function (data) {
    const { type, fill, letters, letterColor } = data;
    if (letters.length > 3) {
      console.error("Text too long! Please try again!");
      return;
    }
    const makeShape = new Shapes(type, fill, letters, letterColor);
    if (makeShape.type == "Circle") {
      fs.writeFile(
        "./examples/logo.svg",
        `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

     <circle cx="150" cy="100" r="80" fill="${makeShape.fill}" />

     <text x="150" y="125" font-size="90" text-anchor="middle" fill="${makeShape.letterColor}">${makeShape.letters}</text>
   
   </svg>`,
        function (err) {
          err
            ? console.log("Something went wrong! Let's try again.")
            : console.log("success!");
        }
      );
    } else if (makeShape.type == "Triangle") {
      fs.writeFile("./examples/logo.svg", ``);
    } else if (makeShape.type == "Square") {
      fs.writeFile("./examples/logo.svg", ``);
    }

    console.log(makeShape);
  });

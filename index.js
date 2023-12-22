const Shapes = require("./lib/shapes");
const inquirer = require("inquirer");
const fs = require("fs");
const Circle = Shapes[0];
const Triangle = Shapes[1];
const Square = Shapes[2];

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
    if (type == "Circle") {
      const makeCircle = new Circle(fill, letters, letterColor);
      fs.writeFile(
        "./examples/logo.svg",
        `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">

   <circle cx="150" cy="100" r="80" fill="${makeCircle.fill}" />

   <text x="150" y="125" font-size="90" text-anchor="middle" fill="${makeCircle.letterColor}">${makeCircle.letters}</text>
 
 </svg>`,
        function (err) {
          err
            ? console.log("Something went wrong! Let's try again.")
            : console.log("Generated logo.svg");
        }
      );
    } else if (type == "Triangle") {
      const makeTri = new Triangle(fill, letters, letterColor);
      fs.writeFile(
        "./examples/logo.svg",
        `<svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">

         <polygon px= "50" points="50, 200 150, 0 300, 300" fill="${makeTri.fill}" />

       <text x="150" y="125" font-size="90" text-anchor="middle" fill="${makeTri.letterColor}">${makeTri.letters}</text>

     </svg>`,
        function (err) {
          err
            ? console.log("Something went wrong! Let's try again.")
            : console.log("Generated logo.svg");
        }
      );
    } else if (type == "Square") {
      const makeSquare = new Square(fill, letters, letterColor);
      fs.writeFile(
        "./examples/logo.svg",
        `<svg version="1.1"
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">

       <rect x="50"  width="200" height="200" fill="${makeSquare.fill}" />

       <text x="150" y="125" font-size="90" text-anchor="middle" fill="${makeSquare.letterColor}">${makeSquare.letters}</text>

     </svg>`,
        function (err) {
          err
            ? console.log("Something went wrong! Let's try again.")
            : console.log("Generated logo.svg");
        }
      );
    }
  });

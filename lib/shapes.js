const fs = require("fs");

class Circle {
  constructor(fill, letters, letterColor) {
    this.fill = fill;
    this.letters = letters;
    this.letterColor = letterColor;
    this.build = function () {
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
    };
  }
}
class Triangle {
  constructor(fill, letters, letterColor) {
    this.fill = fill;
    this.letters = letters;
    this.letterColor = letterColor;
    this.build = function () {
      fs.writeFile(
        "./examples/logo.svg",
        `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">

     <polygon px= "50" points="50, 200 150, 0 300, 300" fill="${makeTriangle.fill}" />
 
   <text x="150" y="125" font-size="90" text-anchor="middle" fill="${makeTriangle.letterColor}">${makeTriangle.letters}</text>
 
 </svg>`,
        function (err) {
          err
            ? console.log("Something went wrong! Let's try again.")
            : console.log("Generated logo.svg");
        }
      );
    };
  }
}

module.exports = [Circle, Triangle];

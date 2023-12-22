const Shapes = require("./shapes.js");
const Circle = Shapes[0];
const Triangle = Shapes[1];
const Square = Shapes[2];
const fs = require("fs");

describe("Shapes", () => {
  describe("Instances", () => {
    it("should create a new instance of Circle class", () => {
      const makeCircle = new Circle();
      expect(makeCircle).toBeInstanceOf(Circle);
    });
    it("should create a new instance of Triangle class", () => {
      const makeTri = new Triangle();
      expect(makeTri).toBeInstanceOf(Triangle);
    });
    it("should create a new instance of Square class", () => {
      const makeSquare = new Square();
      expect(makeSquare).toBeInstanceOf(Square);
    });
  });
  describe("set fill", () => {
    it("should match the set color", () => {
      const fill = "red";
      const makeCircle = new Circle(fill);
      expect(makeCircle.fill).toBe(fill);
    });
  });
  describe("set letters", () => {
    it("should match set letters", () => {
      const letters = "abc";
      const makeSquare = new Square("fill", letters);
      expect(makeSquare.letters).toBe(letters);
    });
  });
  describe("set letterColor", () => {
    it("should match set letter colors", () => {
      const letterColor = "blue";
      const makeTri = new Triangle("fill", "letters", letterColor);
      expect(makeTri.letterColor).toBe(letterColor);
    });
  });
});

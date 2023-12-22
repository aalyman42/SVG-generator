const Shapes = require("./shapes.js");
const Circle = Shapes[0];
const Triangle = Shapes[1];
const Square = Shapes[2];
describe("Shapes", () => {
  describe("Instance", () => {
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

  // describe("set type", () => {
  //   it("should match types", () => {
  //     const type = "circle";
  //     const makeShape = new Shapes(type);
  //     expect(makeShape.type).toBe(type);
  //   });
  // });
  // describe("set fill", () => {
  //   it("should match the set color", () => {
  //     const fill = "red";
  //     const makeShape = new Shapes("type", fill);
  //     expect(makeShape.fill).toBe(fill);
  //   });
  // });
  // describe("set letters", () => {
  //   it("should match set letters", () => {
  //     const letters = "abc";
  //     const makeShape = new Shapes("type", "fill", letters);
  //     expect(makeShape.letters).toBe(letters);
  //   });
  // });
  // describe("set letterColor", () => {
  //   it("should match set letter colors", () => {
  //     const letterColor = "blue";
  //     const makeShape = new Shapes("type", "fill", "letters", letterColor);
  //     expect(makeShape.letterColor).toBe(letterColor);
  //   });
  // });
});

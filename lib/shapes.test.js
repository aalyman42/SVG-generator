const Shapes = require("./shapes.js");

describe("Shapes", () => {
  describe("Instance", () => {
    it("should create a new instance of Shapes class", () => {
      const makeShape = new Shapes();
      expect(makeShape).toBeInstanceOf(Shapes);
    });
  });

  describe("set type", () => {
    it("should match types", () => {
      const type = "circle";
      const makeShape = new Shapes(type);
      expect(makeShape.type).toBe(type);
    });
  });
  describe("set fill", () => {
    it("should match the set color", () => {
      const fill = "red";
      const makeShape = new Shapes("type", fill);
      expect(makeShape.fill).toBe(fill);
    });
  });
  describe("set letters", () => {
    it("should match set letters", () => {
      const letters = "abc";
      const makeShape = new Shapes("type", "fill", letters);
      expect(makeShape.letters).toBe(letters);
    });
  });
  describe("set letterColor", () => {
    it("should match set letter colors", () => {
      const letterColor = "blue";
      const makeShape = new Shapes("type", "fill", "letters", letterColor);
      expect(makeShape.letterColor).toBe(letterColor);
    });
  });
});

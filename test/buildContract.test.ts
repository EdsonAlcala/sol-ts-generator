import { translateType } from "../lib/buildContract";

describe("buildContract component", () => {
  describe("translateType()", () => {
    it("should generate the type correct when passing a string ", () => {
      const expectedType = "string";

      const result = translateType(expectedType);

      expect(result).toEqual(expectedType);
    });

    it("should generate the type correct when passing a bytes type ", () => {
      const expectedType = "bytes32";

      const result = translateType(expectedType);

      expect(result).toEqual("string");
    });

    it("should generate the type correct when passing a bytes type ", () => {
      const expectedType = "bytes1";

      const result = translateType(expectedType);

      expect(result).toEqual("string");
    });
  });
});

import Generate from "../src/generate";

describe("Generate component", () => {
  it("should return hello world", () => {
    const instance = new Generate();

    const result = instance.hello();

    expect(result).toBe("hello world");
  });
});

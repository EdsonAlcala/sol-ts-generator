import { getMappings } from "../lib/solidityTypes";

describe("solidityTypes component", () => {
  it("should create the Mapping with all the types", () => {
    const mappings = getMappings();

    expect(mappings.get("bytes")).toBe("string");
    expect(mappings.get("bytes1")).toBe("string");
    expect(mappings.get("bytes2")).toBe("string");
    expect(mappings.get("bytes32")).toBe("string");

    expect(mappings.get("uint8")).toBe("uint");

    expect(mappings.get("string")).toBe("string");

    expect(mappings.get("address")).toBe("Address");
    expect(mappings.get("address[]")).toBe("Address[]");
    expect(mappings.get("bool")).toBe("boolean");
  });
});

import { getMappings, getOutputMappings } from "../lib/solidityTypes";

describe("solidityTypes component", () => {
  it("should create the Mapping with all the types", () => {
    const mappings = getMappings();

    expect(mappings.get("bytes")).toBe("string");
    expect(mappings.get("bytes1")).toBe("string");
    expect(mappings.get("bytes2")).toBe("string");
    expect(mappings.get("bytes32")).toBe("string");

    expect(mappings.get("uint8")).toBe("UInt");
    expect(mappings.get("uint256")).toBe("UInt");

    expect(mappings.get("uint8[]")).toBe("UInt[]");
    expect(mappings.get("uint256[]")).toBe("UInt[]");

    expect(mappings.get("string")).toBe("string");

    expect(mappings.get("address")).toBe("Address");
    expect(mappings.get("address[]")).toBe("Address[]");
    expect(mappings.get("bool")).toBe("boolean");
  });

  it("should create the output mappings with all the types", () => {
    const mappings = getOutputMappings();

    expect(mappings.get("bytes")).toBe("string");
    expect(mappings.get("bytes1")).toBe("string");
    expect(mappings.get("bytes2")).toBe("string");
    expect(mappings.get("bytes32")).toBe("string");

    expect(mappings.get("uint8")).toBe("BigNumber");
    expect(mappings.get("uint256")).toBe("BigNumber");

    expect(mappings.get("uint8[]")).toBe("BigNumber[]");
    expect(mappings.get("uint256[]")).toBe("BigNumber[]");

    expect(mappings.get("string")).toBe("string");

    expect(mappings.get("address")).toBe("Address");
    expect(mappings.get("address[]")).toBe("Address[]");
    expect(mappings.get("bool")).toBe("boolean");
  });
});

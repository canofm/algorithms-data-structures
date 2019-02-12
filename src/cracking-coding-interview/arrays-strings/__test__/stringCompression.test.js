import stringCompression from "../stringCompression";

describe("StringCompression", () => {
  it("should compress given string", () => {
    expect(stringCompression("aabcccccaaa")).toEqual("a2b1c5a3");
  });
});

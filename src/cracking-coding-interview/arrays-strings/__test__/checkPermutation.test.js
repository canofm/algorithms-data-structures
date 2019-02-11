import checkPermutation, { checkPermutation2 } from "../checkPermutation";

describe("CheckPermutation", () => {
  describe("CheckPermutation1", () => {
    it("should return true", () => {
      expect(checkPermutation("sarasa", "asaras")).toBeTruthy();
    });
    it("should return false", () => {
      expect(checkPermutation("sarasa", "sarlompa")).toBeFalsy();
    });
  });

  describe("CheckPermutation2", () => {
    it("should return true", () => {
      expect(checkPermutation2("sarasa", "asaras")).toBeTruthy();
    });
    it("should return false", () => {
      expect(checkPermutation2("sarasa", "sarlompa")).toBeFalsy();
    });
  });
});

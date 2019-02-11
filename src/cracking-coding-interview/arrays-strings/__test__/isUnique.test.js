import isUnique, { isUniqueBySorting } from "../IsUnique";

describe("isUnique", () => {
  describe("isUnique", () => {
    it("should return true", () => {
      expect(isUnique("abcdefgh")).toBeTruthy();
    });

    it("should return false", () => {
      expect(isUnique("notunique")).toBeFalsy();
    });
  });

  describe("isUniqueBySorting", () => {
    it("should return true", () => {
      expect(isUniqueBySorting("abcdefgh")).toBeTruthy();
    });

    it("should return false", () => {
      expect(isUniqueBySorting("notunique")).toBeFalsy();
    });
  });
});

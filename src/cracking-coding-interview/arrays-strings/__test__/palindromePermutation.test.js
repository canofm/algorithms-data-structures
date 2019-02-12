import PalindromePermutation from "../PalindromePermutation";

describe("PalindromePermutation", () => {
  it("should return true", () => {
    expect(PalindromePermutation("Tact Coa")).toBeTruthy();
    //taco cat is permutation which is a palindrome too
  });

  it("should return false", () => {
    expect(PalindromePermutation("not a palindrome within a permutation")).toBeFalsy();
  });
});

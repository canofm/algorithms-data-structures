import isPalindrome from "../palindrome";
import LinkedList from "../../../data-structures/linked-list/LinkedList";

describe("isPalindrome", () => {
  it("should return true", () => {
    const list = new LinkedList().fromValues(0, 1, 2, 1, 0);
    expect(isPalindrome(list)).toBeTruthy();
  });

  it("should return false", () => {
    const list = new LinkedList().fromValues(0, 3, 2, 1, 0);
    expect(isPalindrome(list)).toBeFalsy();
  });
});

import Stack from "../Stack";

describe("Stack", () => {
  it("should create empty", () => {
    const stack = new Stack();
    expect(stack).not.toBeNull();
    expect(stack.isEmpty()).toBeTruthy();
  });

  it("should push data", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);

    expect(stack.toString()).toBe("2,1");
  });

  it("should peek data", () => {
    const stack = new Stack();
    stack.push(3);
    stack.push(2);

    expect(stack.peek()).toBe(2);
  });

  it("should pop data", () => {
    const stack = new Stack();
    stack.push(3);
    stack.push(4);

    const popedValue = stack.pop();
    expect(popedValue).toBe(4);
    expect(stack.peek()).toBe(3);
  });

  it("should returns an array", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.toArray()).toEqual([3, 2, 1]);
  });

  it("should be possible to push/pop objects", () => {
    const stack = new Stack();

    stack.push({ value: "test1", key: "key1" });
    stack.push({ value: "test2", key: "key2" });

    expect(stack.pop().value).toBe("test2");
    expect(stack.pop().value).toBe("test1");
  });
});

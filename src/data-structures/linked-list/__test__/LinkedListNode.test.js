import LinkedListNode from "../LinkedListNode";

describe("LinkedListNode", () => {
  it("should apply the callback when toString is called", () => {
    const node = new LinkedListNode({ key: "sarlompa", value: 54321 });
    const callback = ({ key, value }) => `${key}: ${value}`;

    expect(node.toString(callback)).toEqual("sarlompa: 54321");
  });

  it("should just return the value when toString is called without a callback", () => {
    const value = { key: "sarlompa", value: 54321 };
    const node = new LinkedListNode(value);

    expect(node.toString()).toEqual(value);
  });
});

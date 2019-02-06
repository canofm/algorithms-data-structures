import LinkedList from "../LinkedList";

describe("LinkedList", () => {
  it("should create empty linked list", () => {
    const linkedList = new LinkedList();
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
    expect(linkedList.toArray()).toEqual([]);
    expect(linkedList.toString()).toEqual("");
  });

  it("should append node", () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);

    expect(linkedList.toArray()).toEqual([1, 2]);
    expect(linkedList.tail.next).toBeNull();
  });

  it("should prepend node", () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    expect(linkedList.head).toBe(linkedList.tail);

    linkedList.prepend(2);
    expect(linkedList.toArray()).toEqual([2, 1]);
    expect(linkedList.head).not.toBe(linkedList.tail);
  });

  it("should create linked list from an array", () => {
    const linkedList = new LinkedList();
    linkedList.fromArray([1, 2, 3, 4]);
    expect(linkedList.toArray()).toEqual([1, 2, 3, 4]);
  });

  it("should create linked list from values", () => {
    const linkedList = new LinkedList();
    linkedList.fromValues(1, 2, 3, 4);
    expect(linkedList.toArray()).toEqual([1, 2, 3, 4]);
  });

  it("should delete node by value", () => {
    const linkedList = new LinkedList();
    expect(linkedList.delete(1)).toBeNull();

    linkedList.fromValues(1, 2, 3);

    const deletedNode = linkedList.delete(2);
    expect(deletedNode.value).toBe(2);
    expect(linkedList.toArray()).toEqual([1, 3]);

    linkedList.delete(1);
    expect(linkedList.head.value).toBe(3);

    linkedList.prepend(2);
    linkedList.delete(3);
    expect(linkedList.tail.value).toBe(2);
  });

  it("should delete head node", () => {
    const linkedList = new LinkedList();
    linkedList.fromValues(1, 2, 3);

    linkedList.deleteHead();
    expect(linkedList.head.value).toBe(2);
  });

  it("should delete tail node", () => {
    const linkedList = new LinkedList();
    linkedList.fromValues(1, 2, 3);

    linkedList.deleteTail();
    expect(linkedList.tail.value).toBe(2);
  });

  it("should find node by value", () => {
    const linkedList = new LinkedList();
    linkedList.fromValues(1, 2, 3, 4);

    expect(linkedList.find(5)).toBeNull();
    expect(linkedList.find(3).value).toBe(3);
  });

  it("should reserve", () => {
    const linkedList = new LinkedList();
    linkedList.fromValues(1, 2, 3, 4, 5, 6);
    expect(linkedList.toArray()).toEqual([1, 2, 3, 4, 5, 6]);

    linkedList.reverse();
    expect(linkedList.toArray()).toEqual([6, 5, 4, 3, 2, 1]);
  });
});

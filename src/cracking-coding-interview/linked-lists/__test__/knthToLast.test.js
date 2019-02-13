import KnthToLast from "../knthToLast";
import LinkedList from "../../../data-structures/linked-list/LinkedList";

describe("knthToLast", () => {
  it("should return 4 node", () => {
    const list = new LinkedList();
    list.fromValues(1, 2, 3, 4, 5, 6);

    expect(KnthToLast(list, 2).value).toBe(4);
  });
});

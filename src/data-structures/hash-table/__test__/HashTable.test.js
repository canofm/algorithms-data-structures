import HashTable from "../HashTable";

describe("HashTable", () => {
  it("should create a hash table of certain size", () => {
    const defaultHashTable = new HashTable();
    expect(defaultHashTable.table.length).toBe(32);

    const biggerHashTable = new HashTable(64);
    expect(biggerHashTable.table.length).toBe(64);
  });

  it("should set, read and delete data with collisions", () => {
    const hashTable = new HashTable(2);

    hashTable.set("a", "fire");
    hashTable.set("b", "earth");
    hashTable.set("c", "wind");
    hashTable.set("d", "water");

    expect(hashTable.has("a")).toBeTruthy();
    expect(hashTable.has("z")).toBeFalsy();

    expect(hashTable.get("b")).toEqual("earth");
    expect(hashTable.get("c")).toEqual("wind");
    expect(hashTable.get("x")).toBeUndefined();

    hashTable.delete("a");

    expect(hashTable.has("a")).toBeFalsy();
    expect(hashTable.get("a")).toBeUndefined();

    expect(hashTable.get("d")).toEqual("water");

    hashTable.set("d", "thunder");
    expect(hashTable.get("d")).toEqual("thunder");
  });

  it("should track actual keys", () => {
    const hashTable = new HashTable(3);

    hashTable.set("a", "sky-old");
    hashTable.set("a", "sky");
    hashTable.set("b", "sea");
    hashTable.set("c", "earth");
    hashTable.set("d", "ocean");

    expect(hashTable.getKeys()).toEqual(["a", "b", "c", "d"]);
    expect(hashTable.has("a")).toBeTruthy();
    expect(hashTable.has("x")).toBeFalsy();
  });
});

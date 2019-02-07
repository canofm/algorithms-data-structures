import LinkedList from "../linked-list/LinkedList";

const defaultSize = 32;
const PRIME = 31;

export default class HashTable {
  constructor(size = defaultSize) {
    this.table = Array(size)
      .fill(null)
      .map(() => new LinkedList());

    this.keys = {};
  }

  hash(key) {
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol, i) =>
        //polynomial string hash to reduce the number of collisions
        hashAccumulator + Math.pow(PRIME, -i) * keySymbol.charCodeAt(0),
      0
    );

    return hash % this.table.length;
  }

  set(key, value) {
    const keyHash = this.hash(key);
    this.keys[key] = keyHash;
    const rowLinkedList = this.table[keyHash];
    const node = this._getNode(rowLinkedList, key);

    if (!node) {
      // Insert new node
      rowLinkedList.append({ key, value });
    } else {
      // Update value of the existing node
      node.value.value = value;
    }
  }

  delete(key) {
    const keyHash = this.keys[key];
    delete this.keys[key];
    const rowLinkedList = this.table[keyHash];
    const node = this._getNode(rowLinkedList, key);

    if (node) {
      return rowLinkedList.delete(node.value);
    }

    return null;
  }

  get(key) {
    const rowLinkedList = this.table[this.hash(key)];
    const node = this._getNode(rowLinkedList, key);

    return node ? node.value.value : undefined;
  }

  has(key) {
    return Object.hasOwnProperty.call(this.keys, key);
  }

  getKeys() {
    return Object.keys(this.keys);
  }

  _getNode(linkedList, key) {
    return linkedList.find({ callback: nodeValue => nodeValue.key === key });
  }
}

import LinkedList from "../linked-list/LinkedList";

export default class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmpty() {
    return !this.linkedList.head;
  }

  peek() {
    return this.isEmpty() ? null : this.linkedList.head.value;
  }

  push(value) {
    this.linkedList.prepend(value);
  }

  pop() {
    const head = this.linkedList.deleteHead();
    return head ? head.value : null;
  }

  toArray() {
    return this.linkedList.toArray();
  }

  toString() {
    return this.linkedList.toString();
  }
}

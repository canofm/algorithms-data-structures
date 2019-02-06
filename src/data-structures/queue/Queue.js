import LinkedList from "../linked-list/LinkedList";

export default class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmpty() {
    return !this.linkedList.head;
  }

  enqueue(value) {
    this.linkedList.append(value);
  }

  dequeue() {
    const head = this.linkedList.deleteHead();
    return head ? head.value : null;
  }

  peek() {
    return this.isEmpty() ? null : this.linkedList.head.value;
  }

  toArray() {
    return this.linkedList.toArray();
  }

  toString() {
    return this.linkedList.toString();
  }
}

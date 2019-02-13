import LinkedListNode from "../../data-structures/linked-list/LinkedListNode";

export default function isPalindrome(list) {
  const reversed = reverseAndClone(list.head);
  return isEqual(list.head, reversed);
}

const reverseAndClone = node => {
  let head = null;
  while (node) {
    const n = new LinkedListNode(node.value);
    n.next = head;
    head = n;
    node = node.next;
  }
  return head;
};

const isEqual = (nodeOne, nodeTwo) => {
  while ((nodeOne !== null) & (nodeTwo !== null)) {
    if (nodeOne.value !== nodeTwo.value) {
      return false;
    }
    nodeOne = nodeOne.next;
    nodeTwo = nodeTwo.next;
  }
  return nodeOne === null && nodeTwo === null;
};

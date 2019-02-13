export default function KnthToLast(linkedList, knth) {
  let p1 = linkedList.head;
  let p2 = linkedList.head;

  for (let i = 0; i < knth; i++) {
    const curretNode = p1.next;
    if (curretNode != null) {
      p1 = curretNode;
    }
  }

  while (p1.next) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p2;
}

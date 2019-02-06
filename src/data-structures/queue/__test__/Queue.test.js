import Queue from "../Queue";

describe("Queue", () => {
  it("should create empty", () => {
    const queue = new Queue();
    expect(queue).not.toBeNull();
    expect(queue.isEmpty()).toBeTruthy();
  });

  it("should push data", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.toString()).toBe("1,2");
  });

  it("should peek data", () => {
    const queue = new Queue();
    queue.enqueue(3);
    queue.enqueue(2);

    expect(queue.peek()).toBe(3);
  });

  it("should dequeue data", () => {
    const queue = new Queue();
    queue.enqueue(3);
    queue.enqueue(4);

    const dequeuedValue = queue.dequeue();
    expect(dequeuedValue).toBe(3);
    expect(queue.peek()).toBe(4);
  });

  it("should returns an array", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.toArray()).toEqual([1, 2, 3]);
  });

  it("should be possible to enqueue/dequeue objects", () => {
    const queue = new Queue();

    queue.enqueue({ value: "test1", key: "key1" });
    queue.enqueue({ value: "test2", key: "key2" });

    expect(queue.dequeue().value).toBe("test1");
    expect(queue.dequeue().value).toBe("test2");
  });
});

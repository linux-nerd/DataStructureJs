import {Queue} from "../core";

describe("Queue", () => {
    let queue;

    beforeEach(() => {
        queue = new Queue();
    });

    it("Should have an empty queue", () => {
        expect(queue.size()).toBe(0);
    });

    it("Should enqueue the item in the queue", () => {
        queue.enqueue(10);
        expect(queue.size()).toBe(1);

        queue.enqueue(5);
        expect(queue.size()).toBe(2);
    });

    it("Should dequeue the item from the queue", () => {
        queue.enqueue(10);
        queue.enqueue(5);
        expect(queue.size()).toBe(2);

        let dequeueVal1 = queue.dequeue();
        expect(queue.size()).toBe(1);
        expect(dequeueVal1).toBe(10);

        let dequeueVal2 = queue.dequeue();
        expect(queue.size()).toBe(0);
        expect(dequeueVal2).toBe(5);
    });

    it("Shoiuld throw an error when an empty queue is dequeued", () => {
        expect(() => {queue.dequeue()}).toThrow(new Error("Queue is empty!"));
    });
});
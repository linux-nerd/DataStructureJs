import { Queue, CircularQueue } from "../core";

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

    it("Should return the top item of the queue", () => {
        queue.enqueue(10);
        queue.enqueue(20);

        expect(queue.size()).toBe(2);
        expect(queue.top()).toBe(10);

        queue.enqueue(30);
        expect(queue.top()).toBe(10);        
    });

    it("Should throw an error when top is requested of an empty queue", () => {
        expect(() => {queue.dequeue()}).toThrow(new Error("Queue is empty!"));
    });

    it("Should clear the queue", () => {
        queue.enqueue(10);
        queue.enqueue(20);
        expect(queue.size()).toBe(2);

        queue.clear();
        expect(queue.size()).toBe(0);
    });

    it("Should throw an error when an empty queue is cleared", () => {
        expect(() => {queue.dequeue()}).toThrow(new Error("Queue is empty!"));
    });

    it("Should have the type queue", () => {
        expect(queue.type).toEqual("queue");
    });
});


describe("CircularQueue", () => {
    let cQueue;

    beforeEach(() => {
        cQueue = new CircularQueue(5);
    });

    it("Should have a size 0", () => {
        expect(cQueue.size()).toBe(0);
    });

    it("Should have a type of circular-queue", () => {
        expect(cQueue.type).toEqual('circular-queue');
    });

    it("Should add items to the circular queue", () => {
        cQueue.enqueue(10);
        cQueue.enqueue(20);
        cQueue.enqueue(30);

        expect(cQueue.size()).toBe(3);
    });
});
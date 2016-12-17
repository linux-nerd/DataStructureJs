import { Stack } from "../core";

describe("Stack", () => {
    let stack;
    beforeEach(() => {
        stack = new Stack();
    });

    it("Should have a size of 0", ()=> {
        expect(stack.size()).toBe(0);
    });

    it("Should push value into the stack.", () => {
        stack.push(5);
        expect(stack.peek()).toBe(5);
        expect(stack.size()).toBe(1);

        stack.push(10);
        expect(stack.peek()).toBe(10);
        expect(stack.size()).toBe(2);
    });

    it("Should pop value from the stack", () => {
        stack.push(5);
        stack.push(10);

        let poppedValue1 = stack.pop();
        expect(stack.size()).toBe(1);
        expect(poppedValue1).toBe(10);
        expect(stack.peek()).toBe(5);
    });

    it("Should Clear the stack", () => {
        stack.push(5);
        stack.push(10);

        stack.clear();
        expect(stack.size()).toBe(0);
    });

    it("Should throw error when an empty stack is popped.", () => {
        expect(() => stack.pop()).toThrow(new Error("Stack is empty!"));
    });

    it("Should throw error when an empty stack is peeked.", () => {
        expect(() => stack.peek()).toThrow(new Error("Stack is empty!"));
    });

    it("Should throw error when an empty stack is cleared.", () => {
        expect(() => stack.clear()).toThrow(new Error("Stack is empty!"));
    });
})
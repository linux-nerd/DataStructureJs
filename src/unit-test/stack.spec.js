import { Stack } from "../core";

describe("Stack", () => {
    let stack;
    beforeEach(() => {
        stack = new Stack();
    });

    it("Should have a size of 0", ()=> {
        expect(stack.size()).toBe(0);
    });
})
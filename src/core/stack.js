
const _count = Symbol('count');

export class Stack {
    constructor() {
        this.stack = [];
        this[_count] = 0;
    }

    size() {
        return this[_count];
    }

    push(item) {
        this.stack.push(item);
        this[_count] += 1;
    }

    pop() {
        if(!this.isEmpty()) {
            this.stack.pop();
            this[_count] -= 1;
        }
    }

    peek() {
        if(!isEmpty()) {
            return this.stack[this[_count] - 1];
        }
    }

    clear() {
        if(!this.isEmpty()) {
            this.stack.length = 0;
            this[_count] = 0;
        }
    }

    isEmpty() {
        return this[_count] === 0;
    }
}
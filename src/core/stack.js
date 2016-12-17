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
            let poppedVal = this.stack.pop();
            this[_count] -= 1;

            return poppedVal;
        }else {
            this._throwEmptyStackError();
        }
    }

    peek() {
        if(!this.isEmpty()) {
            return this.stack[this[_count] - 1];
        }else {
            this._throwEmptyStackError();
        }
    }

    clear() {
        if(!this.isEmpty()) {
            this.stack.length = 0;
            this[_count] = 0;
        }else {
            this._throwEmptyStackError();
        }
    }

    isEmpty() {
        return this[_count] === 0;
    }

    _throwEmptyStackError() {
        throw new Error("Stack is empty!");
    }
}

const _count = Symbol('count');
export class Queue {
    constructor() {
        this.queue = [];
        this[_count] = 0;
    }

    enqueue(item) {
        this.queue.unshift(item);
        this[_count] += 1;
    }

    dequeue() {
        if(!this.isEmpty()) {
            let dequeuedVal = this.queue.pop();
            this[_count] -= 1;
            return dequeuedVal;
        }else {
            this._throwEmptyStackError();
        }
    }

    isEmpty() {
        return this[_count] === 0;
    }

    size() {
        return this[_count];
    }

    top() {

    }

    clear() {

    }

    _throwEmptyStackError() {
        throw new Error("Queue is empty!");
    }
}
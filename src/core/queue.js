//For private property
const _count = Symbol('count');

/**
 * @class
 * @name Queue
 * @description Insertion occurs at the rear of the list, and deletion occurs at the front of the list.
 */
export class Queue {
    constructor() {
        this.queue = [];
        this[_count] = 0;
        this.type = 'queue';
    }

    /**
     * @method
     * @name enqueue
     * @param item {any}
     * @description unshifts an item in the queue
     */
    enqueue(item) {
        this.queue.unshift(item);
        this[_count] += 1;
    }

    /**
     * @method
     * @name dequeue
     * @description Checks if the queue is empty or not. If its not then pops the item from the queue
     * @returns item {any}
     */
    dequeue() {
        if(!this.isEmpty()) {
            let dequeuedVal = this.queue.pop();
            this[_count] -= 1;
            return dequeuedVal;
        }else {
            this._throwError();
        }
    }

    /**
     * @method
     * @name isEmpty
     * @description checks if the queue is empty of not
     * @returns isEmpty {boolean}
     */
    isEmpty() {
        return this[_count] === 0;
    }

    /**
     * @method
     * @name size
     * @description returns the size of the queue
     * @returns count {number}
     */
    size() {
        return this[_count];
    }

    /**
     * @method
     * @name top
     * @description Returns the top item from the queue without removing it
     * @returns item {any}
     */
    top() {
        if(!this.isEmpty()) {
            return this.queue[this.size() - 1];
        }else {
            this._throwError();
        }
    }

    /**
     * @method
     * @name clear
     * @description Clears the queue if its not empty. If its empty then it throws an Error
     */
    clear() {
        if(!this.isEmpty()) {
            this.queue.length = 0;
            this[_count] = 0;
        }else {
            this._throwError();
        }
            
    }

    /**
     * @method
     * @name _throwEmptyStackError
     * @param msg {string}
     * @description throws an Error
     */
    _throwError(msg) {
        msg = msg ? msg : "Queue is empty!";
        throw new Error(msg);
    }
}



const _front = Symbol('front');
const _rear = Symbol('rear');
const _subscript = Symbol('subscript');
const _max = Symbol("max");

/**
 * @class
 * @name CircularQueue
 * @extends Queue
 * @description Queue in which all nodes are treated as circular such that the first node follows the last node.
 */
export class CircularQueue extends Queue {
    constructor(max) {
        super();
        //@override
        this.type = 'circular-queue';

        // private variables
        this[_front] = -1;
        this[_rear] = -1;
        this[_subscript] = 0;
        this[_max] = max;
    }

    /**
     * @method
     * @override
     * @name enqueue
     * @param item {any}
     * @description Add an item to the queue. When a queue is full then throw an error.
     */
    enqueue(item) {
        //check if the circular queue is empty.
        if(this[_count] === this[_max]) {
            this._throwError("Circular Queue is full");
        }else {
            //if the rear is set to -1 then set it to 0.
            if(this[_rear] === -1) {
                this[_rear] = 0;
            }

            //insert the value in the queue.
            this.queue[this[_rear]] = item;

            //increment the rear to the new value.
            this[_rear] = (this[_rear] + 1) % this[_max];

            //increment the size of the queue filled.
            this[_count] += 1;

            //if the front is set to -1 then set it to 0.
            if(this[_front] === -1) {
                this[_front] = 0;
            }
        }
    }
} 
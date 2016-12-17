/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _core = __webpack_require__(1);

	var BUNNY = {
	    ds: { Stack: _core.Stack, Queue: _core.Queue, CircularQueue: _core.CircularQueue }
	};

	window.Bunny = BUNNY;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stack = __webpack_require__(2);

	Object.keys(_stack).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _stack[key];
	    }
	  });
	});

	var _queue = __webpack_require__(3);

	Object.keys(_queue).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _queue[key];
	    }
	  });
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _count = Symbol('count');

	var Stack = exports.Stack = function () {
	    function Stack() {
	        _classCallCheck(this, Stack);

	        this.stack = [];
	        this[_count] = 0;
	        this.type = 'stack';
	    }

	    _createClass(Stack, [{
	        key: 'size',
	        value: function size() {
	            return this[_count];
	        }
	    }, {
	        key: 'push',
	        value: function push(item) {
	            this.stack.push(item);
	            this[_count] += 1;
	        }
	    }, {
	        key: 'pop',
	        value: function pop() {
	            if (!this.isEmpty()) {
	                var poppedVal = this.stack.pop();
	                this[_count] -= 1;

	                return poppedVal;
	            } else {
	                this._throwEmptyStackError();
	            }
	        }
	    }, {
	        key: 'peek',
	        value: function peek() {
	            if (!this.isEmpty()) {
	                return this.stack[this[_count] - 1];
	            } else {
	                this._throwEmptyStackError();
	            }
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            if (!this.isEmpty()) {
	                this.stack.length = 0;
	                this[_count] = 0;
	            } else {
	                this._throwEmptyStackError();
	            }
	        }
	    }, {
	        key: 'isEmpty',
	        value: function isEmpty() {
	            return this[_count] === 0;
	        }
	    }, {
	        key: '_throwEmptyStackError',
	        value: function _throwEmptyStackError() {
	            throw new Error("Stack is empty!");
	        }
	    }]);

	    return Stack;
	}();

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	//For private property
	var _count = Symbol('count');

	/**
	 * @class
	 * @name Queue
	 * @description Insertion occurs at the rear of the list, and deletion occurs at the front of the list.
	 */

	var Queue = exports.Queue = function () {
	    function Queue() {
	        _classCallCheck(this, Queue);

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


	    _createClass(Queue, [{
	        key: 'enqueue',
	        value: function enqueue(item) {
	            this.queue.unshift(item);
	            this[_count] += 1;
	        }

	        /**
	         * @method
	         * @name dequeue
	         * @description Checks if the queue is empty or not. If its not then pops the item from the queue
	         * @returns item {any}
	         */

	    }, {
	        key: 'dequeue',
	        value: function dequeue() {
	            if (!this.isEmpty()) {
	                var dequeuedVal = this.queue.pop();
	                this[_count] -= 1;
	                return dequeuedVal;
	            } else {
	                this._throwError();
	            }
	        }

	        /**
	         * @method
	         * @name isEmpty
	         * @description checks if the queue is empty of not
	         * @returns isEmpty {boolean}
	         */

	    }, {
	        key: 'isEmpty',
	        value: function isEmpty() {
	            return this[_count] === 0;
	        }

	        /**
	         * @method
	         * @name size
	         * @description returns the size of the queue
	         * @returns count {number}
	         */

	    }, {
	        key: 'size',
	        value: function size() {
	            return this[_count];
	        }

	        /**
	         * @method
	         * @name top
	         * @description Returns the top item from the queue without removing it
	         * @returns item {any}
	         */

	    }, {
	        key: 'top',
	        value: function top() {
	            if (!this.isEmpty()) {
	                return this.queue[this.size() - 1];
	            } else {
	                this._throwError();
	            }
	        }

	        /**
	         * @method
	         * @name clear
	         * @description Clears the queue if its not empty. If its empty then it throws an Error
	         */

	    }, {
	        key: 'clear',
	        value: function clear() {
	            if (!this.isEmpty()) {
	                this.queue.length = 0;
	                this[_count] = 0;
	            } else {
	                this._throwError();
	            }
	        }

	        /**
	         * @method
	         * @name _throwEmptyStackError
	         * @param msg {string}
	         * @description throws an Error
	         */

	    }, {
	        key: '_throwError',
	        value: function _throwError(msg) {
	            msg = msg ? msg : "Queue is empty!";
	            throw new Error(msg);
	        }
	    }]);

	    return Queue;
	}();

	var _front = Symbol('front');
	var _rear = Symbol('rear');
	var _subscript = Symbol('subscript');
	var _max = Symbol("max");

	/**
	 * @class
	 * @name CircularQueue
	 * @extends Queue
	 * @description Queue in which all nodes are treated as circular such that the first node follows the last node.
	 */

	var CircularQueue = exports.CircularQueue = function (_Queue) {
	    _inherits(CircularQueue, _Queue);

	    function CircularQueue(max) {
	        _classCallCheck(this, CircularQueue);

	        var _this = _possibleConstructorReturn(this, (CircularQueue.__proto__ || Object.getPrototypeOf(CircularQueue)).call(this));

	        _this.type = 'circular-queue';

	        // private variables
	        _this[_front] = -1;
	        _this[_rear] = -1;
	        _this[_subscript] = 0;
	        _this[_max] = max;
	        return _this;
	    }

	    _createClass(CircularQueue, [{
	        key: 'enqueue',
	        value: function enqueue(item) {
	            if (this[_count] === this[_max]) {
	                this._throwError("Circular Queue is full");
	            } else {
	                if (this[_rear] === -1) {
	                    this[_rear] = 0;
	                }

	                this.queue[this[_rear]] = item;

	                this[_rear] = (this[_rear] + 1) % this[_max];

	                this[_count] += 1;

	                if (this[_front] === -1) {
	                    this[_front] = 0;
	                }
	            }
	        }
	    }]);

	    return CircularQueue;
	}(Queue);

/***/ }
/******/ ]);
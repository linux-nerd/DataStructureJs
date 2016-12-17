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
	    ds: { Stack: _core.Stack, Queue: _core.Queue }
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

	"use strict";

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
	    }

	    _createClass(Stack, [{
	        key: "size",
	        value: function size() {
	            return this[_count];
	        }
	    }, {
	        key: "push",
	        value: function push(item) {
	            this.stack.push(item);
	            this[_count] += 1;
	        }
	    }, {
	        key: "pop",
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
	        key: "peek",
	        value: function peek() {
	            if (!this.isEmpty()) {
	                return this.stack[this[_count] - 1];
	            } else {
	                this._throwEmptyStackError();
	            }
	        }
	    }, {
	        key: "clear",
	        value: function clear() {
	            if (!this.isEmpty()) {
	                this.stack.length = 0;
	                this[_count] = 0;
	            } else {
	                this._throwEmptyStackError();
	            }
	        }
	    }, {
	        key: "isEmpty",
	        value: function isEmpty() {
	            return this[_count] === 0;
	        }
	    }, {
	        key: "_throwEmptyStackError",
	        value: function _throwEmptyStackError() {
	            throw new Error("Stack is empty!");
	        }
	    }]);

	    return Stack;
	}();

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _count = Symbol('count');

	var Queue = exports.Queue = function () {
	    function Queue() {
	        _classCallCheck(this, Queue);

	        this.queue = [];
	        this[_count] = 0;
	    }

	    _createClass(Queue, [{
	        key: "enqueue",
	        value: function enqueue(item) {
	            this.queue.unshift(item);
	            this[_count] += 1;
	        }
	    }, {
	        key: "dequeue",
	        value: function dequeue() {
	            if (!this.isEmpty()) {
	                var dequeuedVal = this.queue.pop();
	                this[_count] -= 1;
	                return dequeuedVal;
	            } else {
	                this._throwEmptyStackError();
	            }
	        }
	    }, {
	        key: "isEmpty",
	        value: function isEmpty() {
	            return this[_count] === 0;
	        }
	    }, {
	        key: "size",
	        value: function size() {
	            return this[_count];
	        }
	    }, {
	        key: "top",
	        value: function top() {}
	    }, {
	        key: "clear",
	        value: function clear() {}
	    }, {
	        key: "_throwEmptyStackError",
	        value: function _throwEmptyStackError() {
	            throw new Error("Queue is empty!");
	        }
	    }]);

	    return Queue;
	}();

/***/ }
/******/ ]);
/**
 * @author abhishek
 * implementation of LIFO stacks.
 * 
 * methods - pop and push
 * push - add objects to the top.
 * pop - remove object from the top.
 */

BUNNY.DS.stack = function(){
	if(!(this instanceof BUNNY.DS.stack)){
		return new BUNNY.DS.stack();
	}
};

//Extend Array
BUNNY.DS.stack.prototype = new Array();

//reset the constructor to the Stack
BUNNY.DS.stack.prototype.constructor = BUNNY.DS.stack;

/**
 * This method returns the size of the stack
 */
BUNNY.DS.stack.prototype.size = function(){
	return this.length;
};


/**
 * this method checks whether the stack is empty or not
 * returns true is the stack is empty
 * returns false when its not
 */
BUNNY.DS.stack.prototype.isEmpty = function () {
  	return (this.size() == 0);
};

/**
 * This method push the element into the stack
 */

BUNNY.DS.stack.prototype.push = function(item){
	return Array.prototype.push.call(this, item);
};

/**
 * This method pops the value from the stack
 * If the stack is empty then an error is returned
 */

BUNNY.DS.stack.prototype.pop = function(){
	try{
		if(this.isEmpty()){
			throw new Error("Cannot pop the value from the stack, since the stack is empty.");
		}else{
			return Array.prototype.pop.call(this);
		}
	}catch(e){
		return e.name + ": " + e.message;
	}
};

/**
 * look at object on top of stack (but don’t remove)
 * throw an exception when the stack is empty.
 */
BUNNY.DS.stack.prototype.top = function(){
	try{
		if(this.isEmpty()){
            throw new Error("Cannot get the top value from the stack, since the stack is empty.");
        }else{
            return this[this.size() - 1]; 
        }
	}catch(e){
		return e.name + ": " + e.message;
	}
};


BUNNY.DS.stack.prototype.getStackString = function(){
	// return this.join(",");
	return this.toString();
};

BUNNY.DS.stack.prototype.clear = function(){
	this.length = 0;
	return this.size();
};




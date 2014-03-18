/**
 * @author abhishek
 * implementation of LIFO stacks.
 * 
 * methods - pop and push
 * push - add objects to the top.
 * pop - remove object from the top.
 */


BUNNY.DS.stack = function(){
    
    //private variable
    //only accessible by push and pop methods 

	var stack = [];
    
    //remove object from top of stack
    //throw an exception when the stack is empty
    var pop = function(){
        try{
            if(isEmpty()){
                throw new Error("Cannot pop the value from the stack, since the stack is empty.");
            }else{
                return stack.pop();
            }
        }catch(e){
            return e.name + ": " + e.message;
        }
        
    };
    
    //insert o on top of stack
    var push = function(o){
        return stack.push(o);
    };
    
    //look at object on top of stack (but don’t remove)
    //throw an exception when the stack is empty.
    var top = function(){
        try{
            if(isEmpty()){
                throw new Error("Cannot get the top value from the stack, since the stack is empty.");
            }else{
                return stack[stack.length - 1]; 
            }
        }catch(e){
            return e.name + ": " + e.message;
        }
    };
    
    //number of objects on the stack
    var size = function(){
        return stack.length;
    };
    
    //does (size = = 0)
    var isEmpty = function(){
        if(size() == 0){
            return true;
        }else{
            return false;
        }
    };
    
    //get the stack as an array
    var getStackArray = function(){
        return stack;
    };
    
    //get the stack as string
    var getStackString = function(){
        return stack.join(",");
    };
    
    var clear = function(){
        stack.length = 0;
        
        return size();
    }
    
    //exposing public methods - push, pop, top, size, isEmpty, getStackArray, getStackArray
	return {
		pop: pop,
		push: push,
        top: top,
		size: size,
        isEmpty: isEmpty,
        getStackArray : getStackArray,
        getStackString: getStackString ,
        clear: clear
	};
}




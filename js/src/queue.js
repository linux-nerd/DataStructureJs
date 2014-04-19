/**
 * @author abhishek
 * implementation of FIFO queue.
 * 
 * Using Arrays
 */


//======================================================================================================
//Simple Queue: 
//Insertion occurs at the rear of the list, and deletion occurs at the front of the list.
//methods - dequeue, enqueue, getQueueArray, getQueueString, isEmpty, size, clear
//======================================================================================================
BUNNY.DS.queue = function(){
    //private variable
    var queue = [];
    
    //private methods
    
    //add the value to the queue.
    function enqueue(o){
        return queue.unshift(o);
    }
    
    //remove the item from the queue
    //if the queue is empty then trow the exception
    function dequeue(){
        try{
            if(isEmpty()){
                throw new Error("Cannot dequeue from the rear of the Queue, since the queue is empty.");
            }else{
                return queue.pop();
            }
        }catch(e){
            return (e.name + ": " + e.message);
        }
    }
    
    //get the size of the queue
    function size(){
        return queue.length;
    }
    
    //check if the queue is empty
    function isEmpty(){
        if(size() == 0){
            return true;
        }else{
            return false;
        }
    }
    
    //get the queue as an Array
    function getQueueArray(){
        return queue;
    }
    
    //get the queue as a string
    function getQueueString(){
        return queue.join(",");
    }
    
    //get the top value of th queue
    //if the queue is empty, then throw thw exception.
    function top(){
        try{
            if(!isEmpty()){
                return queue[size() - 1];
            }else{
                throw new Error("Cannot get the value of top of the Queue, since the queue is empty.");
            }
        }catch(e){
            return (e.name + ": " + e.message); 
        }
    }
    
    //clear the queue
    function clear(){
        queue.length = 0;
        
        return size();
    }
    
    //return the public methods
    return{
        enqueue: enqueue,
        dequeue: dequeue,
        size: size,
        isEmpty: isEmpty,
        getQueueArray: getQueueArray,
        getQueueString: getQueueString,
        top: top,
        clear: clear
    };
};


//======================================================================================================
//Circular Queue: 
//Queue in which all nodes are treated as circular such that the first node follows the last node.
//======================================================================================================
BUNNY.DS.circularQueue = function(max){
    var front = -1, rear = -1, subscript = 0, size = 0;
    var cQueue = [];
    
    //give the array a length
    cQueue.length = max;
    
    //add the value to thee queue
    //if the queue is full throw the error.
    function enqueue(o){
        try{
        	//check if the circular queue is empty.
            if(size == max){
                throw new Error("Circular Queue is Full");
            }else{
            	//if the rear is set to -1 then set it to 0.
                if(rear == -1){
                    rear = 0;
                }
                
                //insert the value in the queue.
                cQueue[rear] = o;
                
                //increment the rear to the new value.
                rear = (rear + 1) % max;
                
                //increment the size of the queue filled.
                size = size + 1;
                
                //if the front is set to -1 then set it to 0.
                if(front == -1){
                    front = 0;
                }
                
                //if everything goes fine then return true.
                return true;
            }
        }catch(e){
            return e.name + ": " + e.message;
        }  
    }
    
    //remove the element
    //if the queue is empty then throw the error - queue is empty
    function dequeue(){
        try{
            if(isEmpty()){
                throw new Error("Circular Queue is Empty");
            }else{
            	//chache th value to an element..
                var el = cQueue[front];
                
                //change the value to undefined
                cQueue[front] = undefined;
                
                //set a new size
                size = size - 1;
                
                if(isEmpty()){
                    //queue is empty
                    front = rear = -1;
                }else{
                    front = (front + 1) % max;
                }
                
                return el;
            }
        }catch(e){
            return e.name + ": " + e.message;
        }
    }
    
    //check if the circular queue is empty
    function isEmpty(){
        return size == 0;
    }
    
    //get the value of the rear index
    function getRear(){
        return rear;
    }
    
    //get the value of the front counter.
    function getFront(){
        return front;
    }
    
    //get the queue as an array
    function getQueueArray(){
    	//get the actual array and return the array
    	return _convertQueuToArray();
    }
    
    //get the queue as string
    function getQueueString(){
    	return _convertQueuToArray().join(",");
    }
    
    //convert the queue to a meaningful queue - private
    function _convertQueuToArray(){
    	//create a variable to hold the queue
    	var arrayQueue = [],
    		i = 0,
    		j = 0;
    	
    	//logic to crate an array queue.
    	for(; i < max; i++){
    		if(cQueue[i] != undefined){
    			arrayQueue[j] = cQueue[i];
    			j++;
    		}
    	}
    	
    	//return the array
    	return arrayQueue;
    }
    
    //clear the queue
    function clear(){
    	//make size as 0
    	size = 0;
    	
    	//make pointers to -1
    	front = -1;
    	rear = -1;
    	
    	//make all the value to undefined
    	for(var i = 0; i < max; i++){
    		if(cQueue[i] != undefined){
    			cQueue[i] = undefined;
    		}
    	}
    	
    	return true;
    }
    
    return {
        enqueue: enqueue,
        dequeue: dequeue,
        isEmpty: isEmpty,
        getRear: getRear,
        getFront: getFront,
        getQueueArray: getQueueArray,
        getQueueString: getQueueString,
        clear: clear
    }
};

//======================================================================================================
//Priority Queue: 
//Queue that contains items that have some preset priority. 
//When an element has to be removed, the item with the highest priority is removed first
//The item with the highest priority is always the next to be removed from the queue.  
//(Highest Priority In, First Out: HPIFO)
//======================================================================================================
BUNNY.DS.priorityQueue = function(){
	//pQueue is an array of objects
	//each object will have an element and a priority
	//[{element: "", priority: 1}]
	//priority 1 > priority 5
    var pQueue = [];
    
    //get the length of the priority queue
    function size(){
    	return pQueue.length;
    }
    
    //check if the priority queue was empty or not
    //true - empty
    //false - not empty
    function isEmpty(){
    	if(pQueue){
    		return false;
    	}else{
    		return true;
    	}
    }
    
    /**
     * @name enqueue
	 * @param {Object} o
	 * @param {Object} p
     */
    function enqueue(o, p){
    	try{
    		if(typeof p == "number"){
    			throw new Error("Priority is not an integer");
    		}
    		if(typeof o == undefined || o == null){
    			throw new Error("Element is empty");
    		}
    		
    		//push the object in the priority queue.
    		pQueue.push({element: o, priprity: p});
    		
    		//return the size - will be helpful for unit test
    		return size();
    	}catch(e){
    		//return the error details
    		return e.name + ": " + e.message;
    	}
    }
    
    function dequeue(){
    	try{
    		if(isEmpty()){
    			throw new Error("Priority Queue is Empty.");
    		}else{
    			//check for the least priority in the queue 
    			//and then remove it from the array.
    			var code = pQueue[0].priority;
    			pQueue.forEach(function(v,i){
    				if(v["priority"] < code){
    					code = i;
    				}
    			});
    			return pQueue.splice(code, 1);
    		}
    	}catch(e){
    		return e.name + ": " + e.message;
    	}
    }
    
    
    return {
    	enqueue: enqueue,
    	clear: clear,
    	size: size,
    	isEmpty: isEmpty,
    	dequeue: dequeue,
    	getQueueArray: getQueueArray,
    	getQueueString: getQueueString
    };
};

//======================================================================================================
//Dequeue (Double Ended queue): 
//Insertion and Deletion occur at both the ends i.e. front and rear of the queue.
//======================================================================================================
BUNNY.DS.deQueue = function(){
    var dQueue = [];
    
    //pop out the value from the rear
    function popBack(){
    	try{
    		//check if the queue is empty
    		if(isEmpty()){
    			//if the queue is empty then throw an error.
    			throw new Error("The Double Ended queue is Empty.")
    		}else{
    			//else return the popped value.
    			return dQueue.pop();
    		}
    	}catch(e){
    		//return the error details
    		return e.name + ": " + e.message;
    	}
    }
    
    //push the value in the double ended queue from the back
    function pushBack(o){
    	dQueue.push(o);
    	
    	return{
    		pos: size() - 1,
    		size: size()
    	};
    }
    
    //pop the value from the front
    function popFront(){
    	try{
    		//check if the queue is empty
    		if(isEmpty()){
    			//if the queue is empty then throw an error.
    			throw new Error("The Double Ended queue is Empty.")
    		}else{
    			//else return the popped value.
    			return dQueue.shift();
    		}
    	}catch(e){
    		//return the error details
    		return e.name + ": " + e.message;
    	}
    }
    
    //push the value from the front
    function pushFront(o){
    	dQueue.unshift(o);
    	
    	return{
    		pos: 0,
    		size: size()
    	};
    }
    
    //check if the queue is empty
    function isEmpty(){
    	return size() == 0;
    }
    
    //get size of the queue
    function size(){
    	return dQueue.length;
    }
    
    //get the queue as an array
    function getQueueArray(){
    	return dQueue;
    }
    
    //get the queue as a string
    function getQueueString(){
    	return dQueue.join(",");
    }
    
    //clear the queue
    function clear(){
    	dQueue.length = 0;
    	return true;
    }
    
    return {
    	dequeueBack: popBack,
    	enqueueBack: pushBack,
    	dequeueFront: popFront,
    	enqueueFront: pushFront,
    	getQueueArray: getQueueArray,
    	getQueueString: getQueueString,
    	isEmpty: isEmpty,
    	size: size,
    	clear: clear
    };
};


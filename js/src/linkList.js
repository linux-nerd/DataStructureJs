/**
 * @author abhishek
 * implementation of Link List.
 */

//==================================================================================================
//Implementation of simple link list in javascript
//==================================================================================================
BUNNY.DS.linkList = function(){
	var len = 0,
		head = null;
		
	//create some utility private functions under util namespace.
	var util = {};
	
	//utility function to get the head of the list.
	util.getHead = function(){
		return head;
	};
	
	//utility function to check if the head is null or not.
	util.isNull = function(){
		if (util.getHead() === null)
			return true;
		else
			return false;
	};
	
	//utility function to get the length of the list.
	util.size = function(){
		return len;
	};
	
	//utility function to find is the list is empty
	util.isEmpty = function(){
		return util.size() == 0;
	};
	
	//utility function to find the particular item in the list
	util.search = function(findData){
		var isThere=false, 
			prevNode = null, 
			nextNode, 
			position=0, 
			current, 
			index;
			
		//check if the list is empty
		if(util.isNull()){
			isThere = false;
		}else{
			
			//if the list is not empty
			current = head;
			index = 0;
			
			while(current.next){
				index++;
				if(current.data == findData){
					isThere = true;
					position = index;
					nextNode = current.next;
					break;
				}
				
				prevNode = current;
				current = current.next;
			}
			
			//this is a fix for the last data
			if(! isThere){
				index++;
				if(current.data == findData){
					isThere = true;
					position = index;
					nextNode = current.next;
				}
			}
		}
		
		//after the search operation
		/*
		|-return an object depending on the search result
		|-if the data is found in the ll then the object containing the search result of true, previous node,
		|-next node and the position of the data is returned
		|-else only search result of false is returned
		*/
		
		if(isThere){
			return{
				isThere: isThere,
				prev: prevNode,
				current: current,
				next: nextNode,
				pos: position 
			};
		}
		else{
			return{
				isThere: isThere
			};
		}
	}//end of search function
	
	
	
	/**
	 * @name addLast
	 * it adds the value to the end of the link list
 	 * @param {Object} o
	 */	
	function addLast(o){
		//create a node
		var node = BUNNY.DS.util.makeNode(),
			current;
			
		//add data to the node
		node.data = o;
		
		//when the list is empty, i.e., adding an item to the empty list.
		if(util.isNull()){
			head = node
		}else{
			current = head;
			
			//then get to the last node by traversing through the list.
			while(current.next){
				current = current.next;
			}
			
			//add the data at the end of the list
			node.prev = current;
			current.next = node;
		}
		//update the size of the list
		len++;
	}//end of addLast function
	
	
	/**
	 * @name addFirst
	 * it adds the value to the front of the link list
 	 * @param {Object} o
	 */
	function addFirst(o){
		var node = BUNNY.DS.util.makeNode();
		
		//add item to the data property of the created node
		node.data = o;
		
		//when the list is empty, i.e., adding an item to the empty list.
		if(util.isNull()){
			head = node
		}else{
			node.next = head;
			head.prev = node;
			head = node;
		}
		
		//update the length of the list
		len++;
	} //end of addFirst function
	
	
	/**
	 * @name addAfter
	 * it adds the value after some item(oAfter) of the link list
	 * @param {Object} oAfter
	 * @param {Object} o
	 */
	function addAfter(oAfter, o){
		var searchResult = util.search(oAfter);
		
		//check if the search is successful
		if(searchResult.isThere){
			//create a node
			var node = BUNNY.DS.util.makeNode();
			
			node.data = o;
			node.next = searchResult.current.next;
			node.prev = searchResult.current;
			searchResult.current.next = node;
			searchResult.next.prev = node;
			
			len++;
			return true;
		}else{
			return false;
		}
		
	}// end of AddBefore function
	
	
	/**
	 * @name addBefore
	 * it adds the value before some item(oBefore) of the link list
	 * @param {Object} oBefore
	 * @param {Object} o
	 */
	function addBefore(oBefore, o){
		var searchResult = util.search(oBefore);
		
		if(searchResult.isThere){
			var node = BUNNY.DS.util.makeNode();
			
			node.data = o;
			node.next = searchResult.current;
			node.prev = searchResult.prev;
			searchResult.current.prev = node;
			searchResult.prev.next = node;
			
			
			len++;
			
			return true;
		}else{
			return false;
		}
	} // end of AddBefore function
	
	
	/**
	 * @name removeFirst
	 * it removes the item from the top 
	 * and returns the actual data that item contains
	 */
	function removeFirst(){
		try{
			if(util.isEmpty()){
				throw new Error("The linked list is empty.");
			}else{
				var current = head, currData;
				head = head.next;
				
				head.prev = null;
				current.next = null;
				
				currData = current.data;
				
				delete current;
				
				//update the size of the list
				len--;
				
				return currData;
			}
		}catch(e){
			return e.name + ": " + e.message;
		}
	}//end of removeFirst function
	
	
	
	/**
	 * @name removeLast
	 * it removes the item from the end 
	 * and returns the actual data that item contains
	 */
	function removeLast(){
		try{
			if(util.isEmpty()){
				throw new Error("The linked list is empty.");
			}else{
				var current = head.next,
					prev = head,
					currData;
					
				while(current.next){
					current = current.next;
					prev = prev.next
				}
				
				//prev - > second last element.
				//current - >last element.
				currData = current.data;
				
				current.prev = null;
				prev.next = null;
				
				delete current;
				
				//update size of the list
				len--;
				
				return currData;
			}
			
		}catch(e){
			return e.name + ": " + e.message;
		}
	}//end of removeLast function
	
	
	function removeAfter(oAfter){
		try{
			if(util.isEmpty()){
				throw new Error("The linked list is empty.");
			}else{
				var searchResult = util.search(oAfter);
				
				if(searchResult.isThere){
					if(searchResult.next === null){
						throw new Error("No item exists after " + oAfter + " node.");
					}
					var current = searchResult.next,
						currData = current.data;
						
					// TODO: an update is needed if the deleted item is the last item in the list -  check for null
					searchResult.current.next = searchResult.next.next;
					searchResult.next.next.prev = searchResult.current;
					
					searchResult.next.next = null;
					searchResult.next.prev = null;
					
					delete searchResult.next;
					
					len--;
					
					return currData;
				}else{
					throw new Error("Item not found in the List.");
				}
			}
		}catch(e){
			return e.name + ": " + e.message;
		}
		
	}//end of removeLast function
	
	
	function removeBefore(oBefore){
		try{
			if(util.isEmpty()){
				throw new Error("The linked list is empty.");
			}else{
				var searchResult = util.search(oBefore);
				
				if(searchResult.isThere){
					if(searchResult.prev === null){
						throw new Error("There is no item before the searched, " + oBefore + ", node");
					}
					
					var current = searchResult.prev,
						currData = current.data;
						
					if(searchResult.prev.prev === null){
						// item to be removed is the first item in the list
						searchResult.current.prev = null;
						//searchResult.prev.next = null;
					}
					else{
						searchResult.prev.prev.next = searchResult.current;
						searchResult.current.prev = searchResult.prev.prev;
					}
					
					
					searchResult.prev.next = null;
					searchResult.prev.prev = null;
					
					//delete searchResult.prev;
					
					len--;
					
					return currData;
						
				}else{
					throw new Error("Item not found in the List.");
				}
			}
		}catch(e){
			return e.name + ": " + e.message;
		}
	}//end of removeBefore function
	
	
	//expose the public methods
	return {
		addLast: addLast,
		addFirst: addFirst,
		addAfter: addAfter,
		addBefore: addBefore,
		size: util.size,
		getHead: util.getHead,
		isListNull: util.isNull,
		isEmpty: util.isEmpty,
		removeFirst: removeFirst,
		removeLast: removeLast,
		removeAfter: removeAfter,
		removeBefore: removeBefore
		
	};
};

/**
 * @author abhishek
 * implementation of Binary Search Tree.
 */

//==================================================================================================
//Implementation of binary serach tree in javascript
//==================================================================================================
BUNNY.DS.binarySearchTree = function(){
	
	//private variables for node, length and root
	var node, len = 0, root, util = {};
	
	//helper method to chech is the BST is empty
	util.isEmpty = function(){
		if(len == 0){
			return true;
		}else{
			return false; 
		}
	};
	
	//helper method to get the size of the BST
	util.size = function(){
		return len;
	};
	
	//helper method to get the node of the BST
	util.getNode = function(){
		return node;
	};
	
	//helper method to find if the searched value is there in the BST
	util.contains = function(o){
		try{
			var returnObj = {};
			
			if(!util.isEmpty()){
				throw new Error("The BST is empty.");
			}else{
				var found = false, current = root, parentNode = null;
				
				while(!found && current){
					if(o < current.data){
						//go left
						parentNode = current;
						current = current.left;
					}else if(o > current.data){
						//go right
						parentNode = current;
						current = current.right;
					}else{
						returnObj.result = true;
						returnObj.currentNode = current;
						returnObj.parentNode = parentNode;
						found = true;
					}
				}
			}
		}catch(e){
			returnObj.name = e.name;
			returnObj.message = e.message;
			returnObj.result = false;
		}finally{
			return returnObj;
		}
	}
	
	
	
	// add the data to the BST
	function add(o){
		
		try{
			var createNode = BUNNY.DS.util.makeBSTNode(),
				current;
			
			//add o to the node data.
			createNode.data = o;
			
			//if the BST is empty then assign the root to the node;
			if(util.isEmpty()){
				root = createNode;
			}else if(util.contains(o).result){
				throw new Error("The value is already added in the BST.");
			}else{
				current = node;
				
				//this goes into infinite loop as 1 is always true
				while(1){
					//if the new value is less than the node value 
					if(o < current.data){
						//if left is null
						if(current.left === null){
							current.left = createNode;
							len++;
							break;
						}else{
							current = current.left;
						}
					}else if(o > current.data){
						if(current.right === null){
							current.right = createNode;
							len++;
							break;
						}else{
							current = current.right;
						}
					}else{
						break;
					}
				}
			}catch(e){
				return e.name + ": " + e.message; 
			}
		}
	}
	
	
	//remove the element from the BST
	function remove(o){
		try{
			//first check if the element is there in the BST
			var isThere = util.contains(o);
			
			//check if the BST is empty
			if(util.isEmpty()){
				throw new Error("The BST is empty.");
			}
			
			//check if the element is there in the BST.
			if(isThere.result){
				// TODO: 
				
				if(isThere.currentNode.left == null && isThere.currentNode.right == null){
					//1. is a leaf
					//simply remove the leaf node
					if(o < isThere.parentNode){
						isThere.parentNode.left = null;
					}else if(o > isThere.parentNode){
						isThere.parentNode.right = null;
					}
					
					delete isThere.currentNode
					len--;
					
					return true;
					
				}else if(isThere.currentNode.left != null && isThere.currentNode.right != null){
					//2. has two children.
				}else if(isThere.parentNode == null){
					//3. is the root node.
				}else{
					//4. has only one child;
				}
				
				
				
			}else{
				throw new Error("Item not found in the BST.");
			}
		}catch(e){
			return e.name + ": " + e.message; 
		}
		
	}
	
	
	return{
		isEmpty: util.isEmpty,
		size: util.size,
		getNode: util.getNode,
		add: add,
		remove: remove
	};
};
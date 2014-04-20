/**
 * @author abhishek
 * implementation of Dictionary.
 *
 * Using Object
 */

BUNNY.DS.dictionary = function() {

	//create variables
	var dict = {}, len = 0;
	
	function isEmpty(){
		if(len){
			return false;
		}else{
			return true;
		}
	}
	
	function size(){
		return len;
	}
	
	function clear(){
		Object.keys(dict).sort().forEach(function(v, i) {
			delete dict[v];
		});
		len = 0;
	}
	
	//add method to add the record to the dictionary
	function add(key, value) {
		dict[key] = value;
		len++;
	}

	//find method to get the record
	function find(key) {
		return dict[key];
	}

	//remove function to remove a record
	function remove(key) {
		try{
			if(isEmpty()){
				throw new Error("Dictionary is Empty.");
			}else if(typeof find(key) == "undefined"){
				throw new Error("Record is not there in the Dictionary");
			}else{
				delete dict[key];
				len--;
			}
		}catch(e){
			return e.name + ": " + e.message;
		}
		
	}

	//getDictionary method to return the array of objects - > here object is the key value pair
	function getDictionary() {
		var returnArray = [];
		
		Object.keys(dict).sort().forEach(function(v, i) {
			returnArray.push({
				key : v,
				value : dict[v]
			});
		});

		//this will return the sorted array
		return returnArray;
	}
	
	return{
		add: add,
		remove: remove,
		find: find,
		getDictionary: getDictionary,
		size: size,
		isEmpty: isEmpty,
		clear: clear
	}

};


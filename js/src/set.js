/**
 * @author abhishek
 * implementation of Set.
 *
 * Using Array
 */

BUNNY.DS.set = function(){
	var setArr = [];
	
	//utility for checking if the value is there in the setArr array
	function find(o){
		if(setArr.indexOf(o) < 0){
			return {found: false, pos: -1};
		}else{
			return {found: true, pos: setArr.indexOf(o)};
		}
	}
	
	//utility for checking if the set is empty
	function isEmpty(){
		if(setArr.length){
			return false;
		}else{
			return true;
		}
	}
	
	//utility for getting the entire set
	function getSetArray(){
		return setArr;
	}
	
	//get size of the set
	function size(){
		return setArr.length;
	}
	
	function clear(){
		setArr.forEach(function(v,i){
			delete setArr[i];
		});
		setArr.length = 0;
	}
	
	//function add to add the record in the set.
	function add(o){
		try{
			if(find(o).found){
				throw new Error("Element already in the Set.");
			}else{
				setArr.push(o);
				return true;
			}
		}catch(e){
			return e.name + ": " + e.message;
		}
		
	}
	
	//remove function to remove the element from the set
	function remove(o){
		try{
			var isThere = find(o);
			if(isThere.found){
				setArr.splice(isThere.pos, 1);
				return true;
			}else{
				throw new Error("Element not found in the Set.");
			}
		}catch(e){
			return e.name + ": " + e.message;
		}
		
	}
	
	//union function
	function union(setForUnion){
		var tempSet = BUNNY.DS.set();
		setArr.forEach(function(v,i){
			tempSet.add(v);
		});
		
		setForUnion.getSetArray().forEach(function(v,i){
			if(!find(v).found){
				tempSet.add(v);
			}
		});
		
		return tempSet;
	}
	
	//intersection function
	function intersection(setForIntersection){
		var tempSet = BUNNY.DS.set();
		var arrOfArg = setForIntersection.getSetArray();
		
		arrOfArg.forEach(function(v,i){
			if(find(v).found){
				tempSet.add(v);
			}
		});
		
		return tempSet;
	}
	
	//subset function
	function subset(setForSubset){
		var flag = true;
		//setForSubset is a superset
		if(size() > setForSubset.size()){
			return false;
		}else{
			setArr.forEach(function(v,i){
				if(!setForSubset.find(v).found){
					flag = false;
					
				}
			});
		}
		if(flag){
			return true;
		}else{
			return false;
		}
		
	}
	
	//difference function
	function difference(setForDiff){
		var tempSet = BUNNY.DS.set();
		
		setArr.forEach(function(v,i){
			if(!setForDiff.find(v).found){
				tempSet.add(v);
			}
		});
		
		return tempSet;
	}
	
	return{
		isEmpty: isEmpty,
		size: size,
		add: add,
		remove: remove,
		getSetArray: getSetArray,
		clear: clear,
		union: union,
		intersection: intersection,
		subset: subset,
		difference: difference,
		find: find
	}
};

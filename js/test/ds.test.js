//=====================================================================================================
//test suite for stack
//=====================================================================================================
test("Stack Functionality", function(){
    
    //create stack object.
    var stack = BUNNY.DS.stack();
    
    //test if the stack is empty
    equal(stack.isEmpty(), true, "The stack is Empty");
    
    //test for top operation when the stack is empty.
    equal(stack.top(), "Error: Cannot get the top value from the stack, since the stack is empty.", "Top Operation on an empty stack throws an error.");
    
    //test for pop operation when the stack is empty
    equal(stack.pop(), "Error: Cannot pop the value from the stack, since the stack is empty.", "Pop operation on an empty stack throws an Error.")
    
    
    //test for push one value to the stack
    equal(stack.push("one"), stack.size(), "First value is added to the stack.");
    
    //check if the stack is empty now
    equal(stack.isEmpty(), false, "The stack is not Empty");
    
    //check the size of the stack
    equal(stack.size(), 1, "The size of the stack is 1");
    
    //add second value to the stack
    equal(stack.push("second"), stack.size(), "Second value is added to the stack");
    
    //get the new stack size
    equal(stack.size(), 2, "The new size of the stack, after the second push operation, is 2");
    
    //get the value of the top
    equal(stack.top(), "second", "Top value is 'second'");
    
    //pop out the value from- the stack
    equal(stack.pop(), "second", "The value is popped out from the stack.")
    
    //get the new stack size
    equal(stack.size(), 1, "The new size of the stack, after the pop operation, is 1");
    
    //add two more values to the stack
    stack.push("third");
    stack.push("fourth");
    
    //get the stack as an array
    deepEqual(stack.getStackArray(), ["one", "third", "fourth"], "Getting the value as the array");
    
    //get the stack as string
    equal(stack.getStackString(), "one,third,fourth", "Getting the stack as string");
    
    //test to clear the stack
    equal(stack.clear(), 0, "The stack got cleared.");
    
});

//=====================================================================================================
//test suite for simple queue
//=====================================================================================================
test("Simple Queue Functionality", function(){
    //create queue object.
    var queue = BUNNY.DS.queue();
    
    //test if the queue is empty
    equal(queue.isEmpty(), true, "The queue is empty.");
    
    //test for the excepton - when top of an empty queue is called.
    equal(queue.top(), "Error: Cannot get the value of top of the Queue, since the queue is empty.", "When top of an Empty Queue is called. It throws an exception.");
    
    //test for dequeue excepton - when the queue is empty.
    equal(queue.dequeue(), "Error: Cannot dequeue from the rear of the Queue, since the queue is empty.", "When dequeue of an Empty Queue is called. It throws an exception.");
    
    //get the empty queue as an string
    equal(queue.getQueueString(), "", "The string queue - \"\" -  is returned.");
    
    //get the empty queue as an array
    deepEqual(queue.getQueueArray(), [], "The array queue - [] - is returned.");
    
    //add one value to the queue
    equal(queue.enqueue("q1"), queue.size(), "First item (q1) inserted to the queue.");
    
    //add second value to the queue
    equal(queue.enqueue("q2"), queue.size(), "First item (q2) inserted to the queue.");
    
    //check if the queue is empty
    equal(queue.isEmpty(), false, "The queue is not empty.");
    
    //get the size of the queue
    equal(queue.size(), 2, "Size of the queue is 2.");
    
    //get the queue as an string
    equal(queue.getQueueString(), "q2,q1", "The string queue - q2,q1 -  is returned.");
    
    //get the queue as an array
    deepEqual(queue.getQueueArray(), ["q2", "q1"], "The array queue - [q2,q1] - is returned.");
    
    //get the top of th queue
    equal(queue.top(), "q1", "Got the top value of the queue.");
    
    //remove item from the queue
    equal(queue.dequeue(), "q1", "The value removed is q1");
    
    //new size of the queue
    equal(queue.size(), 1, "Size of the queue is 1.");
    
    //clear the queue
    equal(queue.clear(), 0, "The queue got cleared.");
});

//=====================================================================================================
//test suite for circular queue
//=====================================================================================================
test("Circular Queue Functionality", function(){
    var cQueue = BUNNY.DS.circularQueue(5);
    
    //test if the circular queue is empty
    equal(cQueue.isEmpty(), true, "The created circular queue is empty");
    
    //test for dequeue operation on an empty queue
    equal(cQueue.dequeue(), "Error: Circular Queue is Empty", "Dequeue Operaion on circular queue will throw an error.");
    
    //test to enqueue a value in the circular queue
    equal(cQueue.enqueue(1), true, "The value - 1 - is added to the circular queue.");
    
    //check for the emptiness of the circular queue
    equal(cQueue.isEmpty(), false, "The circular queue is not empty");
    
    //check thee value of rear
    equal(cQueue.getRear(), 1, "the value of rear is 1.");
    
    equal(cQueue.getFront(), 0, "the value of front is 0.");
    
    //dequeue
    equal(cQueue.dequeue(), 1, "The item removed is 1.");
    
    //check for emptiness
    equal(cQueue.isEmpty(), true, "The circular Queue is Empty");
    
    //check thee value of rear
    equal(cQueue.getRear(), -1, "the value of rear is -1.");
    
    equal(cQueue.getFront(), -1, "the value of front is -1.");
    
    //add three values to the circular queue
    cQueue.enqueue("one");
    cQueue.enqueue("two");
    cQueue.enqueue("three");
    
    //check for the front and rear values
    equal(cQueue.getRear(), 3, "The value of the rear is 3");
    equal(cQueue.getFront(), 0, "The value of front is 0.");
    
    //remove one value from queue.
    equal(cQueue.dequeue(), "one", "The value removed is \"one\".");
    
    //check for the front and rear values
    equal(cQueue.getRear(), 3, "The value of the rear is 3");
    equal(cQueue.getFront(), 1, "The value of front is 1.");
    
    //get the queue as an array
    deepEqual(cQueue.getQueueArray(), ["two","three"], "The queue retured an array");
    
    //get the queue as string
    equal(cQueue.getQueueString(), "two,three", "the returned as string.");
    
    //add three more values to the queue
    cQueue.enqueue(4);
    cQueue.enqueue(5);
    cQueue.enqueue(6);
    
    //check for the quere array returned.
    deepEqual(cQueue.getQueueArray(), [6,"two","three",4,5], "The queue retured an array");
    
    equal(cQueue.enqueue(6), "Error: Circular Queue is Full", "The circular queue is full. The error is thrown.");
    
    //since the queue is full, check for the rear value and front value.
    equal(cQueue.getRear(), 1, "The value of the rear is 1");
    equal(cQueue.getFront(), 1, "The value of front is 1.");
    
    //delete 4 values from the queue
    cQueue.dequeue();
    cQueue.dequeue();
    cQueue.dequeue();
    cQueue.dequeue();
    
    //now check for the rear and front value
    equal(cQueue.getRear(), 1, "The value of the rear is 1");
    equal(cQueue.getFront(), 0, "The value of front is 0.");
    
    //delete one more value and check the front value and rear value
    cQueue.dequeue();
    equal(cQueue.getFront(), -1, "The value of front is -1, since the queue is now empty.");
    equal(cQueue.getRear(), -1, "The value of front is -1, since the queue is now empty.");
    
    //check if the queue is empty
    equal(cQueue.isEmpty(), true, "The circular queue is empty.");
    
    //check for the queue empty error
    equal(cQueue.dequeue(), "Error: Circular Queue is Empty", "The circular queue is empty. So the dequeue operation will throw error.")
});

//=====================================================================================================
//test suite for Deouble Ended queue
//=====================================================================================================
test("Double Ended Queue Functionality", function(){
	//create an object of Double Ended Queue Type
	
	var dQueue = BUNNY.DS.deQueue();
	
	//check if the object created is empty
	equal(dQueue.isEmpty(), true, "The created Double Ended Queue Object is empty.");
	
	//test for exception
	//1. dequeue from the front
	equal(dQueue.dequeueFront(), "Error: The Double Ended queue is Empty.", "dequeueFront Operation on Empty DE-Queue will throw Error.");
	
	//2. dequeue from the back
	equal(dQueue.dequeueBack(), "Error: The Double Ended queue is Empty.", "dequeueBack Operation on Empty DE-Queue will throw Error.");
	
	//test for size of the queue
	equal(dQueue.size(), 0, "The created Double Ended Queue has a size of 0.");
	
	//add an item to the rear of the queue -> []
	equal(dQueue.enqueueBack("first").pos, 0, "Item added at position 0 - from Rear");
	
	//add an item to the rear of the queue -> ["first"]
	equal(dQueue.enqueueBack("second").pos, 1, "Item added at position 1 - from Rear");
	
	//add an item to the back of the queue -> ["first", "second"]
	equal(dQueue.enqueueFront("third").pos, 0, "Item added at position 0 - from Front");
	
	//new queue -> ["third","first","second"]
	//get the queue as an array
	deepEqual(dQueue.getQueueArray(), ["third","first","second"], "The DE-Queue is recieved as an array");
	
	//get the queue as an array
	deepEqual(dQueue.getQueueString(),"third,first,second", "The DE-Queue is recieved as a string");
	
	//get the size of the queue
	equal(dQueue.size(), 3, "The size of the queue is - 3.");
	
	//remove a value from the rear
	equal(dQueue.dequeueBack(), "second", "The removed value is - second");
	
	//remove a value from the front
	equal(dQueue.dequeueBack(), "first", "The removed value is - first");
	
	//get the length of the queue
	equal(dQueue.size(), 1, "The new size of the queue is 1");
	
	//clear the queue
	equal(dQueue.clear(), true, "The queue is cleard");
	
	//check if the queue was cleared properly by checking if its empty
	equal(dQueue.isEmpty(), true, "The queue is empty");
});

//=====================================================================================================
//test suite for simple Link List
//=====================================================================================================
test("Simple Link List Functionality", function(){
	//create an object of link list type
	var linkList = BUNNY.DS.linkList();
	
	//test for the size
	equal(linkList.size(), 0, "Newly created link list has a size of 0.");
	
	//test is the list is empty
	equal(linkList.isEmpty(), true, "Newly created link list is empty");
	
	//empty list has head as null
	equal(linkList.getHead(), null, "Empty list has a null head");
	
	//check if the list is null
	equal(linkList.isListNull(), true, "Newly created list is a null list, since the head is null.");
	
	//add the value at the end of the list
	linkList.addLast("first");
	
	//test for the size
	equal(linkList.size(), 1, "After adding data at the end of the list, it has a size of 1.");
	
	//test is the list is empty
	equal(linkList.isEmpty(), false, "After adding data at the end of the list, it is not empty");
	
	//get the head of the list
	deepEqual(linkList.getHead(), {"data": "first", "next": null, "prev": null}, "After adding data at the end of the list, head of the list retrieved");
	
	//add the value at the end of the list
	linkList.addLast("second");
	
	//get the head of the list
	//creating dummy data
	var a = {}, b = {};
	a.data = "first"; a.next = b; a.prev = null;
	b.data = "second"; b.next = null; b.prev = a;
	
	deepEqual(linkList.getHead(), a, "After adding second data at the end of the list, head of the list retrieved");
	
	//add another item at the front of the list
	linkList.addFirst("third");
	
	//dummy data
	var c = {};
	c.data = "third"; c.prev = null; c.next = a;
	a.prev = c;
	
	//get the head of the list
	deepEqual(linkList.getHead(), c, "After adding third data at the front of the list, head of the list retrieved");
	
	//add an item after "first"
	equal(linkList.addAfter("first", "fourth"), true, "New data is added to the list after 'first'. the second last item in the list.");
	
	//check the size
	equal(linkList.size(), 4, "New length of the list is 4.");
	
	//compare the head
	//dummy data formation - c,a,d,b
	var d = {};
	d.data = "fourth"; d.next = b; d.prev = a;
	a.next = d; b.prev = d; b.next = null;
	
	deepEqual(linkList.getHead(), c, "After adding fourth data after 'first', head of the list retrieved");
	
	//add an item before second
	equal(linkList.addBefore("second", "fifth"), true, "New data is added to the list, before 'second' - the last item in the list.");
	
	//check the size
	equal(linkList.size(), 5, "New length of the list is 5.");
	
	//compare the head
	//dummy data formation - c,a,d,e,b
	var e = {};
	e.data = "fifth"; e.next = b; e.prev = d;
	d.next = e; b.prev = e;
	
	deepEqual(linkList.getHead(), c, "After adding fifth data before 'second', head of the list retrieved");
	
	//add an item before fifth
	equal(linkList.addBefore("fifth", "sixth"), true, "New data is added to the list, before 'fifth' - the second last item in the list.");
	
	//check the size
	equal(linkList.size(), 6, "New length of the list is 6.");
	
	//compare the head
	//dummy data formation - c,a,d,f,e,b
	var f = {};
	f.data = "sixth"; f.next = e; f.prev = d;
	d.next = f; e.prev = f;
	
	deepEqual(linkList.getHead(), c, "After adding fifth data before 'fifth', head of the list retrieved");
	
	//tests for removal of nodes
	//remove from the front
	equal(linkList.removeFirst(), "third", "The value removed is 'third'.");
	
	//new head reference
	c.next = null; a.prev = null;
	deepEqual(linkList.getHead(), a, "new head is returned.");
	
	//new length of the link list
	equal(linkList.size(), 5, "New size after removal from front is 5.");
	
	//remove from the end
	equal(linkList.removeLast(), "second", "The value removed is 'second'.");
	
	//new head reference - a,d,f,e,b
	e.next = null; b.prev = null;
	deepEqual(linkList.getHead(), a, "new head is returned.");
	
	//new length of the link list
	equal(linkList.size(), 4, "New size after removal from front is 4.");
	
	//test for remove after
	//1. if the search value is the last item
	equal(linkList.removeAfter("fifth"), "Error: No item exists after fifth node.", "Error thrown, if remove after is applid on the last item of the list.");
	
	//2. if the search was not found
	equal(linkList.removeAfter("abcd"), "Error: Item not found in the List.", "Error thrown, if the searched item is not found in the list.");
	
	//3. remove the correct value from a,d,f,e - lets say after a. - > [a,f,e]
	equal(linkList.removeAfter("first"), "fourth", "Item removed is - 'fourth'.");
	
	//new dummydata relation
	a.next = f; f.prev = a; d.next = null; d.prev = null;
	deepEqual(linkList.getHead(), a, "new head is returned.");
	
	//get new length
	equal(linkList.size(), 3, "New size of the list is 3.");
	
	///test for removeBefore
	//1.if the searched node is the first node;
	equal(linkList.removeBefore("first"), "Error: There is no item before the searched, first, node", "Error thrown, when the searched node is the first item in the list.");
	
	//2. if the searched item is not found
	equal(linkList.removeBefore("abcd"), "Error: Item not found in the List.", "Error thrown, if the searched item is not found in the list.");
	
	//3. remove the correct value from a,f,e - lets say before f . - > [f,e]
	equal(linkList.removeBefore("sixth"), "first", "Item removed is 'first'.");
	
	//new dummmy data relation
	a.next = null; f.prev = null; 
	
	deepEqual(linkList.getHead(), f, "New head is retrieved");
	
});

//=====================================================================================================
//test suite for Binary Search Tree
//=====================================================================================================
test("Binary Search Tree Functionality", function(){
	var bst = BUNNY.DS.binarySearchTree();
	
	//test for the size
	equal(bst.size(), 0, "Newly created BST has a size of 0.");
	
	//test is the bst is empty
	equal(bst.isEmpty(), true, "Newly created BST is empty");
	
	//empty list has head as null
	equal(bst.getNode(), null, "Empty BST has a null node");
	
	//add 1st node to the BST
	bst.add(5);
	//test for the size
	equal(bst.size(), 1, "Newly created BST has a size of 1.");
	
	//add another node to the tree
	bst.add(3);
	bst.add(7);
	bst.add(4);
	bst.add(2);
	bst.add(9);
	
	//create the dummy data
	var d1 = {},
		d2 = {},
		d3 = {},
		d4 = {},
		d5 = {},
		d6 = {};
	d1.data = 5; d2.data = 3; d3.data = 7; d4.data = 4; d5.data = 2; d6.data = 9;
	d1.left = d2; d1.right = d3; d2.right = d4; d2.left = d5; d3.right = d6;
	d5.left = null; d5.right = null; d4.left = null; d4.right = null; d3.left = null; d6.left = null; d6.right = null;
	//get size of the tree
	equal(bst.size(), 6, "After adding 6 nodes, BST has a size of 6.");
	
	//empty list has head as null
	deepEqual(bst.getNode(), d1, "New BST constructed.");
	
	//remove node with data 9
	bst.remove(2);
	
	//update the dummy
	d2.left = null;
	//get size of the tree
	equal(bst.size(), 5, "After adding 6 nodes, BST has a size of 5.");
	
	//empty list has head as null
	deepEqual(bst.getNode(), d1, "New BST constructed.");
	
	//delete node 7
	bst.remove(7);
	
	//update dummy data
	d1.right = d6;
	
	//check size
	equal(bst.size(), 4, "After adding 6 nodes, BST has a size of 4.");
	
	deepEqual(bst.getNode(), d1, "New BST constructed.");
	
	equal(bst.remove(234), "Error: Item not found in the BST.", "Error when trying to delete something not present in the BST.");
});

const DoublyLinkedList = require('./DoublyLinkedList');

const myList = new DoublyLinkedList();

myList.push(33);
myList.push("k");
myList.push(40);

console.log("Doubly Linked List:", myList);

console.log("Doubly Linked List:", myList);


console.log("Pop:", myList.pop());
console.log("Doubly Linked List after pop:", myList);
console.log("***********************************************");


myList.unshift(5);
console.log("Doubly Linked List after unshift:", myList);
console.log("***********************************************");


console.log("Get at index 1:", myList.get(1));
console.log("***********************************************");


console.log("Set value at index 1:", myList.set(1, 15));
console.log("Doubly Linked List after set:", myList);
console.log("***********************************************");


console.log("Insert at index 1:", myList.insert(1, 25));
console.log("Doubly Linked List after insert:", myList);
console.log("***********************************************");


console.log("Remove at index 2:", myList.remove(2));
console.log("Doubly Linked List after remove:", myList);
console.log("The End :))");

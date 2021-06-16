// which is doubly linked list node. since it has previous node. 
// doubly linked list allows us to iterate forward and backward

const numbers = new LinkedList<number>();
for (let i = 0; i < 10; i++) {
    numbers.addHead(i);
}
console.log(numbers.traverse());
numbers.deleteNode(8);
numbers.deleteNode(5);
numbers.deleteNode(11);
console.log(numbers.traverse());
console.log(numbers.getSize());

const sortedList = new SortedLinkedList<number>();

[4,6,7,8,4,3,9].forEach((i) => sortedList.addItem(i));
console.log(sortedList.traverse());
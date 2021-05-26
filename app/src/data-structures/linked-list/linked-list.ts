// // which is doubly linked list node. since it has previous node. 
// // doubly linked list allows us to iterate forward and backward
// class LinkedListNode<T> {
//     public next : LinkedListNode<T> | null = null;
//     public previous : LinkedListNode<T> | null = null;
//     constructor(public data: T) {}
// }
// interface ILinkedList<T> {
//     addHead(data: T): LinkedListNode<T>;
//     addTail(data: T): LinkedListNode<T>;
//     deleteNode(data: T): void;
//     traverse(): T[];
//     search(comparator: (data: T) => boolean): LinkedListNode<T> | null;
// }

// class LinkedList<T> implements ILinkedList<T> {
//     private head: LinkedListNode<T>;
//     private tail: LinkedListNode<T>;
//     private _size: number = 0;
//     search(comparator: (data: T) => boolean): LinkedListNode<T> {
//         const checkNext = (node: LinkedListNode<T>): LinkedListNode<T> | null => {
//             if(comparator(node.data)) return node;
//             return node.next ? checkNext(node.next) : null;
//         }
//         return this.head ? checkNext(this.head) : null;
//     }
//     traverse(): T[] {
//         const array: T[] = [];
//         if(!this.head) return array;
//         const toArray = (node: LinkedListNode<T>): T[] => {
//             array.push(node.data);
//             return node.next ? toArray(node.next) : array;
//         }
//         return toArray(this.head);
//     }
//     getSize(): number {
//         return this._size;
//     }
//     getTail(): LinkedListNode<T> {
//         return this.tail;
//     }
//     addHead(data: T): LinkedListNode<T> {
//         const newNode = new LinkedListNode(data);
//         if(!this.head) {
//             this.head = newNode;
//         } else {
//             this.head.previous = newNode;
//             newNode.next = this.head;
//             this.head = newNode;
//         }
//         this._size++;
//         return newNode;
//     }
//     addTail(data: T): LinkedListNode<T> {
//         const newNode = new LinkedListNode(data);
//         const tail = this.tail ?? this.head;
//         tail.next = newNode;
//         newNode.previous = tail;
//         this._size++;
//         return newNode;
//     }
//     deleteNode(data: T): void {
//         // if the node has not previous node which means it's a head
//         // so the head's next node will be the new head ;)
//         // has complexity of O(n)
//         const node = this.search((d) => data === d);
//         if(!node) return;
//         if (!node.previous) {
//             this.head = node.next;
//         } else {
//             const pr = node.previous;
//             pr.next = node.next;
//         }
//         this._size--;
//     }
// }

// const numbers = new LinkedList<number>();
// for (let i = 0; i < 10; i++) {
//     numbers.addHead(i);
// }
// console.log(numbers.traverse());
// numbers.deleteNode(8);
// numbers.deleteNode(5);
// numbers.deleteNode(11);
// console.log(numbers.traverse());
// console.log(numbers.getSize());

// class SortedLinkedList<T>  {
//     private _head: LinkedListNode<T>;
//     addItem(data: T) {
//        const newNode = new LinkedListNode(data);
//        if(!this._head) {
//           this._head = newNode;
//        }
//        else {
//           // get node that is going to be previous node to the new node coming up
//         const insertBeforeNode = this._head;
//         if(typeof data === "number") {
//             while(((insertBeforeNode.data as unknown) as number - data) as number < 0) {
//                 newNode.next = insertBeforeNode;
//                 newNode.previous = insertBeforeNode.previous;
//                // insertBeforeNode.previous.next = newNode;
//                 insertBeforeNode.previous = newNode;
//             }
//         }
//        }
//     }

//     traverse(): T[] {
//         const array: T[] = [];
//         if(!this._head) return array;
//         const toArray = (node: LinkedListNode<T>): T[] => {
//             array.push(node.data);
//             return node.next ? toArray(node.next) : array;
//         }
//         return toArray(this._head);
//     }
// }

// const sortedList = new SortedLinkedList<number>();

// [4,6,7,8,4,3,9].forEach((i) => sortedList.addItem(i));
// console.log(sortedList.traverse());
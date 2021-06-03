


// reverse string with recursion
export const reverseString = (value: string[]) => {
    let i = 0;
    let c = value.slice();
    const gc = (index: number) => {
        if (index < value.length) {
            value[i] = c[(value.length - index) - 1]; index += 1;  gc(index);   
        }
    }
    gc(i);
}


export const reverseString2 = (s: string[]) => {
    const l = Math.floor(s.length/2);
    const h = (i) => {
        if (i < l) {
            let temp=s[i];
            s[i]=s[s.length-i-1];
            s[s.length-i-1]=temp;
            i += 1;
            h(i);
        }
    }
    h(0);
}




class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.next = next === undefined ? null : next;
        this.val = val === undefined ? null : val;
    }
}


const swapPairs = (head: ListNode | null) : ListNode | null  => {
    if(head === null || head.next === null) return head;
    let temp: ListNode | null = swapPairs(head.next.next); // skip head
    let nextNode: ListNode = head.next;
    nextNode.next = head;
    head.next = temp;
    return nextNode
}


const reverseLinkedList = (head: ListNode | null) : ListNode | null  => {
    var prev: ListNode = null;
    var curr: ListNode = head;
    
    while (curr !== null) {
        var tmp: ListNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = tmp;
    }
    return prev;
}


class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null ) {
        this.val = val === undefined ? null : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}



const searchFromBinaryTree = (root: TreeNode | null, val: number): TreeNode | null => {
    if (root === null || root.val === null) return root;
    if (root.val === val) return root;
    return root.val < val ? searchFromBinaryTree(root.right, val) : searchFromBinaryTree(root.left, val);
 }
// Recurrence Relation
// - > the result of a problem and the 
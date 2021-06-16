/**
 * @author Ezedin Fedlu
 * 
 * stack implementation
 */

import { Collection } from "../helper";

 interface IStack<T> {
    push(item: T): void;
    size(): number;
    peek(): T | undefined;
    pop(): T | undefined;
}

class Stack<T> extends Collection<T> implements IStack<T> {
    push(item: T): void {
        this.storage.push(item);
    }
    peek(): T {
        return this.size() ? this.storage[this.size() - 1] : undefined;
    }
    pop(): T {
        return this.storage.pop();
    }
}

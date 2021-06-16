/**
 * @author Ezedin Fedlu
 * Queue implementation
 */

import { Collection } from "../helper";

 interface IQueue<T> {
    enqueue(item: T): void;
    dequeue(): T | undefined;
    size(): number;
}

class Queue<T> extends Collection<T> implements IQueue<T> {
    enqueue(item: T): void {
        this.storage.push(item);
    }
    dequeue(): T {
        return this.storage.shift();
    }
}
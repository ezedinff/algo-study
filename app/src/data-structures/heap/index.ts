
/**
 * A[1..A.length] may contain values only the elements in A[1..heap_size],
 * where 0 <= A.heap_size <= A.length
 */
interface Heap<T> {
    // number of elements in the array;
    length: number;
    // represents how many elements in the heap are stored within array.
    heap_size: number;
    store: Array<T>; 
    insert(item: T);
}

// max-heap - the largest element is stored at the root.
// A[parent(i)] >= A[i]
class MaxHeap<T> implements Heap<T> {
    store: T[];
    length: number;
    heap_size: number;
    insert(item: T) {
        
    }
}
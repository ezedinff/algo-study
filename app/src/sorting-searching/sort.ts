const swap = (array: Array<number>, i: number, j: number) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

/**
 * iterate through each element , compare item to next item, swap
 * @param array 
 */
const bubbleSort = (array: Array<number>) => {
    const n = array.slice(); // create copy of the array;
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if (n[j] > n[j + 1]) {
                swap(n, j, j+1)
            }
        }
    }
    return n;
}

/**
 * 
 * @param array 
 */
const insertionSort = (array: Array<number>) => {
    const copyArr = array.slice();
    IndexIterator:
    for(let i = 1; i < array.length; i++) {
        let valueToSort = copyArr[i];
        InsertionIterator:
        for(let j = i - 1; j >= 0; j--) {
            //console.log(`${valueToSort} >= ${copyArr[j]}`);
            if(valueToSort >= copyArr[j]) {
                copyArr[j + 1] = valueToSort;
              //  console.log(`value is greater`, copyArr);
                continue IndexIterator;
            } else {
                copyArr[j + 1] = copyArr[j];
                copyArr[j] = valueToSort;
               // console.log(copyArr);
                continue InsertionIterator;
            }
        }
    }
    return copyArr;
}


/**
 * 1) pick pivot value
 * Pivot Value is a value in array where values to left than pivot value is less than or equal
 * and right to pivot greater than pivot value
 * 2) order items around pivot value
 * 3) repeat for each partition
 * @param array 
 */
const quickSort = (array: Array<number>) => {
    const partition =  (arr: Array<number>, startIndex: number, endIndex: number) => {
        const pivot = arr[Math.floor((startIndex + endIndex) / 2)]; // mid item
        let i = startIndex;
        let j = endIndex;
        while (i <= j) {
            while (arr[i] < pivot) {
                i++;
            }
            while (arr[j] > pivot) {
                j--;
            }
            if(i <= j) {
                swap(arr, i, j);
                i++;
                j--;
            }
        }
        return i;
    }
    const sort = (arr: Array<number>, startIndex: number, endIndex: number) => {
        if(arr.length > 1) {
            let partIndex = partition(arr, startIndex, endIndex);
            if (startIndex < partIndex - 1) {
                sort(arr, startIndex, partIndex - 1);
            }
            if (partIndex < endIndex) {
                sort(arr, partIndex, endIndex);
            }
        }
    }
    sort(array, 0, array.length - 1);
    return array;
}


/**
 * 
 * @param array 
 */
const mergeSort = (array: Array<number>) => {}

export {bubbleSort, insertionSort, quickSort, mergeSort};
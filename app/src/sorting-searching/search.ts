const binarySearch = (array: Array<number>, value: number): boolean => {
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
        let middle =  Math.floor((end + start) / 2);
        console.log(middle, start, end);
        if (array[middle] == value) return true;
        else (array[middle] < value) ? start = middle + 1 : end = middle - 1;
    }
    return false;
}

export { binarySearch };
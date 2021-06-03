// these templates differ in
// - left, mid, right index assignment
// - loop or recursive termination definition
// - necessity of post-processing
// t1 and t3 are used most of the time.

// t1 ---> lett <= right
/**
 * Most basic and elementary form of Binary Search
 * 
 * Search Condition can be determined without comparing to the element's 
 * neighbors (or use specific elements around it)
 * 
 * No post-processing required because at each step,
 * you are checking to see if the element has been found. If you reach the end,
 * then you know the element is not found
 */

// t2 ---> left < right
/**
 * An advanced way to implement Binary Search.
 * 
 * Search Condition needs to access element's immediate right neighbor
 * 
 * Use element's right neighbor to determine if condition is met and decide whether to go left or right
 * 
 * Guarantees Search Space is at least 2 in size at each step
 * 
 * Post-processing required. Loop/Recursion ends when you have 1 element left.
 * Need to assess if the remaining element meets the condition.
 */

// t3 --> left + 1 < right
/**
 * An alternative way to implement Binary Search
 * 
 * Search Condition needs to access element's immediate left and right neighbors
 * 
 * Use element's neighbors to determine if condition is met and decide whether to go left or right
 * 
 * Guarantees Search Space is at least 3 in size at each step
 * 
 * Post-processing required. Loop/Recursion ends when you have 2 elements left
 * Need to assess if the remaining elements meet the condition.
 */

// Template number one
/**
 * is used to search for an element or condition which
 * can be determined by accessing a single index in the array.
 * @param array 
 * @param value 
 * @returns 
 */

const binarySearch = (array: Array<number>, value: number): number => {
    if (!array.length) return -1;
    let lo = 0, hi = array.length - 1;
    while (lo <= hi) {
        let m =  Math.floor((hi + lo) / 2);
        if (array[m] == value) return m;
        else (array[m] < value) ? lo = m + 1 : hi = m - 1;
    }
    return -1;
}


/**
 * // advanced one.
 * It is used to search for an element or condition
 *  which requires accessing the current index
 *  and its immediate right neighbor's index in the array.
 * @param array 
 * @param value 
 * @returns 
 */
const binarySearchT2 = (array: Array<number>, value: number): number => {
    if (!array.length) return -1;
    let lo = 0, hi = array.length;
    while (lo < hi) {
        let m = Math.floor((lo + hi) / 2);
        if (array[m] === value) return m;
        array[m] < value ? lo = m + 1 : hi = m;
    }
    if ( lo !== array.length && array[lo] === value) return lo;
    return -1;
}

/**
 * 
 * It is used to search for an element or condition 
 * which requires accessing the current index and its 
 * immediate left and right neighbor's index in the array
 * @param array 
 * @param value 
 * @returns 
 */
const binarySearchT3 = (array: Array<number>, value: number): number => {
    if (!array.length) return -1;
    let lo = 0, hi = array.length - 1;
    while(lo + 1 < hi) {
        let m = Math.floor((lo + hi) / 2);
        if (array[m] === value) return m;
        array[m] < value ? lo = m : hi = m;
    }
    // post-condition
    if (array[lo] === value) return lo;
    if (array[hi] === value) return hi;
    return -1;
}


// a function to find square root of a number using binary search
const sqrt = (num: number): number => {
    let lo = 0, hi = num;
    while (lo <= hi) {
        let mid = Math.floor((hi + lo) / 2);
        if (mid * mid > num) hi = mid - 1;
        else lo = mid + 1;
    }
    return hi;
}

const guess = (g: number): number => {
    const pick = 10;
    if (g === pick) return 0;
    if (g > pick) return 1;
    return -1;
}
const guessNumber = (num: number) => {
    let lo = 1, hi = num;
    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);
        if (guess(mid) === 0) return mid;
        else guess(mid) === 1 ? lo = mid + 1 : hi = mid - 1;
    }
    return hi;
}

// using recursion
const rotatedArraySearch = (array: Array<number>, target: number): number => {
    const search = (arr: Array<number>, lo: number, hi: number, key): number => {
        if(!array.length) return  -1;
        let m = Math.floor((lo + hi) / 2);
        if (array[m] === key) return m;
        // is the sub array sorted?
        if (array[lo] <= array[m]) {
            if (key >= array[lo] && key <= array[m]) {
                // if the target is range between [1...mid]
                return search(array, lo, m - 1, key);
            }
            return search(array, m + 1, hi, key);
        }
        if (key >= array[m] && key <= array[hi]) {
            return search(array, m + 1, hi, key);
        }
        return search(array, lo, m - 1, key);
    }
    return search(array, 0, array.length - 1, target);
}


//
const searchTargetFromRotatedSearch = (array: Array<number>, target: number): number => {
    if (!array.length) return -1;
    const binarySearch = (arr: Array<number>, lo: number, hi: number, key: number): number => {
        if(hi < lo) return -1;
        let m = Math.floor((lo + hi) / 2);
        if (key === arr[m]) return m;
        if (key > arr[m]) {
            return binarySearch(arr, m + 1, hi, key);
        }
        return binarySearch(arr, lo, m - 1, key);
    }
    const findPivot = (arr: Array<number>, lo: number, hi: number): number => {
        if (lo > hi) return -1;
        if (hi === lo) return lo;
        let m = Math.floor((lo + hi) / 2); // mid index
        // m ---> hi
        // value at m greater than value at next to m
        if (m < hi && arr[m] > arr[m + 1]) {
            return m;
        }
        if (m > lo && arr[m] < arr[m - 1]) {
            return m -1;
        }
        if (arr[lo] >= arr[m]) {
            return findPivot(arr, lo, m - 1);
        }
        return findPivot(arr, m + 1, hi);
    }

    let pivot = findPivot(array, 0, array.length - 1);
    if (pivot === -1) {
        // this means the array is not rotated
        return binarySearch(array, 0, array.length - 1, target);
    }
    if (array[pivot] === target) return pivot;
    if (array[0] <= target) return binarySearch(array, 0, pivot -1, target);
    return binarySearch(array, pivot + 1, array.length - 1, target);
}

const isBadVersion = (version: number): boolean => {
    return true;
}
// version [1 - n]
const findFirstBadVersion = (versions: number): number => {
    let lo = 1, hi = versions;
    while (lo < hi) {
        let m = Math.floor((lo + hi) / 2);
        isBadVersion(m) ? hi = m : lo = m + 1;
    }
    if (lo !== versions && isBadVersion(lo)) return lo;
    return versions;
}


const findPeakElement = (array: Array<number>): number => {
    if (!array.length) return -1;
    let lo = 0, hi = array.length - 1;
    while (lo <= hi) {
        let m = Math.floor((lo + hi) / 2);
        if ((m - 1 < 0 || array[m] > array[m -1]) && (m + 1 >= array.length || array[m] > array[m + 1])) return m;
        (m - 1 < 0 || array[m] > array[m -1]) ? lo = m + 1 : hi = m -1;
    }
    return -1;
}


// find peak element from 2D array

// .   c   .
// b   a   d
// .   e   .

// a is peak iff a >= b, a >= d, a >= c, a >= e
// called Greedy Ascent Algorithm


// where n is row and m columns
// j = m / 2 // middle column
// find global max on column j (i, j)
// (i, j-1) <= (i, j) >= (i, j+1) comparing j with values up and down
//
// ===============================


/**
 * 
 * @param array 
 * @returns number
 */
const findMinFromRotatedArray = (array: Array<number>) => {
    if (!array.length) return -1;
    let lo = 0, hi = array.length - 1;
    // check if the array is not rotated
    // if not rotated the first item is the minimum
    if (array[hi] > array[0]) return array[0];
    while (lo <= hi) {
        let m = Math.floor((lo + hi) / 2);
        if (array[m] > array[m + 1]) return array[m + 1];
        if (array[m - 1] > array[m]) return array[m];
        array[m] > array[0] ? lo = m + 1 : hi = m - 1;
    }
    return array[lo];
}

const findMinFromRotatedArray2 = (array: Array<number>) => {
    if (!array.length) return -1;
    let smallest = array[0];
    let lo = 0, hi = array.length - 1;
    while (lo <= hi) {
        let m = Math.floor((lo + hi) / 2);
        if (array[m] < smallest) {
            hi = m - 1;
            smallest = array[m];
        } else { lo = m + 1; }
    }
    return smallest;
}


const findMinFromRotatedArrayWhenDuplicateItemExist = (array: Array<number>): number => {
    if (!array.length) return -1;
    let lo = 0, hi = array.length - 1;
    // check if the array is not rotated
    // if not rotated the first item is the minimum
    if (array[hi] > array[0]) return array[0];
    while (lo <= hi) {
        let m = Math.floor((lo + hi) / 2);
        console.log({lo, m, hi});
        if (array[m] === array[hi]) { hi -= 1; }
        else { array[m] > array[hi] ? lo = m + 1 : hi = m; }
    }
    return array[lo];
}

const myPow = (x: number, n: number): number => {
    if (!n) return 1; // power of 0 means 1
    if (n < 0) return 1/myPow(x, -n);
    let y = myPow(x, Math.floor(n/2));
    y *= y;
    if (n % 2 === 1) {
        y *= x;
    }
    return y;
}

const isPerfectSquare = (x: number): boolean => {
    let lo = 0, hi = Math.floor(x / 2);
    while (lo <= hi) {
        let m = Math.floor((lo + hi) / 2);
        if (m * m === x) return true;
        m * m < x ? lo = m + 1 : hi = m - 1; 
    }
    return false;
}

// array sotted in non-decreasing order
const findSmallestLetterGreaterThanTarget = (array: Array<string>, target: string) => {
    let lo = 0, hi = array.length;
    let res = array[0];
    while(lo <= hi) {
        let m = Math.floor((lo + hi) / 2);
        if (array[m] > target) {
            res = array[m];
            hi = m - 1;
        } else { lo = m + 1; }
    }
    return res;
}


// O(n * m)
// if n == m O(n^2)

const intersection = (nums1: Array<number>, nums2: Array<number>): Array<number> => {
/*     const r = [];
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.indexOf(nums1[i]) !== -1) {
            if (r.indexOf(nums1[i]) === -1) {
                r.push(nums1[i])
            } 
        }
    }
    return r; */

    /**  
    const r = [];
    const a = new Set(nums1);
    const b = new Set(nums2);
    if (a.size >= b.size) {
        a.forEach((i) => {
            if (b.has(i)) r.push(i);
        })
    } else {
        b.forEach((i) => {
            if (a.has(i)) r.push(i);
        })
    }
    return r;
     */
    nums1 = [... new Set(nums1)];
    nums2 = [... new Set(nums2)];
    return nums1.filter((i) => nums2.indexOf(i) > -1);
}

// the first array determine the number of duplicate in the resulting array (intersection)
/**
 * for example 
 * const a =[4,9,5]
 * const b = [9,4,9,8,4];
 * should return [4, 9] or [9, 4]
 * 
 * const a =[1,2,2,1]
 * const b = [2,2];
 * should return [2, 2]. since their is duplication on the first array.
 * @param nums1 
 * @param nums2 
 * @returns 
 */
const intersection2 = (nums1: Array<number>, nums2: Array<number>): Array<number> => {
    const compare = new Map<number, number>();
    nums1.forEach((n) => compare.set(n, (compare.get(n) ?? 0) + 1));
    const r = []; // intersection result
    nums2.forEach((n) => {
        if ((compare.get(n) ?? 0) > 0) {
            compare.set(n, compare.get(n) - 1);
            r.push(n);
        }
    });
    return r;
}
//nums [2,7,11,15] target = 9
// should return [1,2]
const twoSum2 = (nums: Array<number>, target: number): Array<number> => {
    let start = 0, end = nums.length -1;
    while (start !== end) {
        if (nums[start] + nums[end] === target ) return [start + 1, end + 1];
        nums[start] + nums[end] > target ? end -= 1 : start += 1;
    }
    return [start + 1, end + 1];
}


const twoSumUsingHashMap = (nums: Array<number>, target: number): Array<number> => {
    const indices = {};
    nums.forEach((n, i) => indices[`${n}`] = i + 1);
    for (let i = 0; i < nums.length; i++) {
        let n = target - nums[i];
        if (indices[n]) {
            return indices[n] >= i + 1 ? [i + 1, indices[n]] : [indices[n], i + 1];
        }
    }
}


const findDuplicateNum = (nums: Array<number>) => {
    const counter = new Map<number, number> ();
    for (let i = 0; i < nums.length; i++) {
        if (!!(counter.get(nums[i]) ?? 0)) {
            return nums[i];
        }
        counter.set(nums[i], (counter.get(nums[i]) ?? 0) + 1)
    }
}
 // string searching algorithms
 // naive searching algorithm
 const naiveSearch = (data: string, itemToSearch: string) => {
     for (let startIndex = 0; startIndex < data.length; startIndex++) {
         let matchCount = 0;
         while (data[startIndex + matchCount] === itemToSearch[matchCount]) {
             matchCount++;
             if (itemToSearch.length == matchCount) {
                 startIndex = matchCount -1;
             }
         }
     }
 }
 // boyer-moore-horspool searching algorithm

export {findDuplicateNum, binarySearch, naiveSearch, findMinFromRotatedArray, findMinFromRotatedArrayWhenDuplicateItemExist, intersection, intersection2, twoSum2, isPerfectSquare };
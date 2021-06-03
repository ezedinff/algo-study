#!/usr/bin/env node

import * as chalk from 'chalk';
import { removeDuplicates } from './src/fundamentals/array';
import { reverseString, reverseString2 } from './src/fundamentals/recursion';
import { findDuplicateNum, findMinFromRotatedArray, findMinFromRotatedArrayWhenDuplicateItemExist, intersection,
     intersection2, isPerfectSquare, naiveSearch, twoSum2 } from './src/sorting-searching/search';
import { bubbleSort, insertionSort, mergeSort, quickSort } from './src/sorting-searching/sort';
// import * as Program from 'commander';

// const logPassedArgs = ((args) => console.log(chalk.cyan(JSON.stringify(args))));


// Program
//   .version('0.0.1')
//   .command('list [directory]')
//   .description('List files and folders')
//   .option('-a, --all','List all files and folders')
//   .option('-l, --long','')
//   .action(logPassedArgs);

// Program.parse(process.argv);
const randomArr = (length: number) => {
    const newArr = [];
    for (let i = 0; i < length; i++) {
        newArr.push(Math.floor(Math.random() * 1000))
    }
    return newArr;
}
// const arr = randomArr(5);
//const arr = [2,3,4,5,1];
// console.log(chalk.cyan(arr));



/* const bubbleSortedArr = bubbleSort(arr);
console.log(chalk.green(bubbleSortedArr));

const insertionSortedArr = insertionSort(arr);
console.log(chalk.green(insertionSortedArr));

const quickSortedArr = quickSort(arr);
console.log(chalk.green(quickSortedArr));

const mergeSortedArr = mergeSort(arr);
console.log(chalk.green(mergeSortedArr));
const m = findMinFromRotatedArray(arr);
console.log(chalk.green(m));

// ------------------ search ----------------------
const data = "the quick brown fox jumps over the lazy dog";
const pattern = "brown";
naiveSearch(data, pattern);
 */



// const iP = isPerfectSquare(32);
//console.log(chalk.green(iP));
/* const a =[1,2,2,1];
const b = [2,2];
const m = intersection(a, b);
const n = intersection2(a, b);
console.log(chalk.green(m));
console.log(chalk.green(n)); */
/* const m = findDuplicateNum([3,1,3,4,2]);
console.log(chalk.green(m)); */
//reverseString2(["h","e","l","l","o"])
console.log(removeDuplicates([1,1,2]));

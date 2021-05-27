#!/usr/bin/env node

import * as chalk from 'chalk';
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
const arr = [47,0,70,52,62,8,20,79,65,70];
console.log(chalk.cyan(arr));



const bubbleSortedArr = bubbleSort(arr);
console.log(chalk.green(bubbleSortedArr));

const insertionSortedArr = insertionSort(arr);
console.log(chalk.green(insertionSortedArr));

const quickSortedArr = quickSort(arr);
console.log(chalk.green(quickSortedArr));

const mergeSortedArr = mergeSort(arr);
console.log(chalk.green(mergeSortedArr));



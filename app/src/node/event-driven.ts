import EventEmitter = require("events");
import { readFile, stat } from "fs";
import { copyFile } from "fs/promises";
// callback has an error-first argument
// callback can be called syn and async
// this is bad practice that leads to unexpected errors.
function fileSize(filename, cb) {
    if (typeof filename !== 'string') {
        // calling the callback synchronously
        return cb(new TypeError('argument should be string'));
    }
    stat(filename, (err, stats) => {
        if (err) return cb(err); // calling async
        cb(null, stats.size); // async
    })
}
// RULE
// design host functions to consume callback either always
// sync or always async


// example of typical asynchronous node function that's written with a callback style
const readFileAsArray = (file, cb) => {
    readFile(file, (err, data) => {
        if (err) return cb(err);
        const lines = data.toString().trim().split("\n");
        cb(null, lines);
    })
}
// modern way is to use promise instead of callback

const readFileAsArrayAsync = (file, cb = () => {}) => {
    return new Promise((resolve, reject) => {
        readFile(file, (err, data) => {
            if (err) return reject(err);
            resolve(data);
        });
    });
}

readFileAsArray('./numbers.txt', (err, lines) => {
    if (err) throw err;
    const numbers = lines.map(Number); // convert them to number array
    const oddNumbers = numbers.filter(n => n % 2 === 1);
    console.log('odd numbers count:', oddNumbers.length);
})

readFileAsArrayAsync('./numbers.txt')
.then((lines: Array<string>) => {
    const numbers = lines.map(Number); // convert them to number array
    const oddNumbers = numbers.filter(n => n % 2 === 1);
    console.log('odd numbers count:', oddNumbers.length);
})
.catch(console.error);


// the EventEmitter module


export class MyEmitter extends EventEmitter {
    execute(taskFunc) {
        console.log('before executing');
        this.emit('begin', 'About to execute ');
        taskFunc();
        this.emit('end', 'done with execute');
        console.log('after executing');
    }
}

fs, path, readline, http, net, stream, cluster
event modules is especially important because most of node arch is event-driven.
## relation b/n node and v8 engine,
## global variable, is it accessible on all modules?
- every node file gets its own IIFE (immediately invoked function expression) behind the scene, and all variable scoped to IIFE

- global variables in node
    - process
    - modules
    - Buffer
## exports vs module.exports
## what is call stack? is it part of v8?
- call stack is part of v8
- it's data structure v8 uses to keep track of function invocations
- v8 places reference for the invoked function on call stack, keep doing for each nested invocation of other functions.
- when invocation of function reaches an end, v8 will pop one function at time and use its returned value in it place.
- you can get only one call stack per process. if call stack get busy, the whole process gets busy.
## what is event loop? is it part of v8
- no! it's not a part of v8
- which is provided by libuv library
- event loop is the entity that handles external events and converts them into callback invocations.
- it's a loop that picks events from the event queues and pushes their callbacks into the call stack. it's also multi-phase loop
- setTimeout or fs.readFile are not part of javascript, they are function provided by node.
- sits in between v8 call stack and different phases and callback queues and it acts like an organizer.
- when v8 call stack is empty, the event loop can decide what to execute next
## what will node do when event loop and call stack queue is empty?
- it will simply exit.
- when program starts node automatically start the event loop and when the event loop is idle and has nothing else to do, the process will exit
## beside v8 and libuv, what other external dependencies does node have?
all of them are external libraries, have their on licenses and node just uses them.
- http-parser
- c-ares
- OpenSSL
- zlib
## difference b/n setImmediate and process.nextTick
## difference b/n spawn, exec and fork
## how does the cluster module work, how is it different than using load balancer?
## what are v8 object and function templates?
## what is libuv and how does node use it?
## how can we do one final operation before a node process exits? can that operation be done asynchronously?
## what's the problem with the process uncaughtException event? how is it different than the exit event?
## what are the 5 major steps that the require function does?
## how can you check for the existence of local module
## what are circular modular dependencies in node and how can they be avoided?
## what are the 3 file extensions that will be automatically tried by the require function?
## when creating an http server and writing a response for a request why is the end function required?

## When is it ok to use the file system *Sync methods?
- It is often the case that everything you do after the initializing step depends on the data you obtain there
- using synchronous methods is acceptable as long as what you use the synchronous methods for is a one-time thing.
- don't use them on http request callback

## How can you print only one level of a deeply nested object?

## How come top-level variables are not global?

## The objects exports, require, and module are all globally available in every module but they are different in every module. How?

## If you execute a JavaScript file that has the single line: console.log(arguments); with Node, what exactly will Node print?

## How can a module be both "requirable" by other modules and executable directly using the node command?

## What’s an example of a built-in stream in Node that is both readable and writable?

## What happens when the line cluster.fork() gets executed in a Node script?

## What’s the difference between using event emitters and using simple callback functions to allow for asynchronous handling of code?

## What’s the difference between the Paused and the Flowing modes of readable streams?

## How can you read data from a connected socket?

## The require function always caches the module it requires. What can you do if you need to execute the code in a required module many times?

## When working with streams, when do you use the pipe function and when do you use events? Can those two methods be combined?
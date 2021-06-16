# Node's Streams
- streams are node's best and misunderstood idea.

- streams are collections of data
- they don't have to fit in memory (this makes them powerful to work with large amount of data)
- streams are composable. we use pipe
- example of built-in steaming interfaces
- http response, request, fs read and write streams, zlib streams, crypto streams, TCP sockets, child process stdout and stderr (readable), child process stdin(writable), process.stdin(readable), process.stdout, process.stderr(writable)


- there are four fundamental stream types
    - Readable - source from w/c data can be consumed
    - Writable - destination to w/c data can be written
    - Duplex - is both writable and readable like TCP socket
    - Transform (aka through streams) - is duplex stream that can be used to modify or transform the data as it is written and read.
        - zlib.createGzip - compress data using gzip
            - 
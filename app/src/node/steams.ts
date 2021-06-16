import { createReadStream, createWriteStream, fstat, readFile } from "fs";
import { createServer } from "http";

const file = createWriteStream('./big.file');
// 1e3 means 1000
for (let i = 0; i <= 1e3; i++) file.write('Some content');
file.end() // close the writable stream


const server = createServer();
server.on("request", (req, res) => {
    // this is insufficient while reading gega bytes of file or data
    // readFile("./big.file", (err, data) => {
    //     if (err) throw err;
    //     res.end(data);
    // })
    // instead we use streams
    // since http response are streams
    const src = createReadStream('./big.file');
    src.pipe(res);
});

export default server;
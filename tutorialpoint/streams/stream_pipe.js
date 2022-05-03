var fs = require("fs");

var root = '/home/NodeJS/tutorialpoint/streams/'
var file_in = root + 'input_stream.txt'
var file_out = root + 'output_stream.txt'

// Create a readable stream
var readerStream = fs.createReadStream(file_in);

// Create a writable stream
var writerStream = fs.createWriteStream(file_out);

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log("Program Ended");
var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
var root = '/home/NodeJS/tutorialpoint/streams/'
var file_in = root + 'input_stream.txt'
var file_out = root + 'input_stream.txt.gz'

fs.createReadStream(file_in)
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream(file_out));
  
console.log("File Compressed.");

var fs = require("fs");
var zlib = require('zlib');
// Decompress the file input.txt.gz to input.txt
var file_in2 = root + 'input_stream_2.txt'
fs.createReadStream(file_out)
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream(file_in2));
  
console.log("File Decompressed.");
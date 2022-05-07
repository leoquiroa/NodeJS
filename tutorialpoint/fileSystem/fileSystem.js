var fs = require("fs");

///////////////////////////////////////////////////////////////
// 1. Read async/sync file
///////////////////////////////////////////////////////////////

var root = '/home/NodeJS/tutorialpoint/fileSystem/'
var file_in = root + 'input.txt'

// Asynchronous read
fs.readFile(file_in, function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("1.a.Asynchronous read: ");
   console.log("1.a.content = "+data.toString());
});

// Synchronous read
var data = fs.readFileSync(file_in);
console.log("1.Synchronous read: ");
console.log("1.content = "+data.toString());
console.log("1.Program Ended");

///////////////////////////////////////////////////////////////
// 2. File information
///////////////////////////////////////////////////////////////
console.log("--");
console.log("2.Going to get file info!");
//async
fs.stat(file_in, function (err, stats) {
   if (err) {
      return console.error(err);
   }
   console.log("2.a.stats " + stats);
   console.log("2.a.Got file info successfully!");
   
   // Check file type
   console.log("2.a.isFile ? " + stats.isFile());
   console.log("2.a.isDirectory ? " + stats.isDirectory());    
});

///////////////////////////////////////////////////////////////
// 3. Write file
///////////////////////////////////////////////////////////////

console.log("--");
console.log("3.Going to write into existing file");
//async
fs.writeFile(file_in, 'New Line', function(err) {
   if (err) {
      return console.error(err);
   }
   
   console.log("3.a.Data written successfully!");
   console.log("3.a.Let's read newly written data");
   
   fs.readFile(file_in, function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("3.a.a.Asynchronous read: " + data.toString());
   });
})

///////////////////////////////////////////////////////////////
// 4. Read file
///////////////////////////////////////////////////////////////

var buf = new Buffer(1024);

console.log("4. Going to open an existing file");
fs.open(file_in, 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("4.a. File opened successfully!");
   console.log("4.a. Going to read the file");
   
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }
      console.log("4.a.a. bytes read " + bytes);
      
      // Print only read bytes to avoid junk.
      if(bytes > 0){
         console.log("4.a.a. content: " + buf.slice(0, bytes).toString());
      }
   });
});
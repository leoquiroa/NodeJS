var buf = new Buffer(10);
var buf = new Buffer([10, 20, 30, 40, 50]);
var buf = new Buffer("Simply Easy Learning", "utf-8");

//Writing
buf = new Buffer(256);
len = buf.write("Simply Easy Learning");
console.log("--Writing");
console.log("Octets written : "+  len);

//READING
console.log("--Reading");
buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}
console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // outputs: abcde
console.log( buf.toString('utf8',0,5));    // outputs: abcde
console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde

//CONVERT BUFFER TO JSON
console.log("--Convert to JSON");
var buf = new Buffer('Simply Easy Learning');
var json = buf.toJSON(buf);
console.log(json);

//Concatenate Buffers
console.log("--Concatenate");
var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 content: " + buffer3.toString());

//Compare Buffers
console.log("--Compare");
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);
if(result < 0) {
   console.log(buffer1 +" comes before " + buffer2);
} else if(result === 0) {
   console.log(buffer1 +" is same as " + buffer2);
} else {
   console.log(buffer1 +" comes after " + buffer2);
}

//Copy Buffers
console.log("--Copy");
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());

//Slicing a buffer
console.log("--Slicing");
var buffer1 = new Buffer('TutorialsPoint');
var buffer2 = buffer1.slice(0,9);
console.log("buffer2 content: " + buffer2.toString());

//length of the buffer
console.log("--Length");
var buffer = new Buffer('TutorialsPoint');
console.log("buffer length: " + buffer.length);
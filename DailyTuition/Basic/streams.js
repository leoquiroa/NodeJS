const http = require('http');
const fs = require('fs');
let name_file = "/home/NodeJS/DailyTuition/testFileOps.txt";
var server = null;
// WITH NO STREAM
const server0 = http.createServer(function(req,res){
    fs.readFile(name_file,
        (err,data)=>{res.end(data)
    })
});
//var server = server0;
// WITH STREAM
const server1 = http.createServer(function(req,res){
    const my_stream = fs.createReadStream(name_file);
    my_stream.pipe(res)
});
var server = server1;
// DEPLOY
server.listen(3000,()=>{console.log("Application Started on PORT 3000")});
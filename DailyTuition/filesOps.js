const fs = require('fs');
let name_file = "/home/NodeJS/DailyTuition/testFileOps.txt";

//async method
console.log("async method");
fs.readFile(name_file,"utf8",(err,data)=>{
    if (err) throw err;
    console.log('async: '+data)
})
//sync method
console.log("sync method");
const data = fs.readFileSync(
    name_file,
    {
        encoding:"utf-8"
        ,flag:"r"
    });
console.log('sync: '+data);
// file stats
fs.stat(name_file, (err,stats)=>{
    if(err){
        console.error(err);
        return
    }
    console.log(stats.isFile())
    console.log(stats.isDirectory())
    console.log(stats.isSymbolicLink())
    console.log(stats.size)
})

// async, when ERROR methods will continue
fs.writeFile()
fs.readFile()
fs.unlink()
// sync, when ERROR methods will stop
fs.writeFileSync()
fs.readFileSync()
fs.unlinkSync()

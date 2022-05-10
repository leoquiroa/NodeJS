const http1 = require("http")
const hostname = "127.0.0.1"
const port = 3000

http1.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"})
    //res.statusCode = 200;
    //res.setHeader("Content-Type","text/plain");
    res.write("Welcome to my HTTP Server");
    res.end();
}).listen(port, hostname, ()=>{
    console.log(`Your server is running at http://${hostname}:${port}/`);
})

//GET
const http2 = require("http")
console.log("GET")
http2.get("http://api.open-notify.org/astros.json",resp=>{
    let data = '';
    resp.on('data',chunk=>{
        data += chunk    
    });
    resp.on('end',()=>{
        let jsondata = JSON.parse(data)
        console.log("GET Response")
        console.log(jsondata)
    });
});

//POST
const http3 = require("https")
console.log("POST")
const data = JSON.stringify({
    name:"Leo Quiroa"
    ,job:"DE/ML Engineer"
})

const options = {
    hostname: 'reqres.in'
    ,path: '/api/users'
    ,method: 'POST'
    ,header: {
        'Content-Type':'applicaiton/json'
    }
}

const req = http3.request(options,(res)=>{
    let data = "";
    console.log("Regular.Status Code",res.statusCode)

    res.on("data",(chunk)=>{
        data += chunk;
    })

    res.on("end",()=>{
        console.log("Regular.Body: ",JSON.parse(data));
    })
})

req.write(data)
req.end();

//AXIOS
console.log("AXIOS")
const axios = require("axios");

axios.post("http://reqres.in/api/users",data).then(res=>{
    console.log(`Axios.Status code : ${res.status}`);
    console.log(`Axios.Body : ${JSON.stringify(res.data)}`);
}).catch(err=>{
    console.log(err);
})    
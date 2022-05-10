const http = require("http");

//LONG WAY

/*
function index(request,response){
    response.writeHead(200);
    response.end("This is the main Node page");
}

function about_us(request,response){
    response.writeHead(200);
    response.end("The is the About page");
}

http.createServer(function(req,res){
    if(req.url=='/'){
        return index(req,res);
    }
    if(req.url=='/about'){
        return about_us(req,res);
    }
}).listen(8000)

*/

//SHORT WAY

const routes = {
    '/': function index(request,response){
        response.writeHead(200);
        response.end("This is the main Node page");       
    },
    '/about': function index(request,response){
        response.writeHead(200);
        response.end("This is the About US page");       
    }
}

http.createServer(function(req,res){
    if(req.url in routes){
        return routes[req.url](req,res);
    }
}).listen(8000)
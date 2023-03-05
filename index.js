const http = require("http");
const fs = require("fs");

const port = 4000;
const hostname = "localhost";

const home = fs.readFileSync('./index.html')

const server = http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url === "/"){
        return res.end(home);
    }
    if(req.url === "/home"){
        return res.end(home);
    }
    if(req.url === "/about"){
        return res.end("<h1>About Page</h1>");
    }
    if(req.url === "/contact"){
        return res.end("<h1>Contact Page</h1>");
    }
    if(req.url === "/service"){
       return res.end("<h1>Service Page</h1>");
    }else{
       return res.end("<h1>404 page not found</h1>");
    }
});

server.listen(port,hostname,()=>{
    console.log(`server is working on http://localhost:4000`);
});
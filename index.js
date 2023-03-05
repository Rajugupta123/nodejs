const http = require("http");
const fs = require("fs");

const port = 4000;
const hostname = "localhost";

const home = fs.readFileSync('./home.html')
const about = fs.readFileSync('./about.html')
const contact = fs.readFileSync('./contact.html')
const service = fs.readFileSync('./service.html')


const server = http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url === "/"){
        return res.end(home);
    }
    if(req.url === "/home"){
        return res.end(home);
    }
    if(req.url === "/about"){
        return res.end(about);
    }
    if(req.url === "/contact"){
        return res.end(contact);
    }
    if(req.url === "/service"){
       return res.end(service);
    }else{
       return res.end("<h1>404 page not found</h1>");
    }
});

server.listen(port,hostname,()=>{
    console.log(`server is working on http://localhost:4000`);
});
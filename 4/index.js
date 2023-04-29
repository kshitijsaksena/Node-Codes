//Write a function in Node.js that uses the native "http" module to create a simple HTTP server 
//that listens on port 3000 and returns a "Hello, world!" message to any incoming request.

const http = require('http');

http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Hello World!!')
    }
}).listen(3000);
//Write a function in Node.js that accepts a POST request containing JSON data and saves it to a file named "data.json".

const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    if(req.method === 'POST' && req.url === '/'){
        req.on('data',(chunk)=>{
            fs.writeFile('./data.json',chunk,(err)=>{
                    if(err) throw err;
                })
        });

        res.end();
    }
}).listen(3000);
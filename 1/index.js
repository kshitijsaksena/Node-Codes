
//Write a function in Node.js that reads a file named "data.txt" and logs its contents to the console.

const fs = require('fs')

function logFileContent(){
    fs.readFile('./data.txt', 'utf-8' ,(err,data)=>{
        if(err) throw err;
        console.log(data);
    })
}

logFileContent();
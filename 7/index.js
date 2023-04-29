//Write a function in Node.js that uses the "fs" module to recursively list all files and directories in a given directory.

const fs = require('fs');
const path = require('path');

console.log(path.join(__dirname,'/..'))
function listFiles(){
    fs.readdir('../',(err,directories)=>{
        if(err) throw err;
        directories.forEach((directory)=>{
            fs.readdir(path.join(__dirname,'/..',directory),(err,files)=>{
                console.log('Directories: ', directory,'files: ',files);
            })
        })
    })
}

listFiles()
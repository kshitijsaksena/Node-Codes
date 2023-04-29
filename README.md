# NodeCodes

### Coding Question on Nodejs

1. [Write a function in Node.js that reads a file named "data.txt" and logs its contents to the console](#1-write-a-function-in-nodejs-that-reads-a-file-named-datatxt-and-logs-its-contents-to-the-console)
2. [Write a function in Node.js that creates a new directory named "logs" and logs a message to a file named "info.log" inside the directory](#2-write-a-function-in-nodejs-that-creates-a-new-directory-named-logs-and-logs-a-message-to-a-file-named-infolog-inside-the-directory)
3. [Write a function in Node.js that fetches data from an API endpoint using the Axios library and returns the response](#3-write-a-function-in-nodejs-that-fetches-data-from-an-api-endpoint-using-the-axios-library-and-returns-the-response)
4. [Write a function in Node.js that uses the native "http" module to create a simple HTTP server that listens on port 3000 and returns a "Hello, world!" message to any incoming request](#4-write-a-function-in-nodejs-that-uses-the-native-http-module-to-create-a-simple-http-server-that-listens-on-port-3000-and-returns-a-hello-world-message-to-any-incoming-request)
5. [Write a function in Node.js that accepts a command-line argument and logs it to the console](#5-write-a-function-in-nodejs-that-accepts-a-command-line-argument-and-logs-it-to-the-console)
6. [Write a function in Node.js that reads a CSV file named "data.csv" and converts its contents to JSON format](#6-write-a-function-in-nodejs-that-reads-a-csv-file-named-datacsv-and-converts-its-contents-to-json-format)
7. [Write a function in Node.js that uses the "fs" module to recursively list all files and directories in a given directory](#7-write-a-function-in-nodejs-that-uses-the-fs-module-to-recursively-list-all-files-and-directories-in-a-given-directory)
8. [Write a function in Node.js that accepts a POST request containing JSON data and saves it to a file named "data.json"](#8-write-a-function-in-nodejs-that-accepts-a-post-request-containing-json-data-and-saves-it-to-a-file-named-datajson)
9. [Write a function in Node.js that uses the "crypto" module to generate a random 32-byte hexadecimal string](#9-write-a-function-in-nodejs-that-uses-the-crypto-module-to-generate-a-random-32-byte-hexadecimal-string)
10. [Write a function in Node.js that uses the "cluster" module to create a simple cluster of worker processes that each log a message to the console](#10-write-a-function-in-nodejs-that-uses-the-cluster-module-to-create-a-simple-cluster-of-worker-processes-that-each-log-a-message-to-the-console)
___
#### 1. Write a function in Node.js that reads a file named "data.txt" and logs its contents to the console
```js
const fs = require('fs')

function logFileContent(){
    fs.readFile('./data.txt', 'utf-8' ,(err,data)=>{
        if(err) throw err;
        console.log(data);
    })
}

logFileContent();
```
**[⬆ Back to Top](#coding-question-on-nodejs)**
___
#### 2. Write a function in Node.js that creates a new directory named "logs" and logs a message to a file named "info.log" inside the directory
```js 
const fs = require('fs');

function logToFile(){
    let myData = 'Logging to file info.log'
    fs.mkdir('./logs', { recursive: true }, (err) => {
        if(err) 
            throw err
        else {
            fs.writeFile('./logs/info.log', myData ,(err) => {
                if(err) throw err;
            });
        }
    });
    
}

logToFile();
```
**[⬆ Back to Top](#coding-question-on-nodejs)**
___
#### 3. Write a function in Node.js that fetches data from an API endpoint using the Axios library and returns the response
```js
const axios = require('axios');

async function fetchData(){
    const data = await axios.get('https://random-data-api.com/api/v2/users');
    return data;
}

fetchData().then( (data) => console.log(data.data));
```
**[⬆ Back to Top](#coding-question-on-nodejs)**
___
#### 4. Write a function in Node.js that uses the native "http" module to create a simple HTTP server that listens on port 3000 and returns a "Hello, world!" message to any incoming request.
```js
const http = require('http');

http.createServer((req,res)=>{
  res.end('Hello World!!')
}).listen(3000);
```
**[⬆ Back to Top](#coding-question-on-nodejs)**
___
#### 5. Write a function in Node.js that accepts a command-line argument and logs it to the console
```js
function getArgs(){
    let args = process.argv.slice(2);
    console.log(args)
}

getArgs();
```
**[⬆ Back to Top](#coding-question-on-nodejs)**
___
#### 6. Write a function in Node.js that reads a CSV file named "data.csv" and converts its contents to JSON format
```js
const fs = require('fs').promises;

async function csvToJSON(){
    let data = await fs.readFile('./data.csv','utf8');
    let arr = data.split('\n');
    let json = [];
    let keys = arr[0].split(',');
    
    for(let i=1;i<arr.length;i++){
        let obj = {};
        let values = arr[i].split(',');
        
        for(let j=0;j<keys.length;j++){
            obj[keys[j]] = values[j];
        }

        json[i-1] = obj;

    }

    return JSON.stringify(json);
}

csvToJSON().then(data => console.log(data));
```
**[⬆ Back to Top](#coding-question-on-nodejs)**
___
#### 7. Write a function in Node.js that uses the "fs" module to recursively list all files and directories in a given directory
```js
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
```
**[⬆ Back to Top](#coding-question-on-nodejs)**
___
#### 8. Write a function in Node.js that accepts a POST request containing JSON data and saves it to a file named "data.json"
```js
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
```
**[⬆ Back to Top](#coding-question-on-nodejs)**
___
#### 9. Write a function in Node.js that uses the "crypto" module to generate a random 32-byte hexadecimal string
```js
const crypto = require('crypto');

function getRandomHex(){
    let bytes = crypto.randomBytes(32).toString('hex');
    console.log(bytes);
}

getRandomHex();
```
**[⬆ Back to Top](#coding-question-on-nodejs)**
___
#### 10. Write a function in Node.js that uses the "cluster" module to create a simple cluster of worker processes that each log a message to the console
```js
const cluster  = require('cluster');
const { availableParallelism } = require('os');

const numCPUs = availableParallelism();

function generateClusters(){
    if(cluster.isPrimary){
        console.log("Primary Cluster: ", process.pid);

        for(let i=0;i<numCPUs;i++){
            let worker = cluster.fork();

            worker.on('online',()=>{
                console.log('Worker online: ', worker.process.pid);
            })
        }

    } else {
        
    }
}

generateClusters();
```
**[⬆ Back to Top](#coding-question-on-nodejs)**
___

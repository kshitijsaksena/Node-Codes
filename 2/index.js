//Write a function in Node.js that creates a new directory named "logs" and logs a message to a file named "info.log" inside the directory.

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
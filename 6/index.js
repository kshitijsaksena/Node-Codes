//Write a function in Node.js that reads a CSV file named "data.csv" and converts its contents to JSON format.

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
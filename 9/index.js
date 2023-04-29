//Write a function in Node.js that uses the "crypto" module to generate a random 32-byte hexadecimal string.

const crypto = require('crypto');

function getRandomHex(){
    let bytes = crypto.randomBytes(32).toString('hex');
    console.log(bytes);
}

getRandomHex();
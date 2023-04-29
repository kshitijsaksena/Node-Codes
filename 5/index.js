
//Write a function in Node.js that accepts a command-line argument and logs it to the console.

function getArgs(){
    let args = process.argv.slice(2);
    console.log(args)
}

getArgs();
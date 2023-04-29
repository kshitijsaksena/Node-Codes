//Write a function in Node.js that uses the "cluster" module to create a simple cluster of worker processes that each log a message to the console.

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
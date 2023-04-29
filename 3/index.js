//Write a function in Node.js that fetches data from an API endpoint using the Axios library and returns the response.

const axios = require('axios');

async function fetchData(){
    const data = await axios.get('https://random-data-api.com/api/v2/users');
    return data;
}

fetchData().then( (data) => console.log(data.data));
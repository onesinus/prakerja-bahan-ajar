const axios = require('axios');

axios.get('https://meowfacts.herokuapp.com/?count=5')
  .then(function (response) {
  	const response_body = response.data
  	response_body["data"].forEach((fact, idx) => console.log(`${idx+1}: ${fact}`))
  })
  .catch(function (error) {
    console.log(error);
  }); 
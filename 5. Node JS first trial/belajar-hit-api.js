const request = require('request');

request('https://meowfacts.herokuapp.com/?count=10', function (error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log(body)
        // do something else such as inserting the data to database...
     }
})
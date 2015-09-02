var request = require('request');
// var test_data = require('./test_data');
var test_data = require('./real_data');

request({
    url: 'https://app.close.io/hackwithus/', //URL to hit
    qs: {
        // no query string
    },
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Custom-Header': 'Test'
    },
    body: JSON.stringify(test_data),
}, function(error, response, body) {
    console.log('Status Code: ' + response.statusCode);
    if(error) {
        console.log('-------------------------------------------------')
        console.log('Failure')
        console.log('-------------------------------------------------')
        console.log(error);
    }
    else {
        console.log('-------------------------------------------------')
        console.log('Success')
        console.log('-------------------------------------------------')
            // console.log(response);
        console.log(body);
    }
});

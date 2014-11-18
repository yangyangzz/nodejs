/*jslint node: true */
var request = require('request'),
    options = {
        method: process.argv[2] || 'GET',
        url: 'http://localhost:5984/' + (process.argv[3] || '')
    };

request(options, function (err, res, body) {
    "use strict";
    if (err) {
        throw new Error(err);
    } else {
        console.log(res.statusCode, JSON.parse(body));
    }
});


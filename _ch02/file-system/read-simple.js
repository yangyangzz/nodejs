/*jslint node: true */

var fs = require('fs');
fs.readFile('target.txt', function (err, data) {
    "use strict";
    if (err) {
        throw err;
    }
    console.log(data.toString());
});
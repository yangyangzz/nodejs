/*jslint node: true */

var fs = require('fs');
fs.writeFile('target.txt', 'hello node', function (err) {
    "use strict";
    if (err) {
        throw err;
    }
    console.log("File saved!");
});
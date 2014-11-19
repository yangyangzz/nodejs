/*jslint node: true */

var file = require('file'),
    rdfParser = require('./lib/rdf-parser.js');

console.log('beginning directory walk');

file.walk(__dirname + '/cache', function (err, dirPath, dirs, files) {
    "use strict";
    files.forEach(function (path) {
        rdfParser(path, function (err, doc) {
            if (err) {
                throw err;
            } else {
                console.log(doc);
            }
        });
    });
});
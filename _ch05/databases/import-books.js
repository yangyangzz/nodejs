/*jslint node: true */

var async = require('async'),
    request = require('request'),
    file = require('file'),
    rdfParser = require('./lib/rdf-parser.js'),
    
    work = async.queue(function (path, done) {
        "use strict";
        rdfParser(path, function (err, doc) {
            request({
                method: 'PUT',
                url: 'http://localhost:5984/books/' + doc._id,
                json: doc
            }, function (err, res, body) {
                if (err) {
                    throw new Error(err);
                }
                console.log(doc);
                done();
            });
        });
    }, 10);

console.log('beginning directory walk');
file.walk(__dirname + '/cache', function (err, dirPath, dirs, files) {
    "use strict";
    files.forEach(function (path) {
        work.push(path);
    });
});
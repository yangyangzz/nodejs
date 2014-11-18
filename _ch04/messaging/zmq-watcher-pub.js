/*jslint node: true */

var fs = require('fs'),
    zmq = require('zmq'),
    // create publisher endpoint
    publisher = zmq.socket('pub'),
    filename = process.argv[2];

fs.watch(filename, function () {
    "use strict";
    publisher.send(JSON.stringify({
        type: 'changed',
        file: filename,
        timestamp: Date.now()
    }));
});

publisher.bind('tcp://*:5432', function (err) {
    "use strict";
    console.log('Listening for zmq subscribers...');
});
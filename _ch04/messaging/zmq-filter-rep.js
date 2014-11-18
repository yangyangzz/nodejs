/*jslint node: true */

var fs = require('fs'),
    zmq = require('zmq'),
    responder = zmq.socket('rep');

responder.on('message', function (data) {
    "use strict";
    var request = JSON.parse(data);
    console.log('Received request to get: ' + request.path);

    fs.readFile(request.path, function (err, content) {
        console.log('Sending response content');
        responder.send(JSON.stringify({
            content: content.toString(),
            timestamp: Date.now(),
            pid: process.pid
        }));
    });
});

responder.bind('tcp://127.0.0.1:5433', function (err) {
    "use strict";
    console.log('Listening for zmq requesters...');
});

process.on('SIGINT', function () {
    "use strict";
    console.log('Shutting down...');
    responder.close();
});
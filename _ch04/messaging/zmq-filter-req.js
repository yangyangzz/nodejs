/*jslint node : true */

var zmq = require('zmq'),
    filename = process.argv[2],
    
    requester = zmq.socket('req');

requester.on("message", function (data) {
    "use strict";
    var response = JSON.parse(data);
    console.log("Received response:", response);
});

requester.connect('tcp://localhost:5433');

console.log('Sending request for ' + filename);

requester.send(JSON.stringify({
    path: filename
}));
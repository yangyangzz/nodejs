/*jslint node: true */
var zmq = require('zmq'),

    subscriber = zmq.socket('sub');

subscriber.subscribe("");

subscriber.on("message", function (data) {
    "use strict";
    var message = JSON.parse(data),
        date = new Date(message.timestamp);
    console.log("File '" + message.file + "' changed at " + date);
});

subscriber.connect("tcp://localhost:5432");
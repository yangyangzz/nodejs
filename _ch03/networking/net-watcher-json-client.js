/*jslint node: true */

var net = require('net'),
    client = net.connect({port: 5432});

client.on('data', function (data) {
    "use strict";
    var message = JSON.parse(data),
        date;
    if (message.type === 'watching') {
        console.log("Now watching: " + message.file);
    } else if (message.type === 'changed') {
        date = new Date(message.timestamp);
        console.log("File '" + message.file + "' changed at " + date);
    } else {
        throw new Error("Unrecognized message type: " + message.type);
    }
});
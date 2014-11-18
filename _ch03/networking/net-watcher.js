/*jslint node: true */

var fs = require('fs'),
    net = require('net'),
    filename = process.argv[2],
    
    server = net.createServer(function (connection) {
        "use strict";
        console.log('Subscriber connected');
        
        connection.write(JSON.stringify({
            type: 'watching',
            file: filename
        }) + '\n');
        
        var watcher = fs.watch(filename, function () {
            connection.write(JSON.stringify({
                type: 'changed',
                file: filename,
                timestamp: Date.now()
            }) + '\n');
        });
        
        connection.on('close', function () {
            console.log('Subscriber disconnected.');
            watcher.close();
        });
    });

if (!filename) {
    throw new Error('No target file was specified');
}

server.listen(5432, function () {
    "use strict";
    console.log('Listening for subscribers ...');
});
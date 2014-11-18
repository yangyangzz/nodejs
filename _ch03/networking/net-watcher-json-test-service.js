/*jslint node: true */

var net = require('net'),
    server = net.createServer(function (connection) {
        "use strict";
        console.log('Subscriber connected');
        
        connection.write(
            '{"type": "changed", "file": "targ'
        );
        
        var timer = setTimeout(function () {
            connection.write('et.txt", "timestamp": 1358175758495}' + "\n");
            connection.end();
        }, 1000);
        
        connection.on('end', function () {
            clearTimeout(timer);
            console.log('Subscriber disconnected');
        });
    });

server.listen(5432, function () {
    "use strict";
    console.log('Test server listening for subscribers ...');
});
 
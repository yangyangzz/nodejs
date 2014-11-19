/*jslint node: true*/

var http = require('http'),
    server = http.createServer(function (req, res) {
        "use strict";
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World\n');
    });

server.listen(3000, function () {
    "use strict";
    console.log('ready captain!');
});

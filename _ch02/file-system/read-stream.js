/*jslint node: true */

var fs = require('fs'),
    stream = fs.createReadStream(process.argv[2]),
    syncData = fs.readFileSync(process.argv[2]);

process.stdout.write("synch: " + syncData.toString());

stream.on('data', function (chunk) {
    "use strict";
    process.stdout.write(chunk);
    //console.log(chunk.toString());
});

stream.on('error', function (err) {
    "use strict";
    process.stderr.write("ERROR: " + err.message + "\n");
});
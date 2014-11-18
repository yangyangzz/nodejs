/*jslint node: true*/

var fs = require('fs'),
    spawn = require('child_process').spawn,
    filename = process.argv[2];

if (!filename) {
    throw new Error("A file to watch must be specified!");
}

fs.watch(filename, function () {
    "use strict";
    var ls = spawn('ls', ['-lh', filename]);
    ls.stdout.pipe(process.stdout);
});

console.log("Now watching " + filename + " for changes ...");
/*jslint node: true */

var events = require('events'),
    util = require('util'),
    
    LDJClient = function (stream) {
        "use strict";
        events.EventEmitter.call(this);
        
        var self = this,
            buffer = '';
        
        stream.on('data', function (data) {
            buffer += data;
            var boundary = buffer.indexOf('\n'),
                input;
            while (boundary !== -1) {
                input = buffer.substr(0, boundary);
                buffer = buffer.substr(boundary + 1);
                self.emit('message', JSON.parse(input));
                boundary = buffer.indexOf('\n');
            }
        });
    };

util.inherits(LDJClient, events.EventEmitter);

exports.LDJClient = LDJClient;
exports.connect = function (stream) {
    "use strict";
    return new LDJClient(stream);
};
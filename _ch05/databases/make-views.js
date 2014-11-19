/*jslint node: true */

var async = require('async'),
    request = require('request'),
    views = require('./lib/views.js');

async.waterfall([
    function (next) {
        "use strict";
        request.get('http://localhost:5984/books/_design/books', next);
    },
    function (res, body, next) {
        "use strict";
        if (res.statusCode === 200) {
            next(null, JSON.parse(body));
        } else if (res.statusCode === 404) {
            next(null, { views: {}});
        }
    },
    function (doc, next) {
        "use strict";
        Object.keys(views).forEach(function (name) {
            doc.views[name] = views[name];
        });
        request({
            method: 'PUT',
            url : 'http://localhost:5984/books/_design/books',
            json: doc
        }, next);
    },
    function (err, res, body) {
        "use strict";
        console.log(res);
        if (err) {throw new Error(err); }
        console.log(res.statusCode, body);
    }
]);
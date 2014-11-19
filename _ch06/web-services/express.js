/*jslint node: true */

var express = require('express'),
    app = express();

//app.use(express.logger('dev'));
app.get('/api/:name', function (req, res) {
    "use strict";
    res.json(200, { "hello": req.params.name });
});

app.listen(3000, function () {
    "use strict";
    console.log('ready captain');
});
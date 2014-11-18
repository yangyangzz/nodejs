#!/usr/bin/env node
/*jslint node: true */

require('fs')
    .createReadStream(process.argv[2])
        .pipe(process.stdout);
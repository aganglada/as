#!/usr/bin/env node
'use strict';

var args = require('./format/args');

var param = process.argv;

var url = args(param, function(url) {
    console.log('Done!');
}, function() {
    console.log('You should specify an URL');
    process.exit(1);
});

console.log(url);

#! /usr/bin/env node
'use strict';

exports.awesome = function() {
    console.log(process.argv);
    return 'awesome';
};

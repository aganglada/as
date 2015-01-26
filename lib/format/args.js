'use strict';
module.exports = function(args, cb, err) {
    var first = args.slice(2);

    if (first.length <= 0) {
        err();
    } else {
        cb();
        return first[0];
    }
};

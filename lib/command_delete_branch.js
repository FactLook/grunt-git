'use strict';

var async = require('grunt').util.async;
var grunt = require('grunt');
var ArgUtil = require('flopmang');

module.exports = function (task, exec, done) {
    var argUtil = new ArgUtil(task, [
        {
            option: 'delete',
            defaultValue: false,
            useAsFlag: true,
            useValue: false,
            flag: '-d'
        },{
            option: 'branch',
            defaultValue: 'Commit',
            useAsFlag: false,
            useValue: true,
        },
    ]);

    var args = ['deleteBranch'].concat(argUtil.getArgFlags());

    // Add callback
    args.push(done);

    exec.apply(this, args);
};

module.exports.description = 'Delete a git branch.';


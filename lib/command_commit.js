'use strict';

var async = require('grunt').util.async;
var grunt = require('grunt');
var ArgUtil = require('flopmang');

module.exports = function (task, exec, done) {
    var argUtil = new ArgUtil(task, [
        {
            option: 'all',
            defaultValue: false,
            useAsFlag: true,
            useValue: false,
            flag: '-a'
        },
        {
            option: 'dryrun',
            defaultValue: false,
            useAsFlag: true,
            useValue: false,
            flag: '--dry-run'
        },
        {
            option: 'message',
            defaultValue: 'Commit',
            useAsFlag: true,
            useValue: true,
            flag: '-m'
        },
        {
            option: 'description',
            defaultValue: false,
            useAsFlag: true,
            useValue: true,
            flag: '-m'
        },
        {
            option: 'allowEmpty',
            defaultValue: false,
            useAsFlag: true,
            useValue: false
        },
        {
            option: 'noVerify',
            defaultValue: false,
            useAsFlag: true,
            useValue: false
        },
        {
            option: 'noStatus',
            defaultValue: false,
            useAsFlag: true,
            useValue: false
        }
    ]);

    var options = argUtil.options;
    var argFlags = argUtil.getArgFlags();
    var args = ['commit'].concat(argFlags);
    if (options.all === false){
        task.files.forEach(function (files) {
            for (var i = 0; i < files.src.length; i++) {
                args.push(files.src[i]);
            }
        });
    }

    args.push(done);

    exec.apply(this, args);
};

module.exports.description = 'Commit a git repository.';

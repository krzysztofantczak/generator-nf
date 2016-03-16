'use strict';

var config = require('../config');
var gulp   = require('gulp');
var del    = require('del');
var args   = require('optimist').argv;

gulp.task('clean', function(cb) {

  var delDir = (args.D) ? args.D : config.dist[args._];

  del([delDir]).then(function(data, err) {
    if(!err) {
      cb(false, 'callback');
    }
  });

});

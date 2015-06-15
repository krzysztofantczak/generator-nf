'use strict';

var config      = require('../config');
var gulp        = require('gulp');
var runSequence = require('run-sequence');
var args        = require('optimist').argv;


gulp.task('dist', ['clean'], function(cb) {

  cb = cb || function() {};

  global.isProd = true;
  global.destPath = (args.D) ? args.D : config.dist.prod;

  runSequence(['styles', 'images', 'fonts', 'views', 'browserify'], 'gzip', cb);

});

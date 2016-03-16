'use strict';

var config      = require('../config');
var gulp        = require('gulp');
var runSequence = require('run-sequence');
var args        = require('optimist').argv;


gulp.task('dev', ['clean'], function(cb) {

  cb = cb || function() {};

  global.isProd = false;
  global.destPath = (args.D) ? args.D : config.dist.dev;

  runSequence(['styles', 'images', 'fonts', 'locales', 'views', 'browserify'], 'watch', cb);

});
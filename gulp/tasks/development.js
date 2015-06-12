'use strict';

var config      = require('../config');
var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev', ['clean'], function(cb) {

  cb = cb || function() {};

  global.isProd = false;
  global.destPath = config.dist.dev;

  runSequence(['styles', 'images', 'fonts', 'views', 'browserify'], 'watch', cb);

});
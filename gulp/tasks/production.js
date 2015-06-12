'use strict';

var config      = require('../config');
var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dist', ['clean'], function(cb) {

  cb = cb || function() {};

  global.isProd = true;
  global.destPath = config.dist.prod;

  runSequence(['styles', 'images', 'fonts', 'views', 'browserify'], 'gzip', cb);

});

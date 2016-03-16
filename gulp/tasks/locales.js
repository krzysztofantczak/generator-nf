'use strict';

var config      = require('../config');
var changed     = require('gulp-changed');
var gulp        = require('gulp');
var gulpif      = require('gulp-if');
var browserSync = require('browser-sync');

gulp.task('locales', function() {

    return gulp.src(config.locales.src)
        .pipe(changed(config.locales.dest)) // Ignore unchanged files
        .pipe(gulp.dest(global.destPath + config.locales.dest))
        .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true })));

});
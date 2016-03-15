'use strict';

var gulp   = require('gulp');
var RevAll = require('gulp-rev-all');
var config = require('../config');

gulp.task('rev', ['browserify'], function () {

    if (global.isProd == true) {

        var revAll = new RevAll({dontRenameFile: [/^\/favicon.ico$/g, '.html', /^\/images\/.*/]});
        return gulp.src([config.dist.root + "/**"])
            .pipe(gulp.dest(config.dist.root))
            .pipe(revAll.revision())
            .pipe(gulp.dest(config.dist.root))
            .pipe(revAll.manifestFile())
            .pipe(gulp.dest(config.dist.root));
    }
});
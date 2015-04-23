'use strict';

module.exports = {

  'serverport': 3000,

  'styles': {
    'src' : 'public/styles/**/*.scss',
    'dest': '.build/css'
  },

  'scripts': {
    'src' : 'src/client/**/*.js',
    'dest': '.build/js'
  },

  'images': {
    'src' : 'public/images/**/*',
    'dest': '.build/images'
  },

  'fonts': {
    'src' : ['public/fonts/**/*'],
    'dest': '.build/fonts'
  },

  'views': {
    'watch': [
      'public/index.html',
      'public/views/**/*.html'
    ],
    'src': 'public/views/**/*.html',
    'dest': 'src/client'
  },

  'gzip': {
    'src': '.build/**/*.{html,xml,json,css,js,js.map}',
    'dest': '.build/',
    'options': {}
  },

  'dist': {
    'root'  : '.build'
  },

  'browserify': {
    'entries'   : ['./src/client/main.js'],
    'bundleName': 'main.js',
    'sourcemap' : true
  },

  'test': {
    'karma': 'test/karma.conf.js',
    'protractor': 'test/protractor.conf.js'
  }

};

'use strict';

module.exports = {

  'serverport': 3000,

  'styles': {
    'src' : 'public/styles/**/*.{scss,sass}',
    'dest': '.dist/css'
  },

  'scripts': {
    'src' : 'src/client/**/*.js',
    'dest': '.dist/js'
  },

  'images': {
    'src' : 'public/images/**/*',
    'dest': '.dist/images'
  },

  'fonts': {
    'src' : ['public/fonts/**/*'],
    'dest': '.dist/fonts'
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
    'src': '.dist/**/*.{html,xml,json,css,js,js.map}',
    'dest': '.dist/',
    'options': {}
  },

  'dist': {
    'root'  : '.dist'
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

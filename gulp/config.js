'use strict';

module.exports = {

  'serverport': 3005,

  'styles': {
    'src' : 'public/styles/**/*.{scss,sass}',
    'dest': '/css'
  },

  'scripts': {
    'src' : 'src/client/**/*.js',
    'dest': '/js'
  },

  'images': {
    'src' : 'public/images/**/*',
    'dest': '/images'
  },

  'fonts': {
    'src' : ['public/fonts/**/*'],
    'dest': '/fonts'
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
    'dest': '/',
    'options': {}
  },

  'dist': {
    'root'  : '.dist',
    'dev': '.dev-dist',
    'prod': '.dist'
  },

  'browserify': {
    'entries'   : ['./src/client/main.js'],
    'bundleName': 'main.js',
    'sourcemap' : true
  },

  'angular': {
    'watch'   : ['./src/client/controllers/**/*.js', './src/client/directives/**/*.js', './src/client/services/**/*.js']
  },

  'test': {
    'karma': 'test/karma.conf.js',
    'protractor': 'test/protractor.conf.js'
  }

};

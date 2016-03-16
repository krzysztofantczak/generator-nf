'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function MainCtrl($interval) {

  // ViewModel
  var vm = this;

  vm.title = 'AngularJS, Gulp, Browserify and Zurb Foundation (with sass)!';
  vm.number = parseInt(Math.random()*(+new Date));

  $interval(function()
  {
    vm.number = parseInt(Math.random()*(+new Date));
  }, 2000);
}

controllersModule.controller('MainCtrl', MainCtrl);

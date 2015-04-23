'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function ExampleCtrl() {

  // ViewModel
  var vm = this;

  vm.title = 'AngularJS, Gulp, and Browserify!!';
  vm.number = 46456456456;

}

controllersModule.controller('ExampleCtrl', ExampleCtrl);

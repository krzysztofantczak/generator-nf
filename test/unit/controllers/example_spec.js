/*global angular */

'use strict';

describe('Unit: ExampleCtrl', function() {

  var ctrl;

  beforeEach(function() {
    // instantiate the app module
    angular.mock.module('app');

    // mock the controller
    angular.mock.inject(function($controller) {
      ctrl = $controller('ExampleCtrl');
    });
  });

  it('should exist', function() {
    expect(ctrl).toBeDefined();
  });

  it('should have a number variable equal to 1234', function() {
    expect(ctrl.number > 0).toBeTruthy();
  });

  it('should have a title variable equal to \'AngularJS, Gulp, Browserify and Zurb Foundation (with sass)!\'', function() {
    expect(ctrl.title).toEqual('AngularJS, Gulp, Browserify and Zurb Foundation (with sass)!');
  });

});
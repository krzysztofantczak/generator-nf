'use strict';

/**
 * @ngInject
 */
function Routes($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider) {

  $locationProvider.html5Mode(true);

  $httpProvider.interceptors.push("JwtAuthInterceptor");

  $stateProvider

    .state('Home', {
      url        : '/',
      controller : 'ExampleCtrl as home',
      templateUrl: 'home.html',
      title      : 'Home'
    });

  $urlRouterProvider.otherwise('/');

}

module.exports = Routes;

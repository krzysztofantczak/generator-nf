'use strict';

/**
 * @ngInject
 */
function Routes($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider) {

  $locationProvider.html5Mode(true);

  $httpProvider.interceptors.push("JwtAuthInterceptor");

  $stateProvider

  // Layouts definition
  //

    .state('main', {
      abstract   : true,
      controller : 'MainCtrl as main',
      templateUrl: 'layouts/main.html'
    })

    .state('classic', {
      abstract   : true,
      templateUrl: 'layouts/classic.html'
    })

    .state('clean', {
      parent     : 'main',
      abstract   : true,
      templateUrl: 'layouts/clean.html'
    })

    .state('home', {
      parent     : 'clean',
      url        : '/',
      controller : 'MainCtrl as home',
      templateUrl: 'home.html',
      title      : 'Home'
    })

    .state('user', {
      parent      : 'clean',
      templateUrl : 'user.html',
      url         : '/user',
      title       : 'User',
      authenticate: true
    })

    .state('user.auth', {
      parent     : 'classic',
      controller : 'AuthCtrl as auth',
      templateUrl: 'user/auth.html',
      url        : '/user/auth',
      title      : 'Auth'
    });

  $urlRouterProvider.otherwise('/');

}

module.exports = Routes;

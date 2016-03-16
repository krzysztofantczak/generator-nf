'use strict';

/**
 * @ngInject
 */
function OnRun($rootScope, config) {

  // change page title based on state
  $rootScope.$on('$stateChangeSuccess', function(event, toState) {
    $rootScope.pageTitle = '';

    if ( toState.title ) {
      $rootScope.pageTitle += toState.title;
      $rootScope.pageTitle += ' \u2014 ';
    }

    $rootScope.pageTitle += config.appTitle;
  });

}

module.exports = OnRun;

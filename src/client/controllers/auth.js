'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function AuthCtrl($scope, $state, user) {

    $scope.user   = user;

    $scope.$root.$on('auth', function(obj)
    {
        if ( $scope.$previousState && $scope.$previousState.name && $scope.$previousState.name != 'Home' && $scope.$previousState.name != 'Recover' )
            $state.go($scope.$previousState.name);
        else
            $state.go('dashboard');
    });

    $scope.$root.$on('auth2f', function(obj)
    {
        //if ( $scope.$previousState && $scope.$previousState.name && $scope.$previousState.name != 'Home' && $scope.$previousState.name != 'Recover' )
        //  $state.go($scope.$previousState.name);
        //else
        $state.go('user.token');
    });

    $scope.signin = function ()
    {
        user.authenticate();
    };

    $scope.verify = function ()
    {
        user.verify();
    };

    if ( user.isLoggedIn )
    {
        if ( $scope.$previousState && $scope.$previousState.name )
            $state.go($scope.$previousState.name);
        else
            $state.go('dashboard');
    }
}

controllersModule.controller('AuthCtrl', AuthCtrl);
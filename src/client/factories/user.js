'use strict';

var factoryModule = require('./_index.js');

/**
 * @ngInject
 */
function UserFactory(config, $http, $state) {

    var user = {};

    user.username = '';
    user.password = '';
    user.forced   = false; // forced logout

    user.isLoggedIn = JSON.parse(window.localStorage.getItem('isLoggedIn')) || false;

    user.authenticate = function () {
        $http.post(config.backendUrl + 'login', {
            username: user.username,
            password: user.password
        }).then(function (res) {
            user.isLoggedIn = ( res.data.token && res.data.token.length > 0 ) ? true : false;

            if (user.isLoggedIn) {
                config.token = res.data.token;

                window.localStorage.setItem('admin', res.data.admin);
                window.localStorage.setItem('username', res.data.username);
                window.localStorage.setItem('token', config.token);
                window.localStorage.setItem('isLoggedIn', true);
                window.localStorage.setItem('messages', JSON.stringify(res.data.messages));

                //user.income   = res.data.income;
                user.messages = res.data.messages;
                user.username = res.data.username;
                user.admin    = res.data.admin;
            }
        })
    };
    user.logout       = function () {
        if (user.isLoggedIn === false) return;

        config.token = false;
        user.isLoggedIn = false;

        window.localStorage.removeItem('token');
        window.localStorage.removeItem('username');
        window.localStorage.removeItem('admin');
        window.localStorage.removeItem('isLoggedIn');
        window.localStorage.removeItem('income');
        window.localStorage.removeItem('messages');

        $state.go('User.auth');
    };

    return user;
}

factoryModule.factory('user', UserFactory);
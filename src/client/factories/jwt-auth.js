'use strict';

var factoriesModule = require('./_index.js');

/**
 * @ngInject
 */
function JwtAuthInterceptorFactory($q, $location, $injector) {

    return {
        'request': function (config) {
            config.headers = config.headers || {};
            //if (window.localStorage.token && window.localStorage.token.length > 0) {
            if (window.localStorage['token'] && window.localStorage['token'].length > 0) {
                //config.headers.Authorization = 'Bearer ' + window.localStorage.token;
                config.headers.Authorization = 'Bearer ' + window.localStorage['token'];
            }
            return config;
        },
        'responseError': function (response) {
            if (response.status === 401 || response.status === 403) {
                $injector.get('user').logout(true);
            }
            return $q.reject(response);
        }
    };
}

factoriesModule.factory('JwtAuthInterceptor', JwtAuthInterceptorFactory);
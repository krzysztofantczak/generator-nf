'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function MainCtrl($interval) {

    var main = this;

    main.test = 'I\'m from MainCtrl';

}

controllersModule.controller('MainCtrl', MainCtrl);
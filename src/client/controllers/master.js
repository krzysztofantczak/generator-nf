'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function MasterCtrl() {

    var main = this;

    main.test = 'I\'m from MasterCtrl';

}

controllersModule.controller('MasterCtrl', MasterCtrl);
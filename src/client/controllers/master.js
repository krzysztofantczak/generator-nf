'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function MasterCtrl($scope, $i18next) {

    var vm = $scope;
    vm.lang = 'en';

    vm.changeLng = function (lng)
    {
        vm.lang = lng;

        $i18next.options.postProcess = '';
        $i18next.options.lng = lng;
        //console.log($i18next.debugMsg[$i18next.debugMsg.length - 1]);
    };

    vm.test = 'I\'m from MasterCtrl';

}

controllersModule.controller('MasterCtrl', MasterCtrl);
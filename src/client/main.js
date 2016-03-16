'use strict';

require('angular');

window.i18next = require('i18next-client'); // ugly window hack
window.angular = angular;

// angular modules
require('angular-sanitize');
require('ng-i18next');
require('angular-foundation');
require('angular-ui-router');
require('./templates');
require('./controllers/_index');
require('./services/_index');
require('./directives/_index');

angular.module('jm.i18next').config(['$i18nextProvider', function ($i18nextProvider) {
  $i18nextProvider.options = {
    lng: 'en',
    useCookie: true,
    useLocalStorage: true,
    fallbackLng: 'pl',
    resGetPath: '/locales/__lng__/__ns__.json',
    defaultLoadingValue: '' // ng-i18next option, *NOT* directly supported by i18next
  };
}]);


// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
    'ngSanitize',
    'mm.foundation',
    'jm.i18next',
    'ui.router',
    'templates',
    'app.controllers',
    'app.services',
    'app.directives'
  ];

  // mount on window for testing
  window.app = angular.module('app', requires);

  angular.module('app').constant('AppSettings', require('./config'));

  angular.module('app').config(require('./routes'));

  angular.module('app').run(require('./on_run'));

  angular.bootstrap(document, ['app']);

});

'use strict';

var bulk = require('bulk-require');

module.exports = angular.module('app.factories', []);

bulk(__dirname, ['./**/!(*_index|*.spec).js']);
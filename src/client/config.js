'use strict';

var AppSettings = {

  appTitle  : 'Example Application',
  apiUrl    : '/api/v1',
  token     : window.localStorage.getItem('token') || '',

  backendUrl: (document.location.hostname == 'localhost') ? 'http://localhost:8050/api/'    : 'example.com'

};

module.exports = AppSettings;

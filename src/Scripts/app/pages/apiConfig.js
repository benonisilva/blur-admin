/**
 * @author benonims
 * created on 15.12.2016
 */
(function () {
  
  'use strict';

  var URL = '/';
  var apiUrl = 'http://localhost:1119/';

  angular.module('BlurAdmin.pages')
    .constant('apiConfig', {
      url: URL,
      api : apiUrl
    });

})();

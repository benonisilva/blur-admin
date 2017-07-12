/**
 * @author benonims
 * created on 15.12.2016
 */
(function () {
  
  'use strict';

  var URL = '/';
  var apiUrl = '/procon-mobile/';

  angular.module('BlurAdmin.pages')
    .constant('apiConfig', {
      url: URL,
      api : apiUrl
    });

})();

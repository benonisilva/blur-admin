/**
 * @author benoims
 * created on 28/02
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
    .factory('HttpInterceptor', HttpInterceptor);

  /** @ngInject */
  function HttpInterceptor($rootScope, $q, $timeout) {
    return {
      'request': function (config) {
      	$rootScope.isLoading = true;
      	//console.log("HttpInterceptor.request");
      	return config || $q.when(config); 
      },
      'requestError': function (rejection) {
            /*...*/
            $rootScope.isLoading = false;  
            console.log("HttpInterceptor.requestError");
            console.log(rejection);
            return $q.reject(rejection);
      },
      'response': function (response) {       

            $rootScope.isLoading = false;       // done loading
            //console.log("HttpInterceptor.response");
            return response || $q.when(response);
        },
        'responseError': function (rejection) {
            /*...*/
            $rootScope.isLoading = false;
            console.log("HttpInterceptor.responseError");
            console.log(rejection);
            if(rejection.status===404){
              alert("Não tem permissão");
            }
            return $q.reject(rejection);
        }
    }
  }

})();

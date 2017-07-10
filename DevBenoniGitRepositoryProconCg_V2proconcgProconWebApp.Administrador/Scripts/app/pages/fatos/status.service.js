/**
 * @author benonims
 * created on 12/12/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.fatos')
    .service('statusFatosService', statusFatosService);

  /** @ngInject */
  function statusFatosService($http) {
  
    return {
      getStatus : function () {
				return $http.get("/Status/Listar");
        
      }
    }

  }

})();
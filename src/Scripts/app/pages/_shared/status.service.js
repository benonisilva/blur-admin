/**
 * @author benonims
 * created on 12/12/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.shared.forms')
    .service('statusListService', statusListService);

  /** @ngInject */
  function statusListService($http,apiConfig) {
  
    return {
      getStatus : function (tipoId) {
        return $http.get(apiConfig.url+"Status/Listar?tipoId="+tipoId,  { cache: false} );
        
      }
    }

  }

})();
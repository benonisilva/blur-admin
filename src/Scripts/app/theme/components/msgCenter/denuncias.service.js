/**
 * @author benonims
 * created on 22/06/17
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components')
    .service('denunciasMsgService', denunciasMsgService);

  /** @ngInject */
  function denunciasMsgService($http,apiConfig) {
  
    return {
      getFatos : function(statusId){
          return $http.get(apiConfig.url+"Fato/Status?statusId="+statusId)
      },
    }

  }

})();
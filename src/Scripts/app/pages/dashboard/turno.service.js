/**
 * @author benonims
 * created on 12/29/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
    .factory('turnoService', turnoService);

  /** @ngInject */
  function turnoService($http,$q,apiConfig) {

    return{
      getAgentes : function(){
          return $http.get(apiConfig.url+"Agente/Listar/")
      }

    }

  }

})();
/**
 * @author benonisilva
 * created on 14/11/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.shared.forms')
    .factory('fatosService', fatosService);

  /** @ngInject */
  function fatosService($q,$http,apiConfig) {

     return{
      getHistorico : function(tipoId){
        return $http.get(apiConfig.url+"Fato/Historico?="+idFato)
      },
      getFatoById : function(id){
        return $http.get(apiConfig.url+"Fato?id="+id)
      },
      getFatos : function(tipoId){
          return $http.get(apiConfig.url+"Fato/Listar?tipoId="+tipoId)
      },
      getFatosFinalizados : function(tipoId){
          return $http.get(apiConfig.url+"Fato/Finalizados")
      },
      setStatus : function(id,novoStatus){
          return $http.post(apiConfig.url+"Fato/EditarStatus?id="+id,novoStatus);
      },
      getAnexos : function(id){
         return $http.get(apiConfig.api+"Administrador/Anexos?fatoId="+id)
      },
      getByStatus : function (id,tipo) {
        return $http.get(apiConfig.url+"Fato/Status?statusId="+id+"&tipoId="+tipo)
      },
      getTrotes : function () {
        return $http.get(apiConfig.url+"Fato/Trotes")
      }
    }

  }

})();
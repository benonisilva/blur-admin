/**
 * @author benonisilva
 * created on 14/11/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.fatos')
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
      setStatus : function(id,novoStatus){
          return $http.post(apiConfig.url+"Fato/EditarStatus?id="+id,novoStatus);
      },
      getAnexos : function(id){
         return $http.get(apiConfig.api+"Administrador/Anexos?fatoId="+id)
      },
      getByStatus : function (id) {
        return $http.get(apiConfig.url+"Fato/Status?statusId="+id)
      }
    }

  }

})();
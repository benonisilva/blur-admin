/**
 * @author benonims
 * created on 12/29/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.autos')
    .factory('autoConstatacaoService', autoConstatacaoService);

  /** @ngInject */
  function autoConstatacaoService($http,$q,apiConfig) {

    return{
      
      getFatoById : function(id){
          return $http.get(apiConfig.url+"Fato?id="+id)
      },
      getAutos : function(){
          return $http.get(apiConfig.url+"Auto/Listar/")
      },
      getAutosFinalizados : function(){
          return $http.get(apiConfig.url+"Auto/Finalizados/")
      },
      getAutoById : function(id){
      	return $http.get(apiConfig.url+"Auto?id="+id)
      },
      
      salvarAutoConstatacao : function(auto){
      	return $http.post(apiConfig.url+"Auto/Adicionar",auto)
      },
      
      removerAuto : function(id){
      	return $http.get(apiConfig.url+"Auto/Remover?id="+id)
      },
      
      gerarAuto : function(id){
      	return $http.get(apiConfig.url+"Auto/GerarAuto?id="+id)
      },
      
      getAgentes : function () {
         return $http.get(apiConfig.url+"Agente/Listar/")
      },
      
      setFinaliza : function (dados) {
         return $http.post(apiConfig.url+"Auto/FinalizarDenuncia",dados)
      }

    }

  }

})();
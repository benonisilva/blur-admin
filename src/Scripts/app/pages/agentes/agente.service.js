/**
 * @author benonims
 * created on 12/29/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.agentes')
    .factory('AgenteService', agenteService);

  /** @ngInject */
  function agenteService($http,$q,apiConfig) {

    return{
      getAll : function(){
          return $http.get(apiConfig.url+"Agente/Listar/")
      },
      getById : function(id){
      	return $http.get(apiConfig.url+"Agente?id="+id)
      },
      save : function(agente){
      	console.log(agente);
        return $http.post(apiConfig.url+"Agente/Adicionar",agente)
      },
      remove : function(id){
      	return $http.delete(apiConfig.url+"Agente/Deletar/"+id)
      },
      editar : function(agente){
      	return $http.post(apiConfig.url+"Agente/Editar",agente)
      }

    }

  }

})();
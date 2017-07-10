/**
 * @author benonims
 * created on 05-07-17
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.agentes')
    .controller('EditarAgenteCtrl', EditarAgenteCtrl);

  /** @ngInject */
  function EditarAgenteCtrl(agente,AgenteService) {
    
  	var vm = this;
  	vm.agente = agente.data.agente;
    
  }

})();
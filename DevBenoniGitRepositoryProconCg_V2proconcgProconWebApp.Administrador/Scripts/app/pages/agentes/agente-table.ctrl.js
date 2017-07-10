/**
 * @author benonims
 * created on 27.02.17
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.agentes')
    .controller('AgenteTableCtrl', AgenteTableCtrl);

  /** @ngInject */
  function AgenteTableCtrl(agentes,AgenteService) {
    
  	var vm = this;
  	vm.agentes = agentes.data.agentes;
    
  }

})();
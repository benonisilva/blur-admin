/**
 * @author benonims
 * created on 28.12.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.fatos')
    .controller('FatosCtrl', FatosCtrl);
  /** @ngInject */
  function FatosCtrl(fatos,statusFatosService) {
    console.log("FatosCtrl:Init");
  	var vm = this;
    vm.status = statusFatosService.getStatus();
    vm.statusNome = "";
    vm.fatos = fatos.data.fatos;
    console.log(fatos.data.fatos);
  }

})();

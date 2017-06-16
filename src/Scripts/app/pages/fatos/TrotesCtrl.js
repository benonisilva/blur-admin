/**
 * @author benonims
 * created on 13.06.2017
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.fatos')
    .controller('TrotesCtrl', TrotesCtrl);
  /** @ngInject */
  function TrotesCtrl(fatos) {
    console.log("FinalizadosCtrl:Init");
  	
    var vm = this;
    vm.isFinalizados = true;
    vm.isAveriguando = false;
    vm.fatos = fatos.data.fatos;

  }

})();

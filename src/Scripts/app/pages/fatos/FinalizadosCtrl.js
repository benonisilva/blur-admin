/**
 * @author benonims
 * created on 13.06.2017
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.fatos')
    .controller('FinalizadosCtrl', FinalizadosCtrl);
  /** @ngInject */
  function FinalizadosCtrl(fatos) {
    console.log("FinalizadosCtrl:Init");
  	
    var vm = this;
    vm.fatos = fatos.data.fatos;

  }

})();

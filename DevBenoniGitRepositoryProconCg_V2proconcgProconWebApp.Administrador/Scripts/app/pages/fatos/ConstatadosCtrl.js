/**
 * @author benonims
 * created on 28.12.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.fatos')
    .controller('ConstatadosCtrl', ConstatadosCtrl);
  /** @ngInject */
  function ConstatadosCtrl(fatos) {
    console.log("ConstatadosCtrl:Init");
  	
    var vm = this;
    vm.isFinalizados = false;
    vm.isAveriguando = true;
    vm.fatos = fatos.data.fatos;

  }

})();

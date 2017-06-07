/**
 * @author benonims
 * created on 28.12.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.fatos')
    .controller('FatosCtrl', FatosCtrl);
  /** @ngInject */
  function FatosCtrl(fatos,status) {
    console.log("FatosCtrl:Init");
  	
    var vm = this;

    vm.statusNome = "";
    vm.fatos = fatos.data.fatos;
    vm.status = status.data.lista;
    console.log(fatos.data.fatos);
    console.log(status.data.lista);
    

  }

})();

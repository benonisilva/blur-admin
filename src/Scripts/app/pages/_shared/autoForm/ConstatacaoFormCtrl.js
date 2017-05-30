(function () {
    'use strict';
    angular.module("BlurAdmin.pages.shared.forms").
      controller("ConstatacaoFormCtrl",ConstatacaoFormCtrl);
      
      /** @ngInject */
      function ConstatacaoFormCtrl($scope) {
          var vm = this;
          vm.autoData.DataAutuacao = new Date(Date.now());
          vm.salvarAuto = function () {
              console.log("AutoConstatacaoFormCtrl:salvarAuto");
              vm.enviar();
          }
          console.log("AutoConstatacaoFormCtrl:Init");
          console.log(vm);
      }
})();
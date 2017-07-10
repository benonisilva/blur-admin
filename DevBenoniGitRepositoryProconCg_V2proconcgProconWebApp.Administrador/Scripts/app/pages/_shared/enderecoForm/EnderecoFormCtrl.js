(function () {
    'use strict';
    angular.module("BlurAdmin.pages.shared.forms").
      controller("EnderecoFormCtrl",EnderecoFormCtrl);
      
      /** @ngInject */
      function EnderecoFormCtrl($scope) {
          var vm = this;
          console.log("EnderecoFormCtrl:Init");
          //vm.endereco = vm.enderecoData;
          console.log(vm);
      }
})();
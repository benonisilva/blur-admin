(function () {
    'use strict';
    angular.module("BlurAdmin.pages.shared.forms").
      controller("EmpresaFormCtrl",EmpresaFormCtrl);
      
      /** @ngInject */
      function EmpresaFormCtrl($scope) {
          var vm = this;
          console.log("EmpresaFormCtrl:Init");
          console.log(vm);
      }
})();
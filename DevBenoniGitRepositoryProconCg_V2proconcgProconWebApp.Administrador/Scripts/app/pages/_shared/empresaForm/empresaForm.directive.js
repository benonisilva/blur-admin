(function () {
    'use strict';
    angular.module("BlurAdmin.pages.shared.forms").
      directive('empresaForm',empresaForm);

      /** @ngInject */
      function empresaForm() {
        return {
          restrict: 'EA',
          controller: 'EmpresaFormCtrl as vm',
          bindToController: true,
          templateUrl: 'Scripts/app/pages/_shared/empresaForm/empresaForm.html',
          scope: {
            
            empresaData : '=',

          }
       };
      }
})();
(function () {
    'use strict';
    angular.module("BlurAdmin.pages.shared.forms").
      directive('enderecoForm',enderecoForm);

      /** @ngInject */
      function enderecoForm() {
        return {
          restrict: 'EA',
          controller: 'EnderecoFormCtrl as vm',
          bindToController: true,
          templateUrl: 'Scripts/app/pages/_shared/enderecoForm/enderecoForm.html',
          scope: {
            
            enderecoData : '=',

          }
       };
      }
})();
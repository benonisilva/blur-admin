(function () {
    'use strict';
    angular.module("BlurAdmin.pages.shared.forms").
      directive('constatacaoForm',constatacaoForm);

      /** @ngInject */
      function constatacaoForm() {
        return {
          restrict: 'EA',
          controller: 'ConstatacaoFormCtrl as vm',
          bindToController: true,
          templateUrl: 'Scripts/app/pages/_shared/autoForm/constatacaoForm.html',
          scope: {
            
            autoData : '=',
            enviar : '&',
            agentes: '='

          }
       };
      }
})();

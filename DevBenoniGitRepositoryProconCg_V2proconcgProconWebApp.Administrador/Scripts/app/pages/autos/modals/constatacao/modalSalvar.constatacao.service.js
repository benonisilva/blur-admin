/**
 * @author benonims
 * created on 23/03/17
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.autos')
    .service('salvarModalsService', salvarModalsService);

  /** @ngInject */
  function salvarModalsService($uibModal) {
      this.open = function(auto){
        return $uibModal.open({
          animation: false,
          templateUrl: 'Scripts/app/pages/autos/modals/constatacao/modal-salvar-auto.html',
          controller: 'SalvarAutoConstatacaoCtrl',
          controllerAs: 'boxCtrl',
          resolve: {
            auto: function () {
              return auto;
            }
          }
        });
      }

  }

})();
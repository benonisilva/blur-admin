/**
 * @author benonims
 * created on 23/03/17
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.autos')
    .service('removerModalsService', removerModalsService);

  /** @ngInject */
  function removerModalsService($uibModal) {
      this.open = function(auto){
        return $uibModal.open({
          animation: false,
          templateUrl: 'Scripts/app/pages/autos/modals/constatacao/modal-remover-auto.html',
          controller: 'RemoverAutoCtrl',
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
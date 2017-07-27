/**
 * @author benonims
 * created on 27/07/17
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
    .service('adicionaTurnoModalService', adicionaTurnoModalService);

  /** @ngInject */
  function adicionaTurnoModalService($uibModal) {
      this.open = function(intervalo){
        return $uibModal.open({
          animation: false,
          templateUrl: 'Scripts/app/pages/dashboard/modal-turno-popup.html',
          controller: 'AdicionaTurnoCtrl',
          controllerAs: 'boxCtrl',
          size : 'lg',
          resolve: {
            agentes: function (turnoService) {
              return  turnoService.getAgentes()
            },
            intervalo : function (){
              return intervalo
            }
          }
        });
      }

  }

})();
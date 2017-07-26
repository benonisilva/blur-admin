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
      this.open = function(auto){
        return $uibModal.open({
          animation: false,
          templateUrl: 'Scripts/app/pages/dashboard/modal-turno-popup.html',
          controller: 'AdicionaTurnoCtrl',
          controllerAs: 'boxCtrl',
          size : 'lg',
          resolve: {
            agentes: function (turnoService) {
              return   {
                  data:
                  {
                      data:{
                          agentes:[
                              {AgenteId:1,Nome:"José da silva xavier"},
                              {AgenteId:2,Nome:"Shirleru da silva pereira gosis"}, 
                              {AgenteId:1,Nome:"primeiro"},
                              {AgenteId:2,Nome:"segundo"},
                               {AgenteId:1,Nome:"primeiro"},
                              {AgenteId:2,Nome:"segundo"},
                               {AgenteId:1,Nome:"primeiro"},
                              {AgenteId:2,Nome:"segundo"},
                               {AgenteId:1,Nome:"primeiro"},
                              {AgenteId:2,Nome:"segundo"},
                               {AgenteId:1,Nome:"primeiro"},
                              {AgenteId:2,Nome:"segundo"},
                               {AgenteId:1,Nome:"primeiro"},
                              {AgenteId:2,Nome:"segundo"},
                               {AgenteId:1,Nome:"primeiro"},
                              {AgenteId:2,Nome:"segundo"},
                              {AgenteId:2,Nome:"segundo"},
                              {AgenteId:2,Nome:"segundo"},
                              {AgenteId:2,Nome:"segundo"},
                              {AgenteId:2,Nome:"segundo"},
                              {AgenteId:2,Nome:"segundo"},
                            ]
                    }
                }
               }
            }
          }
        });
      }

  }

})();
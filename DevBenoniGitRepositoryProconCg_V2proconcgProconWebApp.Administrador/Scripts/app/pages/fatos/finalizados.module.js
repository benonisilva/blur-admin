/**
 * @author benonims
 * created on 13.06.2017
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.fatos.finalizados', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('fatos.finalizados', {
          url: '/finalizados',
          templateUrl: 'Scripts/app/pages/fatos/lista-fatos.html',
          title: 'Finalizados',
          controller : 'FinalizadosCtrl',
          controllerAs : 'vm',
          resolve : {
            fatos : function(fatosService) {
                return fatosService.getFatosFinalizados();
            },
     
          },
          sidebarMeta: {
            order: 400,
          },
        });
  }
})();

/**
 * @author benonims
 * created on 11/02/17
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.fatos.reclamacoes', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('fatos.reclamacoes', {
          url: '/reclamacoes',
          templateUrl: 'Scripts/app/pages/fatos/lista-fatos.html',
          title: 'Reclamações',
          controller : 'FatosCtrl',
          controllerAs : 'vm',
          resolve : {
            fatos : function(fatosService){
                  return fatosService.getFatos(2)
            }
          },
          sidebarMeta: {
            order: 200,
          },
        });
  }
})();

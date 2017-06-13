/**
 * @author benonims
 * created on 11/02/17
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.fatos.constatados', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('fatos.constatados', {
          url: '/constatados',
          templateUrl: 'Scripts/app/pages/fatos/lista-fatos.html',
          title: 'Em Averiguação',
          controller : 'ConstatadosCtrl',
          controllerAs : 'vm',
          resolve : {

            fatos : function(fatosService) {
                return fatosService.getByStatus(4);
              }
            ,
            
          },
          sidebarMeta: {
            order: 300,
          },
        });
  }
})();

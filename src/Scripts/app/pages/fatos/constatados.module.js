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
          title: 'Fatos Constatados',
          controller : 'ConstatadosCtrl',
          controllerAs : 'vm',
          resolve : {

            fatos : function(fatosService) {
                var constatacao = [{StatusFatoId:6}];
                return fatosService.getByStatus(6);
              }
            ,
            
          },
          sidebarMeta: {
            order: 300,
          },
        });
  }
})();

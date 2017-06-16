/**
 * @author benonims
 * created on 10/02/17
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.fatos.trotes', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('fatos.trotes', {
          url: '/trotes',
          templateUrl: 'Scripts/app/pages/fatos/lista-fatos.html',
          title: 'Trotes',
          controller : 'TrotesCtrl',
          controllerAs : 'vm',
          resolve : {
            fatos : function(fatosService){
                  return fatosService.getTrotes();
            }
          },
          sidebarMeta: {
            order: 500,
          },
        });
  }

})();

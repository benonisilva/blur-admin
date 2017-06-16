/**
 * @author benonims
 * created on 10/02/17
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.fatos.denuncias', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('fatos.denuncias', {
          url: '/denuncias',
          templateUrl: 'Scripts/app/pages/fatos/lista-fatos.html',
          title: 'Denúncias',
          controller : 'FatosCtrl',
          controllerAs : 'vm',
          resolve : {
            fatos : function(fatosService){
                  return fatosService.getFatos(1);
            },
            status : function (statusFatosService) {
              return statusFatosService.getStatus();
            } 
          },
          sidebarMeta: {
            order: 200,
          },
        });
  }

})();

/**
 * @author benonims
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.fatos', [
    'BlurAdmin.pages.fatos.denuncias',
    'BlurAdmin.pages.fatos.reclamacoes',
     'BlurAdmin.pages.fatos.constatados',
     'BlurAdmin.pages.fatos.finalizados',
     'BlurAdmin.pages.fatos.trotes'
  ])
  .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('fatos', {
          url: '/fatos',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: 'Fatos Enviados',
          sidebarMeta: {
            icon: 'ion-android-laptop',
            order: 100,
          },
    }).state('fatos.detalhes',{
          url : '/:id',
          templateUrl : 'Scripts/app/pages/fatos/fatos-detalhes.html',
          title : 'Detalhes',
          controller : 'FatosDetalheCtrl',
          controllerAs : 'vm',
          resolve : {
            fato : function(fatosService,$stateParams){
              return fatosService.getFatoById($stateParams.id)
            },
            status : function(statusFatosService){
              return statusFatosService.getStatus()
            }
          }

        });
  }

})();

/**
 * @author benonims
 * created on 20.02.17
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.agentes', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('agentes', {
          url: '/agentes',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: 'Agentes',
          sidebarMeta: {
            icon: 'ion-document',
            order: 250,
          },
        })
        .state('agentes.list', {
          url: '/list',
          templateUrl: 'Scripts/app/pages/agentes/agente-table.html',
          controller : 'AgenteTableCtrl',
          controllerAs : 'vm',
          title: 'Agentes',
          sidebarMeta: {
            order: 0,
          },
          resolve : {
            agentes : function(AgenteService){
              return AgenteService.getAll();
            }
          }
        })
        .state('agentes.adicionar',
        {
          url: '/adicionar/:id',
          templateUrl: 'Scripts/app/pages/agentes/adiciona-agente.html',
          controller: 'AdicionaAgenteCtrl',
          controllerAs: 'vm',
          title: 'Adiciona Agente',
          sidebarMeta: {
            order: 200,
          },
        });
  }
})();

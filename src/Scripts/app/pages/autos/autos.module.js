/**
 * @author benonims
 * created on 16.12.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.autos', ['BlurAdmin.pages.shared.forms'])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('autos', {
          url: '/autos',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: 'Diligências',
          sidebarMeta: {
            icon: 'ion-document',
            order: 250,
          },
        })

        .state('autos.finalizar', {
          url: '/finalizar/:id',
          templateUrl: 'Scripts/app/pages/autos/constatacao/finalizar.html',
          controller : 'FinalizarDenunciaCtrl',
          controllerAs : 'vm',
          title: 'Finalizar Diligência',
          resolve : {
            ConstatacaoId : function($stateParams){
              return $stateParams.id
            }
          }
        })
        
        .state('autos.constatacao', {
          url: '/constatacao',
          templateUrl: 'Scripts/app/pages/autos/constatacao/lista.html',
          controller : 'AutoConstatacaoListaCtrl',
          controllerAs : 'vm',
          title: 'Em Andamento',
          sidebarMeta: {
            order: 0,
          },
          resolve : {
            autos : function(autoConstatacaoService){
              console.log("resolve:autos.constatacao")
              return autoConstatacaoService.getAutos()
            }, 
            agentes : function(autoConstatacaoService) {
              return autoConstatacaoService.getAgentes()
            }
          }
        })

        .state('autos.finalizados', {
          url: '/autosfinalizados',
          templateUrl: 'Scripts/app/pages/autos/constatacao/lista-finalizados.html',
          controller : 'AutosFinalizadosListaCtrl',
          controllerAs : 'vm',
          title: 'Concluidas',
          sidebarMeta: {
            order: 100,
          },
          resolve : {
            autos : function(autoConstatacaoService){
              console.log("resolve:autos.autosfinalizados")
              return autoConstatacaoService.getAutosFinalizados()
            }, 
            agentes : function(autoConstatacaoService) {
              return autoConstatacaoService.getAgentes()
            }
          }
        })
       
        .state('autos.constatacaoForm',
        {
          url: '/constatacaoForm/:fatoId/:autoId',
          templateUrl: 'Scripts/app/pages/autos/constatacao/constatacao.form.html',
          controller: 'AutoConstatacaoCriarCtrl',
          controllerAs: 'vm',
          title: 'Criar Diligência',
          resolve : {
            fato : function($stateParams,autoConstatacaoService){
              return autoConstatacaoService.getFatoById($stateParams.fatoId)
            },
            auto : function($stateParams,autoConstatacaoService){
               return autoConstatacaoService.getAutoById($stateParams.autoId)
            },
            agentes : function(autoConstatacaoService) {
                return autoConstatacaoService.getAgentes()
            },
          },

        });
  }
})();

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
          title: 'Formulários',
          sidebarMeta: {
            icon: 'ion-document',
            order: 250,
          },
        })
        .state('autos.constatacao', {
          url: '/constatacao',
          templateUrl: 'Scripts/app/pages/autos/constatacao/lista.html',
          controller : 'AutoConstatacaoListaCtrl',
          controllerAs : 'vm',
          title: 'Formularios de Constatação',
          sidebarMeta: {
            order: 0,
          },
          resolve : {
            autos : function(autoConstatacaoService){
              console.log("resolve:autos.constatacao")
              return autoConstatacaoService.getAutos()
            }
          }
        })
        // .state('autos.infracao', {
        //   url: '/infracao',
        //   templateUrl: 'Scripts/app/pages/autos/infracao/lista.html',
        //   controller : 'AutoInfracaoListaCtrl',
        //   controllerAs : 'vm',
        //   title: 'Formulário de Infração',
        //   sidebarMeta: {
        //     order: 1,
        //   },
        //   resolve : {
        //     autos : function(autoConstatacaoService){
        //       console.log("resolve:autos.infracao")
        //       return autoConstatacaoService.getAutos()
        //     }
        //   }
        // })
        // .state('autos.infracaoForm',
        // {
        //   url: '/infracaoForm/:id/:autoId',
        //   templateUrl: 'Scripts/app/pages/autos/constatacao/constatacao.form.html',
        //   controller: 'AutoConstatacaoCriarCtrl',
        //   controllerAs: 'vm',
        //   title: 'Criar Formulário de Infração',
        //   resolve : {
        //     empresa : function($stateParams,autoConstatacaoService){
        //       return autoConstatacaoService.getEmpresaById($stateParams.id)
        //     },
        //     auto : function($stateParams,autoConstatacaoService){
        //        return autoConstatacaoService.getAutoById($stateParams.autoId)
        //     }
        //   },
        //   sidebarMeta: {
        //     order: 200,
        //   },
        // })
        .state('autos.constatacaoForm',
        {
          url: '/constatacaoForm/:fatoId/:autoId',
          templateUrl: 'Scripts/app/pages/autos/constatacao/constatacao.form.html',
          controller: 'AutoConstatacaoCriarCtrl',
          controllerAs: 'vm',
          title: 'Criar Formulário de Constatação',
          resolve : {
            fato : function($stateParams,autoConstatacaoService){
              return autoConstatacaoService.getFatoById($stateParams.fatoId)
            },
            auto : function($stateParams,autoConstatacaoService){
               return autoConstatacaoService.getAutoById($stateParams.autoId)
            }
          },
          sidebarMeta: {
            order: 200,
          },
        });
  }
})();

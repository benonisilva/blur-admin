/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.reclamacoes', ['BlurAdmin.pages.shared.forms'])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('components.reclamacoes', {
          url: '/reclamacoes',
          abstract: true,
          templateUrl: 'Scripts/app/pages/components/mail/reclamacoes.html',
          controller: "MailTabCtrl",
          controllerAs: "tabCtrl",
          title: 'Reclamações',
          resolve : { dados : function (mailMessages) {
              return mailMessages.promise(2);
           } 
          },
          
          sidebarMeta: {
            order: 100,
          },
        }).state('components.reclamacoes.label', {
          url: '/:status',
          templateUrl: 'Scripts/app/pages/components/mail/list/reclamacoesList.html',
          title: 'Situação',
          controller: "MailListCtrl",
          controllerAs: "vm",
          resolve : { fatos : function ($stateParams,mailMessages){
            return mailMessages.getMessagesByLabel($stateParams.status,2);
          }}
        }).state('components.reclamacoes.detail', {
          url: '/:status/:id',
          templateUrl: 'Scripts/app/pages/components/mail/detail/mailDetail.html',
          title: 'Detalhes',
          controller: "MailDetailCtrl",
          controllerAs: "vm",
          resolve : {
            fato : function ($stateParams,mailMessages,statusListService) {
              return  mailMessages.getMessageById($stateParams.id);
            },
            // status : function () {
            //   return mailMessages.promise();
            // }
          }
        });
    $urlRouterProvider.when('/components/reclamacoes','/components/reclamacoes/1');
  }

})();

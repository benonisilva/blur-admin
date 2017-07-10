/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.mail', ['BlurAdmin.pages.shared.forms'])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('components.mail', {
          url: '/mail',
          abstract: true,
          templateUrl: 'Scripts/app/pages/components/mail/mail.html',
          controller: "MailTabCtrl",
          controllerAs: "tabCtrl",
          title: 'Denúncias',
          resolve : { dados : function (mailMessages) {
              return mailMessages.promise(1);
           } 
          },
          
          sidebarMeta: {
            order: 0,
          },
        }).state('components.mail.label', {
          url: '/:status',
          templateUrl: 'Scripts/app/pages/components/mail/list/mailList.html',
          title: 'Denúncias',
          controller: "MailListCtrl",
          controllerAs: "vm",
          resolve : { fatos : function ($stateParams,mailMessages){
            return mailMessages.getMessagesByLabel($stateParams.status,1);
          }}
        }).state('components.mail.detail', {
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
    $urlRouterProvider.when('/components/mail','/components/mail/1');
  }

})();

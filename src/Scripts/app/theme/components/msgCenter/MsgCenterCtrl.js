/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .controller('MsgCenterCtrl', MsgCenterCtrl);

  /** @ngInject */
  function MsgCenterCtrl($scope, $sce) {
    $scope.users = {
      0: {
        name: 'Vlad',
      },
      1: {
        name: 'Kostya',
      },
      2: {
        name: 'Andrey',
      },
      3: {
        name: 'Nasta',
      }
    };

    $scope.notifications = [
      {
        userId: 0,
        template: '&name posted a new article.',
        time: '1 min ago'
      },
      {
        userId: 1,
        template: '&name changed his contact information.',
        time: '2 hrs ago'
      },
      {
        image: 'assets/img/shopping-cart.svg',
        template: 'New orders received.',
        time: '5 hrs ago'
      },
      {
        userId: 2,
        template: '&name replied to your comment.',
        time: '1 day ago'
      },
      {
        userId: 3,
        template: 'Today is &name\'s birthday.',
        time: '2 days ago'
      },
      {
        image: 'assets/img/comments.svg',
        template: 'New comments on your post.',
        time: '3 days ago'
      },
      {
        userId: 1,
        template: '&name invited you to join the event.',
        time: '1 week ago'
      }
    ];

    $scope.messages = [
      {
        userId: 3,
        text: 'Produtos Vencidos. Rua: Dom Pedro II, n. 1200.',
        time: 'há 1 min. atras'
      },
     {
        userId: 3,
        text: 'Produtos Vencidos. Rua: Dom Pedro II, n. 1200.',
        time: 'há 1 min. atras'
      },
      {
        userId: 3,
        text: 'Produtos Vencidos. Rua: Dom Pedro II, n. 1200.',
        time: 'há 1 min. atras'
      },
      {
        userId: 3,
        text: 'Produtos Vencidos. Rua: Dom Pedro II, n. 1200.',
        time: 'há 1 min. atras'
      },
      {
        userId: 3,
        text: 'Produtos Vencidos. Rua: Dom Pedro II, n. 1200.',
        time: 'há 1 min. atras'
      },
    ];

    $scope.getMessage = function(msg) {
      var text = msg.template;
      if (msg.userId || msg.userId === 0) {
        text = text.replace('&name', '<strong>' + $scope.users[msg.userId].name + '</strong>');
      }
      return $sce.trustAsHtml(text);
    };
  }
})();
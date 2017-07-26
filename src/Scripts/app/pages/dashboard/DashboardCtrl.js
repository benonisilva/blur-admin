/**
 * @author benonims
 * created on 17/07/17
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardCtrl', DashboardCtrl);

  /** @ngInject */
  function DashboardCtrl($timeout) {

    console.log("DashboardCtrl:dados");
    var vm = this;
  }

})();

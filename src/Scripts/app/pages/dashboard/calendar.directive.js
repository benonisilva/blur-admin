/**
 * @author benonims
 * created on 26.07.17
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('dashboardCalendar', dashboardCalendar);

  /** @ngInject */
  function dashboardCalendar() {
    return {
      restrict: 'E',
      controller: 'CalendarCtrl as vm',
      template: '<div id="calendar" class="blurCalendar"></div>'
    };
  }
})();
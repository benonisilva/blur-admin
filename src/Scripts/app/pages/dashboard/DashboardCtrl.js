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
    
    vm.simpleBarOptions = {
      fullWidth: true,
      height: "300px"
    };
    
    vm.simpleBarData = {
      labels: ['Junho', 'Julho', 'Agosto', 'Setembro', 'Novembro', 'Dezembro'],
      series: [
        [15, 24, 43, 27, 5, 10],
        [13, 22, 49, 22, 4, 6]
      ]
    };

     $timeout(function(){
         new Chartist.Bar('#simple-bar', vm.simpleBarData, vm.simpleBarOptions);
     });
  }

})();

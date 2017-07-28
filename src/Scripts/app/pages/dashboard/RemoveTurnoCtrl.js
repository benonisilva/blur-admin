/**
 * @author benonims
 * created on 28.07.2017
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('RemoveTurnoCtrl', RemoveTurnoCtrl);

  /** @ngInject */
  function RemoveTurnoCtrl($scope,turnoId,turnoService,$state,$uibModalInstance) {
    console.log("RemoveTurnoCtrl:dados");
    var boxCtrl = this;
    console.log(turnoId);
    boxCtrl.turnoId = turnoId.turnoId.id;
    boxCtrl.remove = function (id) {
       console.log(id)
        turnoService.removeTurno(id).then(function (success){
            
            $uibModalInstance.close(success);
            $state.go("dashboard");
        });
    }
    
  }

})();

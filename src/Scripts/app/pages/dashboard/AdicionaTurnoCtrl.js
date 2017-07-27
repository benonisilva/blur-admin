/**
 * @author benonims
 * created on 26.07.2017
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('AdicionaTurnoCtrl', AdicionaTurnoCtrl);

  /** @ngInject */
  function AdicionaTurnoCtrl($scope,agentes) {
    console.log("AdicionaTurnoCtrl:dados");
    var boxCtrl = this;
    boxCtrl.agentes = agentes.data.data.agentes;
    console.log(boxCtrl.agentes)
  }

})();

/**
 * @author benonims
 * created on 26.07.2017
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('AdicionaTurnoCtrl', AdicionaTurnoCtrl);

  /** @ngInject */
  function AdicionaTurnoCtrl($scope,agentes,intervalo,turnoService,$state,$uibModalInstance) {
    console.log("AdicionaTurnoCtrl:dados");
    var boxCtrl = this;
    boxCtrl.agentes = agentes.data.agentes;
    
    
    boxCtrl.salvar = function (agentes){
        var agentesEscolhidos = agentes.filter(_isEscolhido);
        var turno = {
          DiaDaSemana : intervalo.intervalo.start.weekday(),
          HorarioDeInicio : intervalo.intervalo.start.hour(),
          HorarioDeEncerramento : intervalo.intervalo.end.hour(),
          Agentes : agentesEscolhidos
        }
        turnoService.addTurno(turno).then(function (data){
          console.log(data);
          $uibModalInstance.close(agentesEscolhidos);
          $state.go('dashboard');
        });
        
    }

    function _isEscolhido(agente) {
      return agente.s1;
    }
    
  }

})();

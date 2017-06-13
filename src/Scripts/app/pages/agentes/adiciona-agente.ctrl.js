/**
 * autor: benonims
 * 27/02/17
 */
(function () {
  'use strict';
  angular.module('BlurAdmin.pages.agentes')
  .controller('AdicionaAgenteCtrl',AdicionaAgenteCtrl);
  
  /** @ngInject */
  function AdicionaAgenteCtrl(AgenteService,toastr) {
      
      var vm = this;
      
      vm.agente = {};

      vm.adicionar = function name(agente) {
          agente.Nome = agente.Nome+" "+agente.sobrenome;
          AgenteService.save(agente).then(function (success) {
               if(success.data.success===true){
                 toastr.success('Agente Salvo.');
               } else {
                   
                   toastr.error("Erro: "+ success.data.errors);
               }
               
          }, function (error) {
              toastr.error("Erro na aplicação.");
          });
      };
  }

})();
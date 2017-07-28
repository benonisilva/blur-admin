/**
 * @author benonims
 * created on 05-07-17
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.agentes')
    .controller('EditarAgenteCtrl', EditarAgenteCtrl);

  /** @ngInject */
  function EditarAgenteCtrl(agente,AgenteService,toastr,$state) {
    
  	var vm = this;
  	vm.agente = agente.data.agente;
    vm.editar = function (editAgente) {
      editAgente.Nome = editAgente.Nome;
      AgenteService.editar(editAgente).then(function (sucess){
          console.log(sucess);
          toastr.success("Perfil Editado");
          $state.go("agentes.list");
        },function (error){
          toastr.error("Algo deu errado!");
          console.log(error);
        }
      );
    }
  }

})();
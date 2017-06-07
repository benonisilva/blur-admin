/**
 * @author benonims
 * created on 11.08.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.fatos')
    .controller('FatosDetalheCtrl', FatosDetalheCtrl);

  /** @ngInject */
  function FatosDetalheCtrl(fato,fatosService,toastr,status) {
    
    var vm = this;
    vm.msg = "";
  	fato = fato.data.fato;
  	vm.fato = fato;
  	vm.fato.Data = new Date(fato.Data);
  	vm.status = status.data.lista;
    vm.fato.Status = vm.status[vm.fato.Status.StatusFatoId];
    vm.anexos = [];
    vm.carrega = function(id){
      console.log("carregando fotos...")
      fatosService.getAnexos(id).then(function(data){
       vm.anexos = JSON.parse(data.data).anexos;
       console.log("ok");
      })
    }
  	vm.alterarStatus = function(id,novo){
  		console.log(id);
  		console.log(novo);
  		fatosService.setStatus(id,novo).then(function(resolve){
  			console.log(resolve);
        if (resolve.data.success ===true) {
          toastr.success('Situação Alterada.');
        }else{
          toastr.error("Não Tem Permissão!");
        }
  		},function(erro){
        toastr.error(erro);
      });
  	}
  	console.log("Init:FatosDetalheCtrl");
  }
})();

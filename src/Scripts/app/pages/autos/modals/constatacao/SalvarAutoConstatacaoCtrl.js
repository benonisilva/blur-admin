/**
 * @author benonims
 * created on 24/11/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.autos')
    .controller('SalvarAutoConstatacaoCtrl', SalvarAutoConstatacaoCtrl);

  /** @ngInject */
  function SalvarAutoConstatacaoCtrl(auto,autoConstatacaoService,$uibModalInstance,toastr) {
    var vm = this;
    vm.auto = auto;
    vm.loading = false;
    vm.salvar = function(auto){
    	vm.loading = true;
      console.log(auto);
    	autoConstatacaoService.salvarAutoConstatacao(auto).then(function(result){
    		vm.loading = false;
    		console.log(result||"nulo");
        if(result.data.msg==="salvo"){
          $uibModalInstance.close('ok');
          toastr.success("Salvo!");
        }else{
          $uibModalInstance.close('ok');
          toastr.error("Não Tem Permissão!");
        }
    	},function(err){
    		$uibModalInstance.close('ok');
        toastr.error(err);
    	})
    }
  }
})();
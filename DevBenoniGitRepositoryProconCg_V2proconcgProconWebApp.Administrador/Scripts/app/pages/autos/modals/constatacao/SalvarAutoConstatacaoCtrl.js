/**
 * @author benonims
 * created on 24/11/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.autos')
    .controller('SalvarAutoConstatacaoCtrl', SalvarAutoConstatacaoCtrl);

  /** @ngInject */
  function SalvarAutoConstatacaoCtrl(auto,autoConstatacaoService,$uibModalInstance,toastr,$state) {
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
          $state.go("autos.constatacao");
        }
        else if(result.data.msg==="editado"){
          $uibModalInstance.close('ok');
          toastr.success("Editado!");
          $state.go("autos.constatacao");
        }
        else{
          $uibModalInstance.close('ok');
          toastr.error("Não Tem Permissão!");
          $state.go("autos.constatacao");
        }
    	},function(err){
    		$uibModalInstance.close('ok');
        toastr.error(err);
        $state.go("autos.constatacao");
    	})
    }
  }
})();
/**
 * @author benonims
 * created on 24/11/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.autos')
    .controller('RemoverAutoCtrl', RemoverAutoCtrl);

  /** @ngInject */
  function RemoverAutoCtrl(auto,autoConstatacaoService,$uibModalInstance,toastr) {
    var vm = this;
    vm.auto = auto;
    vm.loading = false;
    vm.remover = function(auto){
    	vm.loading = true;
      console.log(auto);
    	autoConstatacaoService.removerAuto(auto.id).then(function(result){
    		vm.loading = false;
        console.log(result||"nulo");
        if(result.data.msg==="removido"){
          
    		  $uibModalInstance.close('ok');
          toastr.success("Removido!");
        }else if(result.data.msg==="contem_auto"){
    
    		  $uibModalInstance.close('ok');
          toastr.error("Contem uma Denúncia Associada. Não pode ser removido!");
        }
    		
    	},function(err){
    		$uibModalInstance.close('ok');
        toastr.error(err);
    	})
    }
  }
})();
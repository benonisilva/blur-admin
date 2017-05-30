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
    	autoConstatacaoService.removerAuto(auto.AutoConstatacaoId).then(function(result){
    		vm.loading = false;
    		console.log(result||"nulo");
    		$uibModalInstance.close('ok');
        toastr.success("Salvo!")
    	},function(err){
    		$uibModalInstance.close('ok');
        toastr.success(err);
    	})
    }
  }
})();
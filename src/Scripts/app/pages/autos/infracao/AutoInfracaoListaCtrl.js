/**
 * @author benonims
 * created on 12.03.2017
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.autos')
    .controller('AutoInfracaoListaCtrl', AutoInfracaoListaCtrl);

  /** @ngInject */
  function AutoInfracaoListaCtrl(autos) {
    
   console.log("AutoInfracaoListaCtrl:init");

   var vm = this;
   vm.autos = autos.data.autos;
   console.log(autos);
   vm.url = apiConfig.url;
  	vm.removerAuto = function(id){
  		modalConfirma.open({
  			id : id
  		})
  	};

  	vm.gerarAuto = function(id){
  		console.log(id||"null vm.gerarAuto");
  		modalGerarAuto.open({
  			id : id
  		})
  	};
  }

})();

/**
 * @author benonims
 * created on 28.12.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.autos')
    .controller('AutoConstatacaoListaCtrl', AutoConstatacaoListaCtrl);

  /** @ngInject */
  function AutoConstatacaoListaCtrl(autos,apiConfig,removerModalsService) {
    
   console.log("AutoConstatacaoListaCtrl:init");

   var vm = this;
   vm.autos = autos.data.autos;
   vm.url = apiConfig.url;
   console.log(autos);
   vm.removerAuto = function(id){
  		console.log(id);
      removerModalsService.open({
  			id : id
  		})
  	};

  	// vm.gerarAuto = function(id){
  	// 	console.log(id||"null vm.gerarAuto");
  	// 	modalGerarAuto.open({
  	// 		id : id
  	// 	})
  	// };
  }

})();



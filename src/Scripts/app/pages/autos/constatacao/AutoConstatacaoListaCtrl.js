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
   vm.autos = [];
   init();
   vm.url = apiConfig.url;
   //console.log(autos);
   vm.removerAuto = function(id){
  		console.log(id);
      removerModalsService.open({
  			id : id
  		})
  	};
   
   function init () {
     
     var  lista = autos.data.autos;
      
      lista.forEach(function(element) {
          var retVal = element.Prazo.slice((6,19))
          var retDate = new Date(retVal);
          console.log(retDate);
          element.Prazo = retDate;
          vm.autos.push(element);
      }, this);
      return vm.autos;
   }

  }

})();



/**
 * @author benonims
 * created on 15.06.2017
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.autos')
    .controller('AutosFinalizadosListaCtrl', AutosFinalizadosListaCtrl);

  /** @ngInject */
  function AutosFinalizadosListaCtrl(autos,agentes) {
    
   console.log("AutosFinalizadosListaCtrl:init");

   var vm = this;
   vm.autos = [];
   init();

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
      vm.agentes = agentes.data.agentes;
      return vm;
   }

  }

})();



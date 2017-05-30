(function () {
  'use strict';

  angular.module('BlurAdmin.pages.autos')
      .controller('AutoConstatacaoCriarCtrl', AutoConstatacaoCriarCtrl);

  /** @ngInject */
  function AutoConstatacaoCriarCtrl($scope, salvarModalsService, auto, fato,
  apiConfig) {
   var auto = auto.data.auto;
   var empresa = fato.data.fato.Empresa;
   var vm = this;
   init();
  
   vm.salvarAuto = function (auto) {
      console.log(auto);
      salvarModalsService.open({
          auto : auto
       })
    };

    function init () {
      
      var s = auto.DataAutuacao;
      var i = parseInt(s.slice(6,19));
      auto.DataAutuacao = new Date(i);
      auto.Prazo = new Date(i);
      if(empresa){
        auto.Empresa = empresa;
        auto.Fatos = [{fatoId:fato.data.fato.FatoId}];
        console.log('AutoConstatacaoCriarCtrl:empresa');
        console.log('AutoConstatacaoCriarCtrl:fato:Id');
      }
      vm.auto = auto;
      console.log('AutoConstatacaoCriarCtrl:Init');
      return vm.auto;
    
  }
    
  }

})();
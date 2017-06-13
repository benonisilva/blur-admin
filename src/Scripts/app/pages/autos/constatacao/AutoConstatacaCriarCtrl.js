(function () {
  'use strict';

  angular.module('BlurAdmin.pages.autos')
      .controller('AutoConstatacaoCriarCtrl', AutoConstatacaoCriarCtrl);

  /** @ngInject */
  function AutoConstatacaoCriarCtrl($scope, salvarModalsService, auto, fato, agentes,
  apiConfig) {
   var autoDto = auto.data.auto;
   var empresa = fato.data.fato.Empresa;
   var listaAgentes = agentes.data.agentes;
   console.log(agentes||"veio nullo");
   var vm = this;
  
   init();
  
   vm.salvarAuto = function (auto) {
      console.log(auto);
      salvarModalsService.open({
          auto : auto
       })
    };

    function init () {
      
      var s = autoDto.DataAutuacao;
      var i = parseInt(s.slice(6,19));
      autoDto.DataAutuacao = new Date(i);
      autoDto.Prazo = new Date(i);
       
      if(empresa){
        autoDto.Empresa = empresa;
        var fatoDto = fato.data.fato;
        autoDto.Fatos = [{fatoId:fatoDto.FatoId}];
        autoDto.Constatacao = fatoDto.Descricao;
        console.log('AutoConstatacaoCriarCtrl:empresa');
        console.log('AutoConstatacaoCriarCtrl:fato:Id');
      }
      vm.auto = autoDto;
      vm.agentes = listaAgentes;
      console.log('AutoConstatacaoCriarCtrl:Init');
      return vm;
    
  }
    
  }

})();
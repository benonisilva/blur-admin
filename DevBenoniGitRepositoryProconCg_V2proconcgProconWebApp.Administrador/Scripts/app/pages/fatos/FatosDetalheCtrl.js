/**
 * @author benonims
 * created on 11.08.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.fatos')
    .controller('FatosDetalheCtrl', FatosDetalheCtrl);

  /** @ngInject */
  function FatosDetalheCtrl(fato,fatosService,toastr,status) {
    console.log("Init:FatosDetalheCtrl");
    var vm = this;
    init();
    vm.msg = "";
    vm.anexos = [];
    
    vm.carregaProvas = function(id){
      console.log("carregando fotos...")
      fatosService.getAnexos(id).then(function(data){
       vm.anexos = JSON.parse(data.data).anexos;
       console.log("ok");
      })
    }

    vm.showAveriguarArea = function (fato) {
      var nome = fato.Status.Nome;
      
      //mudar para array de status q nao mostra e filtrar.
      return   !(nome === "Averiguando" || 
               nome === "Constatada" ||
               nome === "Não Constatada" || nome === "Trote");

    };

    function init () {
      var fatoView = fato.data.fato;
      var statusLista = status.data.lista;
      vm.fato = fatoView;
      vm.fato.Data = new Date(fatoView.Data);

      var retVal = statusLista.filter(filterStatus);
      vm.status = retVal;
      return vm;
    }

    //nao pode alterar para esses status pois isso se da automaticamente.
    function filterStatus(fato){
      var nome = fato.Status.Nome;
      console.log(nome);
      return   !(nome === "Averiguando" || 
               nome === "Constatada" ||
               nome === "Não Constatada");
    }

  	vm.alterarStatus = function(id,novo){
  		console.log(id);
  		console.log(novo);
  		fatosService.setStatus(id,novo).then(function(resolve){
  			console.log(resolve);
        if (resolve.data.success ===true) {
          toastr.success('Situação Alterada.');
        }else{
          toastr.error("Não Tem Permissão!");
        }
  		},function(erro){
        toastr.error(erro);
      });
  	}
  	
  }
})();

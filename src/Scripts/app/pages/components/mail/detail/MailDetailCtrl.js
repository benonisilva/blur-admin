/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components')
    .controller('MailDetailCtrl', MailDetailCtrl);

  /** @ngInject */
  function MailDetailCtrl(fato,fatosService,mailMessages,toastr) {
    console.log("Init:MailDetailCtrl");
    var vm = this;
    vm.hasFinaliza = true;
    init();
    vm.msg = "";
    vm.anexos = [];

    console.log(vm);
    
    vm.carregaProvas = function(id){
      console.log("carregando fotos...")
      fatosService.getAnexos(id).then(function(data){
       vm.anexos = JSON.parse(data.data).anexos;
       console.log("ok");
      })
    }

     function showAveriguarArea (fato) {
      var nome = fato.Status.Nome;
      console.log(nome);
      //mudar para array de status q nao mostra e filtrar.
      return   !(nome === "Averiguando" || 
               nome === "Constatada" ||
               nome === "Não Constatada" || nome === "Trote");

    };

    function init () {
      console.log("MailDetailCtrl:init")
      var fatoView = fato.data.fato;
      vm.fato = fatoView;
      vm.hasFinaliza = showAveriguarArea(fatoView);
      vm.fato.Data = new Date(fatoView.Data);
      vm.status = mailMessages.getTabs();
      return vm;
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

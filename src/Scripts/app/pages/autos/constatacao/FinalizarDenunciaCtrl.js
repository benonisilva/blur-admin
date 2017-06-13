/**
 * @author benonims
 * created on 28.12.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.autos')
    .controller('FinalizarDenunciaCtrl', FinalizarDenunciaCtrl);

  /** @ngInject */
  function FinalizarDenunciaCtrl(ConstatacaoId,autoConstatacaoService,toastr) {
    
   console.log("FinalizarDenunciaCtrl:init:" + ConstatacaoId);
   var vm = this;
   vm.form = {};
   vm.status = [{
       Nome : "Constatado",
       Id : 2
   },{
       Nome : "Não Constatado",
       Id : 3
   }]
   
   vm.finaliza = function (envio) {
      console.log(envio);
      
      dados.DataEntrega = envio.DataEntrega;
      dados.DataConclusao = envio.DataConclusao;
      dados.Mensagem = envio.Mensagem;
      dados.StatusId = envio.Status.Id;

      autoConstatacaoService.setFinaliza(dados).then(function (dados){
        toastr.success("Denúncia Finalizada!");
        console.log(dados);
      });

   }

   var dados = {
     
     ConstatacaoId : ConstatacaoId,
     DataEntrega : "",
     DataConclusao : "",
     Mensagem : "",
     StatusId : 1
     
    };

  }

})();



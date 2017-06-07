/**
 * @author benonims
 * created on 28.12.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.fatos')
    .controller('ConstatadosCtrl', ConstatadosCtrl);
  /** @ngInject */
  function ConstatadosCtrl(fatos) {
    console.log("ConstatadosCtrl:Init");
  	
    var vm = this;

    vm.statusNome = "";
     vm.status = [
    	{
      		StatusFatoId: 1,
      		Nome: 'Recebido',
					Msg:  ""
    	}, 
    	{
      		StatusFatoId: 2,
      		Nome: 'Processado',
					Msg:  ""
    	}, 
    	{
      		StatusFatoId: 3,
      		Nome: 'Arquivado',
					Msg:  ""
    	},
    	{
    		StatusFatoId : 4,
    		Nome : 'Falta Documentação',
				Msg:  ""
    	},
			{
    		StatusFatoId : 5,
    		Nome : 'Em Análise',
				Msg:  ""
    	},
			{
    		StatusFatoId : 6,
    		Nome : 'Constatado',
			Msg:  ""
    	}
			
    ];
    vm.fatos = fatos.data.fatos;

  }

})();

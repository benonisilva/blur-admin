/**
 * @author benonims
 * created on 12/12/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.fatos')
    .service('statusFatosService', statusFatosService);

  /** @ngInject */
  function statusFatosService() {
    
    var status = [
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
      		Nome: 'Falta Documentação',
					Msg:  ""
    	},
    	{
    		StatusFatoId : 4,
    		Nome : 'Arquivado',
				Msg:  ""
    	},
			{
    		StatusFatoId : 5,
    		Nome : 'Em Análise',
				Msg:  ""
    	},
			{
    		StatusFatoId : 2005,
    		Nome : 'Constatado',
				Msg:  ""
    	}
			
    ];

    return{
      getStatus : function(){
        return status
      }
    }

  }

})();
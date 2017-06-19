/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.reclamacoes')
      .controller('ReclamacoesTabCtrl', ReclamacoesTabCtrl);

  /** @ngInject */
  function ReclamacoesTabCtrl(status) {

    console.log("ReclamacoesCtrl:dados");
  
    var tabCtrl = this;
    tabCtrl.navigationCollapsed = true;
    tabCtrl.tabs = [];
    init();
    console.log(tabCtrl)
    function init () {
       tabCtrl.tabs = status.data.lista; 
       return tabCtrl.tabs;
    }
    
  }

})();

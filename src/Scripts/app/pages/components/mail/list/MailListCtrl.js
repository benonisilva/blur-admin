/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components')
    .controller('MailListCtrl', MailListCtrl);

  /** @ngInject */
  function MailListCtrl(fatos) {
    console.log("MailListCtrl:fatos");
    var vm = this;
    vm.localFatos = [];
    vm.tipo = "";
    init();
    
    function init () {
      console.log("MailListCtrl:init");
      var fatosData = fatos.data.fatos;
      vm.fatos = fatosData;
      return vm;
    }
  }

})();

/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components')
      .controller('MailTabCtrl', MailTabCtrl);

  /** @ngInject */
  function MailTabCtrl(mailMessages) {

    console.log("MailTabCtrl:dados");
  
    var tabCtrl = this;
    tabCtrl.navigationCollapsed = true;
    tabCtrl.tabs = mailMessages.getTabs();
    
  }

})();

/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .controller('MsgCenterCtrl', MsgCenterCtrl);

  /** @ngInject */
  function MsgCenterCtrl(denunciasMsgService,$interval,$rootScope,$scope) {
    var vm = this;
    vm.messages = [];
    var audio = new Audio('/Scripts/assets/served.mp3');
    init();

    
    $rootScope.msgRefresh = function (){
      return init();
    }

    $interval(init,60000);


    function init() {
     return denunciasMsgService.getFatos(1).then(function(data){
        var msgs = data.data.fatos;
         
        console.log("MsgCenterCtrl:init()");
        
        if(vm.messages!==null){
          console.log("MsgCenterCtrl:vm.messages");
          if(msgs.length > vm.messages.length){
            audio.play();
            console.log("MsgCenterCtrl:autio.play()");
          }
        }
        vm.messages = msgs;
        return vm;
      });
    }
    
  }
})();
/**
 * @author benonims
 * created on 26.07.17
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('CalendarCtrl', CalendarCtrl);

  /** @ngInject */
  function CalendarCtrl(adicionaTurnoModalService) {
    var vm = this;
    var $element = $('#calendar').fullCalendar({
      locale : 'pt-br',
      header: {
        left:   'title',
        center: '',
        right:  'today,prev,next'
      },
      defaultDate: Date.now(),
      defaultView: 'agendaWeek',

      selectable: true,
      selectHelper: true,
      select: function (start, end) {
        adicionaTurnoModalService.open({id:1});
        var title = "oi"
        var eventData;
        if (title) {
          eventData = {
            title: title,
            start: start,
            end: end
          };
          $element.fullCalendar('renderEvent', eventData, true); // stick? = true
        }
        $element.fullCalendar('unselect');
      },
       eventClick: function(event, element) {

            event.title = "CLICKED!";

            $('#calendar').fullCalendar('updateEvent', event);

        },
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
      ]
    });
  }
})();
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
    
    function _addDays(date, days,hours) {
      var result = new Date(date);
      result.setDate(date.getDate() + days);
      result.setMinutes(hours*60);
      console.log(result)
      return result;
    }
    
    var $element = $('#calendar').fullCalendar({
      locale : 'pt-br',
      timezone: 'UTC',
      header: {
        left:   'title',
        center: '',
        right:  'today prev next'
      },
      defaultDate: Date.now(),
      defaultView: 'agendaWeek',


      selectable: true,
      selectHelper: true,
      select: function (start, end) {
        adicionaTurnoModalService.open({intervalo:{start:start, end:end}});
        var title = "Adicionado"
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

        $('#calendar').fullCalendar('updateEvent', event);

      },
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: function (start, end, timezone, callback) {
        
        $.ajax({
          url : '/Turno/Listar',
          dataType: 'json',
          success : function (data) {
            var events = [];
            var domingo = $('#calendar').fullCalendar('getView').start;
            
            var dataInicio = domingo.toDate();
            
            $.each(data.events, function (index,turno) {
              
              var dateTranlate = _addDays(dataInicio,turno.DiaDaSemana,turno.HorarioDeInicio);
              var inicio = $.fullCalendar.moment(dateTranlate);
              
              var fim = $.fullCalendar.moment(dateTranlate).add( (turno.HorarioDeEncerramento - turno.HorarioDeInicio) * 60 ,'m')

              events.push({
				        title: turno.Agentes.toString(),
                start: inicio,
                end : fim,
                description : "agente\nagente",
                allDay : false
			        });
            });
            
            console.log(events)
            callback(events);
            
          }
        });
      }
    });
  }
})();
(function() {
    'use strict';

    angular
        .module('app')
        .controller('TransactionsController', TransactionsController);

    TransactionsController.$inject = ['apiUrl', 'AppointmentFactory'];

    /* @ngInject */
    function TransactionsController(apiUrl, AppointmentFactory) {
        var vm = this;


        ////////////////

        // page is now ready, initialize the calendar...

        vm.apptsFormatted = [];
        vm.uiConfig = {
            calendar: {
                nowIndicator: true,
                height: 450,
                editable: true,
                header: {
                    left: 'month basicWeek basicDay agendaWeek agendaDay',
                    center: 'title',
                    right: 'today prev,next'
                },
                events: vm.apptsFormatted,
                // dayClick: vm.alertEventOnClick,
                // eventDrop: vm.alertOnDrop,
                // eventResize: vm.alertOnResize,
                defaultView: 'agendaWeek',
                

                handleWindowResize: true,
          slotDuration: '00:60:00',

                businessHours: {
                    start: '10:00', // a start time (10am in this example)
                    end: '20:00', // an end time (6pm in this example)

                    dow: [0, 1, 2, 3, 4, 5, 6]
                        // days of week. an array of zero-based day of week integers (0=Sunday)
                        // (Monday-Thursday in this example)
                },
                views: {
                    agendaWeek: {
                        type: 'agenda',
                        duration: { days: 7 },
                        buttonText: '7 day'
                    }
                }
            }
        };
        getAppts();

        function getAppts() {
            AppointmentFactory.getCurrentAppointments().then(
                function(response) {
                    vm.appts = response;
                    console.log(vm.appts);
                    for (var i = 0; i < vm.appts.length; i++) {
                        var apptFormatted = {};
                        apptFormatted.title = vm.appts[i].customer.firstName;
                        apptFormatted.start = vm.appts[i].scheduleCheckin;
                        apptFormatted.allDay = false; // will make the time show
                        vm.apptsFormatted.push(apptFormatted);
                    }
                    console.log(vm.apptsFormatted);
                },
                function(error) {
                    console.log(error);
                }
            );
        }
    }
})();

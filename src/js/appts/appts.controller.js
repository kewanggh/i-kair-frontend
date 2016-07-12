(function() {
    'use strict';

    angular
        .module('app')
        .controller('ApptsController', ApptsController);

    ApptsController.$inject = ['AppointmentFactory'];

    /* @ngInject */
    function ApptsController(AppointmentFactory) {
        var vm = this;


        vm.loading = true;
        vm.appt = {};

        ////////////////


        vm.getAppts = function() {

            AppointmentFactory.getAll().then(
                function(response) {
                    vm.appts = response;
                    /*vm.tableParams = new NgTableParams({}, { dataset: vm.data });*/
                    console.log(vm.appts);
                    /* console.log($scope.items);*/
                    vm.loading = false;
                },
                function(error) {
                    console.log(error);
                }
            );
        };


        vm.deleteAppt = function(appt) {
            AppointmentFactory.remove(appt.appointmentId).then(
                function(response) {
                    var index = vm.appts.indexOf(appt);
                    vm.appts.splice(index, 1);
                },
                function(error) {
                    /* toastr.error('There has been an error');*/
                }
            );
        };

        vm.updateAppt = function(appt) {
            AppointmentFactory.update(appt.appointmentId, appt).then(
                function(response) {

                },
                function(error) {
                    /*toastr.error('There has been an error');*/
                }
            );
        };

        vm.checkin = function(appt) {
            var timeNow = moment().format();
            console.log(timeNow);
            appt.checkinTime = timeNow;
            AppointmentFactory.update(appt.appointmentId, appt).then(
                function(response) {

                },
                function(error) {
                    /*toastr.error('There has been an error');*/
                }
            );
        };

        vm.checkout = function(appt) {
            var timeNow = moment().format();

            appt.checkoutTime = timeNow;
            AppointmentFactory.update(appt.appointmentId, appt).then(
                function(response) {

                },
                function(error) {
                    /*toastr.error('There has been an error');*/
                }
            );
        };


        vm.addAppt = function(appt) {
            AppointmentFactory.create(appt).then(
                function(response) {
                    vm.appts.push(response);
                    vm.appt = {};
                },
                function(error) {
                    toastr.error('There has been an error');
                }
            );
        };







    }
})();

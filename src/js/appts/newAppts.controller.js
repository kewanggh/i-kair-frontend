(function() {
    'use strict';

    angular
        .module('app')
        .controller('NewApptsController', NewApptsController);

    NewApptsController.$inject = ['$stateParams', 'CustomerFactory', 'AppointmentFactory', 'StylistFactory', 'apiUrl', '$http', '$state'];

    /* @ngInject */
    function NewApptsController($stateParams, CustomerFactory, AppointmentFactory, StylistFactory, apiUrl, $http, $state) {
        var vm = this;

        vm.customer = {};
        vm.customers = [];
        vm.time = "";


        getCustomers();
        activate();
        getStylists();

        ////////////////

        function activate() {
            vm.currentCustomerId = $stateParams.customerId;
            console.log(vm.currentCustomerId);

        }

        vm.addAppt = function(appt) {
            var newAppt = {};
            newAppt.customerId = appt.customer.customerId;
            newAppt.stylistId = appt.stylist.stylistId;

            var time = appt.time;
            /*var timeFormatted = moment(time).toISOString();*/
            var timeFormatted = moment(time).format();
            newAppt.scheduleCheckin = timeFormatted;
            newAppt.text = appt.text;
            console.log(newAppt);
            AppointmentFactory.create(newAppt).then(
                function(response) {

                    vm.newAppt = {};
                    $state.go('main.appointments.grid');
                },
                function(error) {

                }
            );
            console.log(newAppt);
        };

        function getCustomers() {

            CustomerFactory.getAll().then(
                function(response) {
                    vm.customers = response;
                    /*vm.tableParams = new NgTableParams({}, { dataset: vm.data });*/
                    console.log(vm.customers);
                    /* console.log($scope.items);*/
                },
                function(error) {
                    console.log(error);
                }
            );
        }

        function getStylists() {
            StylistFactory.getAll().then(
                function(response) {
                    vm.stylists = response;
                    /*vm.tableParams = new NgTableParams({}, { dataset: vm.data });*/
                    console.log(vm.stylists);
                    /* console.log($scope.items);*/
                },
                function(error) {
                    console.log(error);
                }
            );
        }
        vm.open1 = function() {
            vm.popup1.opened = true;
        };



    }
})();

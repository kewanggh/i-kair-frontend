(function() {
    'use strict';

    angular
        .module('app')
        .controller('ServicesController', ServicesController);

    ServicesController.$inject = ['ServiceFactory'];

    /* @ngInject */
    function ServicesController(ServiceFactory) {
        var vm = this;

        vm.service = {};

        ////////////////
        vm.getServices = function() {
            ServiceFactory.getAll().then(
                function(response) {
                    vm.services = response;
                    /*vm.tableParams = new NgTableParams({}, { dataset: vm.data });*/
                    console.log(vm.services);
                    /* console.log($scope.items);*/
                },
                function(error) {
                    console.log(error);
                });
        };

        vm.deleteService = function(service) {

            ServiceFactory.remove(service.serviceId).then(
                function(response) {
                    var index = vm.services.indexOf(service);
                    vm.services.splice(index, 1);
                },
                function(error) {
                    toastr.error('There has been an error');
                });
        };

        vm.updateService = function(service) {
            ServiceFactory.update(service.serviceId, service).then(
                function(response) {

                },
                function(error) {
                    toastr.error('There has been an error');
                });
        };
        vm.addService = function(service) {
            ServiceFactory.create(service).then(
                function(response) {
                    vm.services.push(response);
                    vm.service = {};
                },
                function(error) {
                    toastr.error('There has been an error');
                });
        };





    }
})();

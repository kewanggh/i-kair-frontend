(function() {
    'use strict';

    angular
        .module('app')
        .controller('CustomersController', CustomersController);

    CustomersController.$inject = ['CustomerFactory', 'NgTableParams', 'apiUrl', '$http'];

    /* @ngInject */
    function CustomersController(CustomerFactory, NgTableParams, apiUrl, $http) {
        var vm = this;

        vm.customer = {};


        ////////////////


        vm.getCustomers = function() {
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
        };

        vm.deleteCustomer = function(customer) {
            console.log(customer);
            CustomerFactory.remove(customer.customerId).then(
                function(response) {
                    var index = vm.customers.indexOf(customer);
                    vm.customers.splice(index, 1);
                },
                function(error) {
                    toastr.error('There has been an error');
                }
            );
        };

        vm.updateCustomer = function(customer) {
            CustomerFactory.update(customer.customerId, customer).then(
                function(response) {},
                function(error) {
                    toastr.error('There has been an error');
                }
            );
        };

        vm.addCustomer = function(customer) {
            CustomerFactory.create(customer).then(
                function(response) {
                    vm.customers.push(response);
                    vm.customer = {};
                },
                function(error) {
                    toastr.error('There has been an error');
                }
            );
        };


        vm.getCustomer = function(val) {
            $http.get(apiUrl + 'customers/search/' + val)
                /*  params: {
                    search: val
                  }*/
                .then(function(response) {
                        var result = response.data;
                        return result[0].firstName;
                    },
                    function(error) {

                    }
                );
        };












    }
})();

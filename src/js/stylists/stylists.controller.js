(function() {
    'use strict';

    angular
        .module('app')
        .controller('StylistsController', StylistsController);

    StylistsController.$inject = ['StylistFactory'];

    /* @ngInject */
    function StylistsController(StylistFactory) {
        var vm = this;

        ////////////////
        vm.stylist = {};

        ////////////////

        vm.getStylists = function() {
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
        };

        vm.deleteStylist = function(stylist) {
            StylistFactory.remove(stylist.stylistId).then(
                function(response) {
                    var index = vm.stylists.indexOf(stylist);
                    vm.stylists.splice(index, 1);
                },
                function(error) {
                    toastr.error('There has been an error');
                }
            );
        };

        vm.updateStylist = function(stylist) {
            StylistFactory.update(stylist.stylistId, stylist).then(
                function(response) {

                },
                function(error) {
                    toastr.error('There has been an error');
                }
            );
        };

        vm.addStylist = function(stylist) {
            StylistFactory.create(stylist).then(
                function(response) {
                    vm.stylists.push(response);
                    vm.stylist = {};
                },
                function(error) {
                    toastr.error('There has been an error');
                }
            );
        };



    }
})();

(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProductsController', ProductsController);

    ProductsController.$inject = ['ProductFactory'];

    /* @ngInject */
    function ProductsController(ProductFactory) {
        var vm = this;

        vm.product = {};

        ////////////////


        vm.getProducts = function() {
            ProductFactory.getAll().then(
                function(response) {
                    vm.products = response;
                    console.log(vm.products);
                },
                function(error) {
                    console.log(error);
                }
            );
        };

        vm.deleteProduct = function(product) {
            ProductFactory.remove(product.productId).then(
                function(response) {
                    var index = vm.products.indexOf(product);
                    vm.products.splice(index, 1);
                },
                function(error) {
                    toastr.error('There has been an error');
                }
            );
        };

        vm.updateProduct = function(product) {
            ProductFactory.update(product.productId, product).then(
                function(response) {

                },
                function(error) {
                    toastr.error('There has been an error');
                }
            );
        };

        vm.addProduct = function(product) {
            ProductFactory.create(product).then(
                function(response) {
                    vm.products.push(response);
                    vm.product = {};
                },
                function(error) {
                    toastr.error('There has been an error');
                }
            );
        };



    }
})();

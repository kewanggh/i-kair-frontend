(function() {
    'use strict';

    angular
        .module('app')
        .controller('PaymentsController', PaymentsController);

    PaymentsController.$inject = ['apiUrl', '$stateParams', 'AppointmentFactory',
        'PaymentFactory', 'ProductFactory', 'ServiceFactory',
        '$http', 'toastr'
    ];

    /* @ngInject */
    function PaymentsController(apiUrl, $stateParams, AppointmentFactory,
        PaymentFactory, ProductFactory, ServiceFactory,
        $http, toastr) {
        var vm = this;

        vm.candy = false;
        vm.soda = false;

        vm.newlyCreatedPayment = {};
        vm.appt = {};
        vm.cart = [];
        vm.totalItems = vm.cart.length;
        /*vm.totalAmount = */
        vm.setTaxRate = 7.5;


        getAppts();
        activate();
        getServices();
        getProducts();
        ////////////////

        vm.addToCart = function(item) {
            vm.cart.push(item);
            console.log(vm.cart);
        };

        vm.getQuantity = function() {
            return vm.cart.length;
        };

        vm.getTotalAmount = function() {
            var total = 0;
            for (var i = 0; i < vm.cart.length; i++) {
                total = total + vm.cart[0].unitPrice;
            }
            return total;
        };

        vm.getTotalAfterTaxS = function() {
            var total = 0;
            for (var i = 0; i < vm.cart.length; i++) {
                total = total + vm.cart[0].unitPrice;
            }
            return total * 107.5;
        };
        vm.getTotalAfterTax = function() {
            var total = 0;
            for (var i = 0; i < vm.cart.length; i++) {
                total = total + vm.cart[0].unitPrice;
            }
            vm.totalSum = total * 1.075;
            return vm.totalSum;
        };
        vm.getTaxTotal = function() {
            var total = 0;
            for (var i = 0; i < vm.cart.length; i++) {
                total = total + vm.cart[0].unitPrice;
            }
            return total * 0.075;
        };

        function activate() {
            vm.currentApptId = $stateParams.apptId;
            console.log(vm.currentApptId);
        }

        vm.doCheckout = function(token) {
            console.log("Got Stripe token: " + token.id);
            vm.tokenId = token.id;
            updateTransaction(vm.totalSum);
            /*postingPayment(request);*/
        };

        function postingPayment() {
            vm.request = {};
            vm.request.transactionId = vm.newlyCreatedPayment.transactionId;
            vm.request.stripeToken = vm.tokenId;
            console.log(vm.request);
            PaymentFactory.postPayment(vm.request).then(
                function(response) {
                    console.log(response);
                    vm.request = {};
                    vm.cart = [];
                    vm.newlyCreatedPayment = {};
                    vm.tokenId = '';
                    vm.appt = {};
                    vm.product = {};
                    vm.service = {};
                    toastr.success("Payment was processed successfuly!");
                    vm.candy = false;
                    vm.soda = false;

                },
                function(error) {
                    console.log(error);
                }
            );
        }

        function updateTransaction(totalAmount) {
            vm.newlyCreatedPayment.totalAmount = totalAmount;
            PaymentFactory.update(vm.newlyCreatedPayment.transactionId, vm.newlyCreatedPayment).then(
                function(response) {
                    postingPayment();
                },
                function(error) {}
            );
        }

        vm.addProduct = function(item) {
            var tI = vm.newlyCreatedPayment.transactionId;
            var pI = item.productId;
            var quantity = 1;
            console.log(tI);
            console.log(pI);
            PaymentFactory.addProductToTransaction(tI, pI, quantity).then(
                function(response) {},
                function(error) {
                    console.log(error);
                }
            );
        };

        vm.addService = function(item) {
            console.log(item);
            console.log(vm.newlyCreatedPayment);
            var tI = vm.newlyCreatedPayment.transactionId;
            var sI = item.serviceId;
            var quantity = 1;
            console.log(tI);
            console.log(sI);
            PaymentFactory.addServiceToTransaction(tI, sI, quantity).then(
                function(response) {},
                function(error) {
                    console.log(error);
                }
            );
        };

        vm.createNewPayment = function(payment) {
            vm.created = {};
            vm.created.customerId = payment.customerId;
            vm.created.appointmentId = vm.appt.appointmentId;
            PaymentFactory.create(vm.created).then(
                function(response) {
                    vm.newlyCreatedPayment = response;
                    vm.candy = true;
                    vm.soda = true;
                    console.log(vm.newlyCreatedPayment);
                },
                function(error) {

                }
            );
        };

        function getProducts() {
            ProductFactory.getAll().then(
                function(response) {
                    vm.products = response;
                },
                function(error) {
                    console.log(error);
                }
            );
        }

        function getServices() {
            ServiceFactory.getAll().then(
                function(response) {
                    vm.services = response;
                },
                function(error) {
                    console.log(error);
                }
            );
        }

        function getAppts() {
            AppointmentFactory.getAll().then(
                function(response) {
                    vm.appts = response;

                },
                function(error) {
                    console.log(error);
                }
            );
        }





    }
})();

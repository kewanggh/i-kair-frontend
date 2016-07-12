(function() {
    'use strict';

    angular
        .module('app')
        .factory('PaymentFactory', PaymentFactory);

    PaymentFactory.$inject = ['serviceGenerator', 'apiUrl', '$q', '$http'];

    /* @ngInject */
    function PaymentFactory(serviceGenerator, apiUrl, $q, $http) {
        var service = serviceGenerator(apiUrl + 'transactions', 'transaction');

        service.getCurrentTransactions = function() {
            var defer = $q.defer();

            $http.get(apiUrl + 'transactions?$filter=IsPaid eq true').then(
                function(response) {
                    defer.resolve(response.data);
                },
                function(err) {
                    defer.reject(err);
                }
            );

            return defer.promise;
        };
        service.addProductToTransaction = function(transactionId, productId, quantity) {
            var defer = $q.defer();

            $http.post(apiUrl + 'transactions/' + transactionId + '/product/' + productId + '/' + quantity).then(
                function(response) {
                    defer.resolve(response.data);
                },
                function(err) {
                    defer.reject(err);
                }
            );

            return defer.promise;
        };
        service.updateProductQuantityInTransaction = function(transactionId, productId, quantity) {
            var defer = $q.defer();

            $http.put(apiUrl + 'transactions/' + transactionId + '/product/' + productId + '/' + quantity).then(
                function(response) {
                    defer.resolve(response.data);
                },
                function(err) {
                    defer.reject(err);
                }
            );

            return defer.promise;
        };
        service.addServiceToTransaction = function(transactionId, serviceId, quantity) {
            var defer = $q.defer();

            $http.post(apiUrl + 'transactions/' + transactionId + '/service/' + serviceId + '/' + quantity).then(
                function(response) {
                    defer.resolve(response.data);
                },
                function(err) {
                    defer.reject(err);
                }
            );

            return defer.promise;
        };

        service.postPayment = function(request) {
            var defer = $q.defer();

            $http.post(apiUrl + 'stripe', request).then(
                function(response) {
                    defer.resolve(response.data);
                },
                function(err) {
                    defer.reject(err);
                }
            );

            return defer.promise;
        };

        return service;








    }
})();

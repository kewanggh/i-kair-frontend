(function() {
    'use strict';

    angular
        .module('app')
        .factory('AppointmentFactory', AppointmentFactory);

    AppointmentFactory.$inject = ['serviceGenerator', 'apiUrl', '$q', '$http'];

    /* @ngInject */
    function AppointmentFactory(serviceGenerator, apiUrl, $q, $http) {
        var service = serviceGenerator(apiUrl + 'appointments', 'appointment');

        service.getCurrentAppointments = function() {
            var defer = $q.defer();

            $http.get(apiUrl + 'appointments?$filter=CheckoutTime eq null').then(
                function(response) {
                    defer.resolve(response.data);
                },
                function(err) {
                    defer.reject(err);
                }
            );

            return defer.promise;
        };
        service.addOneServiceToAppt = function(apptId, serviceId) {
            var defer = $q.defer();

            $http.post(apiUrl + 'appointments/' + apptId + '/service/' + serviceId).then(
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

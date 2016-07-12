(function() {
    'use strict';

    angular
        .module('app')
        .factory('CustomerFactory', CustomerFactory);

    CustomerFactory.$inject = ['serviceGenerator', 'apiUrl'];

    /* @ngInject */
    function CustomerFactory(serviceGenerator, apiUrl) {
        return serviceGenerator(apiUrl + 'customers', 'customer');
    }
})();

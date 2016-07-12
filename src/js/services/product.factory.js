(function() {
    'use strict';

    angular
        .module('app')
        .factory('ProductFactory', ProductFactory);

    ProductFactory.$inject = ['serviceGenerator', 'apiUrl'];

    /* @ngInject */
    function ProductFactory(serviceGenerator, apiUrl) {
        return serviceGenerator(apiUrl + 'products', 'product');
    }
})();

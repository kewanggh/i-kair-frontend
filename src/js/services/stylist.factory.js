(function() {
    'use strict';

    angular
        .module('app')
        .factory('StylistFactory', StylistFactory);

    StylistFactory.$inject = ['serviceGenerator', 'apiUrl'];

    /* @ngInject */
    function StylistFactory(serviceGenerator, apiUrl) {
        return serviceGenerator(apiUrl + 'stylists', 'stylist');
    }
})();

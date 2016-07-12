(function() {
    'use strict';

    angular
        .module('app')
        .factory('ServiceFactory', ServiceFactory);

    ServiceFactory.$inject = ['serviceGenerator', 'apiUrl'];

    /* @ngInject */
    function ServiceFactory(serviceGenerator, apiUrl) {
        return serviceGenerator(apiUrl + 'services', 'service');
    }
})();

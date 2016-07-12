(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['authService'];

    /* @ngInject */
    function MainController(authService) {
        var vm = this;

        vm.state = authService.state;
        console.log(vm.state);
        console.log(vm.state.username);
        //
        // <h1>{{vm.state.salonName}}</h1>

        ////////////////

        vm.logingout = function() {
            authService.logout();
        };





    }
})();

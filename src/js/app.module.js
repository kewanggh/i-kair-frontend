(function() {
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'LocalStorageModule',
            'toastr',
            'twitterApp.services',
            'uiRouterStyles',
            'ngTable',
            'xeditable',
            'ngMaterial',
            'ngAnimate', "ngAria",
            'ui.bootstrap',
            'ui.select', 'ngSanitize', "mdPickers", 'ui.calendar', 'stripe.checkout'




        ])
        .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', 'uiSelectConfig', function($stateProvider, $urlRouterProvider, $httpProvider, uiSelectConfig) {
            window.Stripe.setPublishableKey('pk_test_1QO08jFs6dHBRdbF8rxE4BH8');
            $httpProvider.interceptors.push('authInterceptor');
            uiSelectConfig.theme = 'bootstrap';

            $urlRouterProvider.otherwise('login');
            $stateProvider
                .state('main', { url: '/main', templateUrl: '/templates/main.html', data: { css: 'style/main.css' }, controller: 'MainController as main' })
                .state('register', { url: '/register', templateUrl: '/templates/register.html', data: { css: 'style/main.css' }, controller: 'RegisterController as registerCtrl' })
                .state('login', { url: '/login', templateUrl: '/templates/login.html', data: { css: '/style/main.css' }, controller: 'LoginController as loginCtrl' })

            .state('main.customers', { url: '/customers', abstract: true, template: '<ui-view />' })
                .state('main.customers.grid', { url: '/grid', templateUrl: '/templates/customers.html', data: { css: 'style/customers.css' }, controller: 'CustomersController as customers' })

            .state('main.stylists', { url: '/stylists', templateUrl: '/templates/stylists.html', data: { css: 'style/stylists.css' }, controller: 'StylistsController as stylists' })

            .state('main.products', { url: '/products', templateUrl: '/templates/products.html', data: { css: 'style/products.css' }, controller: 'ProductsController as products' })

            .state('main.appointments', { url: '/appointments', abstract: true, template: '<ui-view />' })
                .state('main.appointments.grid', { url: '/grid?customerId', templateUrl: '/templates/appointments.html', data: { css: 'style/appts.css' }, controller: 'ApptsController as appts' })
                .state('main.appointments.create', { url: '/create?customerId?stylistId', templateUrl: '/templates/newAppt.html', data: { css: 'style/newAppts.css' }, controller: 'NewApptsController as newAppts' })
                .state('main.appointments.transaction', { url: '/transaction?customerId?stylistId', templateUrl: '/templates/transaction.html', data: { css: 'style/transaction.css' }, controller: 'TransactionsController as transactions' })

            .state('main.transactions', { url: '/transactions', abstract: true, template: '<ui-view>' })
                .state('main.transactions.grid', { url: '/grid?customerId?stylistId', templateUrl: '/templates/transactions.html', data: { css: 'style/transactions.css' }, controller: 'TransactionsController as transactions' })
                .state('main.transactions.create', { url: '/create?apptId', templateUrl: '/templates/payment.html', data: { css: 'style/payment.css' }, controller: 'PaymentsController as payments' })

            .state('main.services', { url: '/services', templateUrl: '/templates/services.html', data: { css: 'style/services.css' }, controller: 'ServicesController as services' })

            /*  .state('main', {
                                url: "/main",
                                templateUrl: "app/partials/main.html",
                                   controller: "MovieController",
                                controllerAs:"vm"
              })
              .state('main.results', {
                            url: "/results",
                            templateUrl: "app/partials/results.html",
                             controller: "MovieController"
              })
              .state('main.details', {
                          url: "/details/:name",
                          templateUrl: "app/partials/details.html",
                          controller: "MovieDetailsController",
                          controllerAs: "vm"
              })*/
            ;

        }])
        .run(function(editableOptions, authService) {
            editableOptions.theme = 'bs3';

            authService.init();
        })
        .value('apiUrl', 'http://localhost:65036/api/');

})();

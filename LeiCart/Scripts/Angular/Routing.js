
'use strict';

LeiCart.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'NgViews/index.html',
        controller: 'IndexController',
        reloadOnSearch: false
    }).when('/Cart', {
        templateUrl: 'NgViews/Cart.html',
        controller: 'CartController',
        reloadOnSearch: false
    }).when('/RegForm', {
        templateUrl: 'NgViews/Registration.html',
        controller: 'RegistrationController',
        reloadOnSearch: false
    }).when('/Result', {
        templateUrl: 'NgViews/Result.html',
        controller: 'ResultController',
        reloadOnSearch: false
    }).otherwise({
        redirectTo: '/',
        reloadOnSearch: false
    });

    // $locationProvider.html5Mode(true);
}]);

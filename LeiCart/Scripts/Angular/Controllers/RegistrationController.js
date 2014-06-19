'use strict';

LeiCart.controller('RegistrationController', ['$scope', 'CartFeature', '$location', function ($scope, cartFeature, $location) {

    var currentCart = cartFeature.loadCart('leiCart');
    $scope.totalPrice = cartFeature.getTotoalPrice('leiCart');
    $scope.currentCart = currentCart;


    $scope.submitForm = function () {
        localStorage['userInfo'] = JSON.stringify($scope.regForm);
        $location.path('/Result');
    };
}]);
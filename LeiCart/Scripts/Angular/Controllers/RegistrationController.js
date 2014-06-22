'use strict';

LeiCart.controller('RegistrationController', ['$scope', 'CartFeature', '$location', function ($scope, cartFeature, $location) {

    $scope.totalPrice = cartFeature.getTotoalPrice('leiCart');
    $scope.currentCart = cartFeature.loadCart('leiCart');


    $scope.submitForm = function () {
        localStorage['userInfo'] = JSON.stringify($scope.regForm);
        $location.path('/Result');
    };
}]);
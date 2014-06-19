'use strict';

LeiCart.controller('ResultController', ['$scope', 'CartFeature', '$location', function ($scope, cartFeature, $location) {

    var currentCart = cartFeature.loadCart('leiCart');
    $scope.totalPrice = cartFeature.getTotoalPrice('leiCart');
    $scope.currentCart = currentCart;

    $scope.userInfo = JSON.parse(localStorage.userInfo);

    $scope.currentItemQuantity = function (id) {
        for (var i = 0; i < currentCart.length ; i++) {
            var item = currentCart[i];
            if (item.id == id) {
                return item.quantity;
            }
        }
    };


    $scope.finishShopping = function() {
        cartFeature.emptyCart();
        localStorage.removeItem('userInfo');
        alert("Good luck slaying the dragon!");
        $location.path('/');
    };

}]);
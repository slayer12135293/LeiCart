'use strict';

LeiCart.controller('CartController', ['$scope', 'CartFeature', '$route', function ($scope, cartFeature, $route) {

    var currentCart = cartFeature.loadCart('leiCart');
    $scope.totalPrice = cartFeature.getTotoalPrice('leiCart');

    $scope.currentCart = currentCart;
    var cartAction = function(item, action) {
        cartFeature.addToCart(item, action);
        $route.reload();
    };

    $scope.AddToCart = function(item) {
        cartAction(item, 1);
    };

    $scope.RemoveFromCart = function (item) {
        cartAction(item, -1);
    };

    $scope.RemoveThis = function(item) {
        cartFeature.removeItemFromCart(item);
        $route.reload();
    };

    $scope.currentItemQuantity = function(id) {
        for (var i = 0; i < currentCart.length ; i++) {
            var item = currentCart[i];
            if (item.id == id) {
                return item.quantity;
            }
        }
    };


}]);
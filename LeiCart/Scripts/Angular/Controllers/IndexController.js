'use strict';

LeiCart.controller('IndexController', ['$scope','AvailableProducts', 'CreateCart', 'CartFeature', '$route', function ($scope, availableProducts, createCart, cartFeature, $route) {

    var cart;

    var cartExists = cartFeature.loadCart('leiCart');
    if (cartExists === null || cartExists === undefined) {
        cart = createCart.cart('leiCart');
    } else {
        cart = {
            cartName: 'leiCart',
            items: cartExists
        };

    }

    $scope.availableProducts = availableProducts.products;
    $scope.totalItems = cartFeature.getTotalCount();
    $scope.totalPrice = cartFeature.getTotoalPrice();

    $scope.addToCart = function (item) {
        cartFeature.addToCart(item, 1, cart);
        $route.reload();
    };


}]);
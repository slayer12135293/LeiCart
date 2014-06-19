'use strict';

LeiCart.controller('IndexController', ['$scope', 'CreateCart', 'CartFeature', function ($scope, createCart, cartFeature) {

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


    $scope.availableProducts = [
        {
            id: '1',
            image: '/Content/images/shoes.jpg',
            name: 'Teleporting Shoes',
            price: '120'
        },
        {
            id: '2',
            image: '/Content/images/hat.jpg',
            name: 'HP Recover Hat',
            price: '130'
        },
        {
            id: '3',
            image: '/Content/images/gloves.jpg',
            name: 'Attack Plus Gloves',
            price: '140'
        },
        {
            id: '4',
            image: '/Content/images/scarf.jpg',
            name: 'Invisible Scarf',
            price: '150'
        },
        {
            id: '5',
            image: '/Content/images/umbrella.jpg',
            name: 'MP Recover Umbrella',
            price: '160'
        }

    ];

    $scope.totalItems = cartFeature.getTotalCount();
    $scope.totalPrice = cartFeature.getTotoalPrice();

    $scope.addToCart = function (item) {
        cartFeature.addToCart(item, 1, cart);
        $scope.totalItems = cartFeature.getTotalCount();
        $scope.totalPrice = cartFeature.getTotoalPrice();
    };


}]);
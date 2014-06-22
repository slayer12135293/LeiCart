'use strict';

LeiCart.factory('CreateCart', [function () {
    return {
        cart: function (cartname) {
            return {
                cartName: cartname,
                items: []
            };
        }
    };

}]);
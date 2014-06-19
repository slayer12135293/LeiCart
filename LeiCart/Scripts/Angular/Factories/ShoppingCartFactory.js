'use strict';

LeiCart.factory('CartFeature', [function () {
    var addToCart = function (product, quantity, cart) {
        var itemContainer = [];
        var newCart;
        if (cart === undefined || cart===null) {
            itemContainer = loadCart('leiCart');
            newCart = {
                cartName: 'leiCart',
                items: itemContainer
            };

        } else {
            itemContainer = cart.items;
            newCart = cart;
        }

        var exist = false;
        for (var i = 0; i < itemContainer.length && !exist; i++) {
            var item = itemContainer[i];
            if (item.id === product.id) {
                exist = true;
                item.quantity += quantity;
                if (item.quantity <= 0) {
                    itemContainer.splice(i, 1);
                    item.quantity = 0;
                }
            }
        }
        if (!exist) {
            itemContainer.push(new itemInCart(product.id, product.image, product.name, product.price, quantity));
        }
        saveCart(newCart);
    };
    var saveCart = function (cart) {
        if (localStorage != null && JSON != null) {
            localStorage[cart.cartName] = JSON.stringify(cart.items);
        }
    };
    var getLocalStorage = function (key) {
        var valueString = localStorage.getItem(key);
        return JSON.parse(valueString);
    };

    var loadCart = function (key) {
        return getLocalStorage(key);
    };
    

    var getTotoalPrice = function () {
        var cart = getLocalStorage('leiCart');
        if (cart === null) {
            return 0;
        }

        var price = 0;
        for (var i = 0; i < cart.length; i++) {
            var currentItem = cart[i];
            price += currentItem.price * currentItem.quantity;
        }
        return price;
    };
    var getTotalCount = function () {
        var cart = getLocalStorage('leiCart');
        if (cart=== null){
            return 0;
        }
        var count = 0;
        for (var i = 0; i < cart.length; i++) {
            var currentItem = cart[i];
            count += currentItem.quantity;
        }
        return count;
    };

    var removeItemFromCart = function (item) {
        var updatedCart = {
            cartName: 'leiCart',
            items: loadCart('leiCart')
        };
        for (var i = 0; i < updatedCart.items.length; i++) {
            if (updatedCart.items[i].id === item.id) {
                updatedCart.items.splice(i, 1);
                saveCart(updatedCart);
                break;
            }
        }
    };


    var emptyCart = function () {
        localStorage.removeItem('leiCart');
    };

    return {
        addToCart: addToCart,
        saveCart: saveCart,
        loadCart: loadCart,
        removeItemFromCart:removeItemFromCart,
        getTotoalPrice: getTotoalPrice,
        getTotalCount: getTotalCount,
        emptyCart: emptyCart
    };
}]);
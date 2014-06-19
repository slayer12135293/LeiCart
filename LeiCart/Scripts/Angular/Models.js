function shoppingCart(cartName) {
    this.cartName = cartName;
    this.items = [];
}

function itemInCart(id, image, name, price, quantity) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.price = price * 1;
    this.quantity = quantity * 1;
}

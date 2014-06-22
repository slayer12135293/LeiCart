

LeiCart.factory('AvailableProducts', [function () {
    return {
        products: [
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

        ]
    };
}]);
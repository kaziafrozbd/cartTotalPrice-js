const cartProducts = [
    {name: 'watch', price: 1000, quantity: 1},
    {name: 'pant', price: 1500, quantity: 2},
    {name: 'shirt', price: 2000, quantity: 3},
    {name: 'shoe', price: 1000, quantity: 3}
];

function cart(products){
    let cartTotalPrice = 0;
    for(const product of products){
        const productTotalPrice = product.price * product.quantity;
        cartTotalPrice = cartTotalPrice + productTotalPrice;
    }
    return cartTotalPrice;
}
const cartPrice = cart(cartProducts);
console.log(cartPrice);



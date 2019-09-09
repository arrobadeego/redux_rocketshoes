export function addToCart(product) {
    return {
        type: '@cart/ADD',
        product,
    };
}

export function removeFromCart(id) {
    return {
        type: 'REMOVE_FROM_CART',
        id,
    };
}

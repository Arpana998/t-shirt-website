import React from "react";

const CartContext = React.createContext({
    cartItems: {},
    totalAmount: 0,
    addItemToCart: (item) => {}
})

export default CartContext;
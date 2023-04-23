import React from "react";

const ProductContext = React.createContext({
    items: [],
    addDataOnScreen: (item) => {}
})

export default ProductContext;
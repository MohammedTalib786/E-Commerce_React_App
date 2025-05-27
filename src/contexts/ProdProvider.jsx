import { createContext, useContext } from "react";

export const ProductContext = createContext({
    cartProducts: [

    ],
    addToCartFunc: () => { },
    removeFromCartFunc: () => { },
    changeQuantityFunc: () => { }
})

export const ProdProvider = ProductContext.Provider;

export const useCart = () => {
    return useContext(ProductContext)
}

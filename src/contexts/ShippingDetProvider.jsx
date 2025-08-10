import { createContext, useContext } from "react";

export const shippingDetailsContext = createContext({
    shippingDetails: {
        town_city: "",
        pincode: null,
        states: ""
    },
    addShippingDetails: () => {}
})

export const ShippingDetProvider = shippingDetailsContext.Provider;

export const useShippingDetails = () => {
    return useContext(shippingDetailsContext)
}



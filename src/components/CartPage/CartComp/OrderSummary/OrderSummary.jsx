import React, { useEffect, useState } from 'react'
import { useCart } from '../../../../contexts/ProdProvider';
import ShippingForm from '../../ShippingComp/ShippingForm';
import './orderSummary.css'

import CartAccordian from '../OrderSummary/CartAccordian/CartAccordian'
import { useShippingDetails } from '../../../../contexts/ShippingDetProvider';

const OrderSummary = () => {

    let [isVisible, setIsVisible] = useState(false);

    let { shippingDetails } = useShippingDetails();
    let [pincode, states, town_city] = [shippingDetails.pincode, shippingDetails.states, shippingDetails.town_city]

    let [shippingMsgText, setShippingMsgText] = useState('Calculate Shipping');

    console.log('shippingDetails in ordr Summ', shippingDetails)


    useEffect(() => {
        town_city !== '' ? setShippingMsgText('Update Shipping Details') : setShippingMsgText('Calculate Shipping')
    }, [shippingDetails])

    

    let { cartProducts } = useCart();

    let cartItemTotal = 0

    cartProducts.map(elem => cartItemTotal += (elem.price * elem.quantity))

    // console.log('cartItemTotal', cartItemTotal)


    const [calculateShippingBtn, setCalculateShippingBtn] = useState(false);

    const handlerCalculateShipping = () => {
        setCalculateShippingBtn(!calculateShippingBtn);
    };


    // console.log('cartProducts in Order Summary', cartProducts)

    return (
        <div className="order_sum flex flex-col gap-[16px] w-[40%] p-[20px] rounded-[12px] border-[1px] border-[#737373]  ">
            <h3 className='uppercase text-[32px]/[40px]  ' >Order Summary</h3>
            <div className="calculations flex flex-col gap-[20px] "  >

                <div className="subtotal flex flex-col gap-[8px] "  >
                    <h3 className='  text-[22px]/[28px] w-[100%]  ' > Subtotal </h3>
                    <p className='  text-[22px]/[28px] w-[100%] text-[var(--primary-color)] ' >&#8377;{cartItemTotal}</p>
                </div>



                {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Shipping Comp */}
                <div className="shipping flex flex-col gap-[8px] "   >
                    <h3 className='  text-[22px]/[28px] w-[100%]  ' > Shipping </h3>


                    {/* >>>>>>>>>>>>>>>> Shipping Info Message Comp */}
                    {
                        town_city &&
                        <div className="shippingDetailsInfo pt-[8px]  ">
                            Shipping to {town_city}, {pincode}, {states}
                            {/* DEMO: Shipping to Mum, 70, Maha, */}
                        </div>
                    }

                    <CartAccordian
                        isVisible={isVisible}
                        setIsVisible={setIsVisible}
                        tab_title={shippingMsgText}
                        tab_desc={<ShippingForm setIsVisible={setIsVisible} />}
                    />

                </div>
                {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ENDS Shipping Comp */}



            </div>
        </div>
    )
}

export default OrderSummary;

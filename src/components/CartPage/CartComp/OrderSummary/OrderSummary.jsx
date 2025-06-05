import React, { useEffect, useState } from 'react'
import { useCart } from '../../../../contexts/ProdProvider';
import ShippingForm from '../../ShippingComp/ShippingForm';
import './orderSummary.css'

import CartAccordian from '../OrderSummary/CartAccordian/CartAccordian'
import { useShippingDetails } from '../../../../contexts/ShippingDetProvider';

const OrderSummary = () => {

    let { cartProducts } = useCart();
    let cartItemSubTotal = 0;
    let [isVisible, setIsVisible] = useState(false);
    let { shippingDetails } = useShippingDetails();
    let [pincode, states, town_city] = [shippingDetails.pincode, shippingDetails.states, shippingDetails.town_city]
    let [shippingMsgText, setShippingMsgText] = useState('Calculate Shipping');

    // const [calculateShippingBtn, setCalculateShippingBtn] = useState(false);

    let [shippingCharges, setShippingCharges] = useState(55);
    let [cartItemTotal, setCartItemTotal] = useState(cartItemSubTotal);

    let [gstText, setGstText] = useState('')

    // console.log('shippingDetails in ordr Summ', shippingDetails)

    cartProducts.map(elem => cartItemSubTotal += (elem.price * elem.quantity))


    // >>>>>>>>>>>>>>>>>>>>>>>>> Update Text of Shipping DropDown
    useEffect(() => {
        if (town_city === undefined || town_city === '' || states === '' || states === undefined || pincode === 0 || pincode === '' || pincode === undefined) setShippingMsgText('Calculate Shipping');
        else setShippingMsgText('Update Shipping Details');

    }, [shippingDetails])



    // >>>>>>>>>>>>>>>>>>>>>>>>> Set Shipping Charges
    useEffect(() => {
        if (cartItemSubTotal < 1100) setShippingCharges(55);

        else if (cartItemSubTotal >= 1100 && cartItemSubTotal <= 4000) setShippingCharges(349);

        else if (cartItemSubTotal >= 4001 && cartItemSubTotal <= 7000) setShippingCharges(599);

        else if (cartItemSubTotal >= 7001) setShippingCharges(999);

    }, [cartItemSubTotal, shippingDetails]);





    useEffect(() => {
        // if (town_city !== '' || pincode !== 0 || pincode !== '' ) {
        if (town_city === undefined || town_city === '' || states === '' || states === undefined || pincode === 0 || pincode === '' || pincode === undefined) {
            setCartItemTotal(cartItemSubTotal)
        }
        else {
            setCartItemTotal(cartItemSubTotal + shippingCharges)
        }
        // cartItemTotal
    }, [shippingDetails, cartItemSubTotal, shippingCharges])




    // >>>>>>>>>>>>>>>>>>>>>>>>>>>> GST Logic
    useEffect(() => {
        let gstCalc = ((cartItemTotal * 12) / (100 + 12));

        let text = '';
        if (shippingDetails.states === 'Maharashtra') {
            const halfGst = (gstCalc / 2).toFixed(2);
            text = `includes ₹${halfGst} CGST, ₹${halfGst} SGST`;
        }

        else {
            text = `includes ₹${gstCalc.toFixed(2)} IGST`;
        }

        // console.log('Setting gstText to:', text);
        setGstText(text);

        console.log('gstText', text)

        console.log('Main GST Text Call', gstText)

    }, [cartItemTotal, shippingDetails.states,])





    // console.log('cartProducts in Order Summary', cartProducts)

    return (
        <div className="order_sum flex flex-col gap-[16px] w-[40%] p-[20px] rounded-[12px] border-[1px] border-[#737373]  ">
            <h3 className='uppercase text-[32px]/[40px]  ' >Order Summary</h3>
            <div className="calculations flex flex-col gap-[20px] "  >

                <div className="subtotal flex flex-col gap-[8px] "  >
                    <h3 className='  text-[22px]/[28px] w-[100%]  ' > Subtotal </h3>
                    <p className='  text-[22px]/[28px] w-[100%] text-[var(--primary-color)] ' >&#8377;{cartItemSubTotal}</p>
                </div>

                {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Shipping Comp */}
                <div className="shipping flex flex-col gap-[8px] "   >
                    <h3 className='  text-[22px]/[28px] w-[100%]  ' > Shipping </h3>

                    {/* >>>>>>>>>>>>>>>> Shipping Info Message Comp */}
                    {
                        town_city &&
                        <div className="shippingDetailsInfo py-[8px] flex flex-col gap-[6px] ">
                            <p>Shipping Charges: &#8377;{shippingCharges}</p>
                            <p>
                                Shipping to {town_city}, {pincode}, {states}
                                {/* DEMO: Shipping to Mum, 70, Maha, */}
                            </p>

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


                {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Total Amt Comp */}
                <div className="subtotal flex flex-col gap-[8px] "  >
                    <h3 className=' text-[22px]/[28px] w-[100%] ' > Total </h3>
                    <div className="flex "  >
                        <p className='  text-[22px]/[28px] w-fit text-[var(--primary-color)] pr-[10px] ' >
                            &#8377;{cartItemTotal}
                        </p>

                        {/* <p>(includes &#8377;50 CGST, &#8377;50 SGST) GST AMt: {GstAmt.toFixed(2)} </p> */}
                        <p>(includes &#8377;50 CGST, &#8377;50 SGST) GST AMt:  </p>
                    </div>

                </div>
                {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ENDS Total Amt Comp */}



            </div>
        </div>
    )
}

export default OrderSummary;

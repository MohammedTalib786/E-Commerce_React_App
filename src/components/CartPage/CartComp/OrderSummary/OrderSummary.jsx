import React, { useState } from 'react'
import { useCart } from '../../../../contexts/ProdProvider';
import ShippingForm from '../../ShippingComp/ShippingForm';
import './orderSummary.css'

const OrderSummary = () => {

    let { cartProducts, changeQuantityFunc, removeFromCartFunc } = useCart();
    let cartItemTotal = 0
    cartProducts.map(elem => cartItemTotal += (elem.price * elem.quantity))

    console.log('cartItemTotal', cartItemTotal)


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

                <div className="shipping flex flex-col gap-[8px] "   >
                    <h3 className='  text-[22px]/[28px] w-[100%]  ' > Shipping </h3>
                    <p className='  text-[22px]/[28px] w-[100%] text-[var(--primary-color)] '
                        onClick={handlerCalculateShipping}
                    > Calculate Shipping </p>
                    {
                        calculateShippingBtn && <ShippingForm />
                    }

                </div>

                <div className="bg-cyan-300 theAccord  ">
                    <h3>Hello Accord</h3>



                    <details>
                        <summary>Click to Expand</summary>
                        <div class="content">
                            <p>This is the content inside the dropdown. It expands with a smooth animation using CSS transitions.</p>
                        </div>
                    </details>

                    
<div className="bg-red-200 h-[50px] "></div>
                    
                    




                </div>

            </div>
        </div>
    )
}

export default OrderSummary;

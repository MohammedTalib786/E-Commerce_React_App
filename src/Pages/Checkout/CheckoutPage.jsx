import React, { useState } from 'react'
import BillingForm from '../../components/CheckoutPage/BillingForm/BillingForm';
import YourOrderComp from '../../components/CheckoutPage/YourOrderComp/YourOrderComp';

const CheckoutPage = () => {

    let [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        street_address: "",
        town_cityInp: "",
        pincodeInp: Number(""),
        stateInp: "Maharashtra",
        phone_number: Number(""),
        email_address: ""
    })



    // >>>>>>>>>>>>>>>>>>>>> Form Validation
    const dummyHandlerPlaceOrder = () => {
        console.log("Button CLicked");

        // if (formData.town_cityInp === '') {
        //     console.log('town city inp cant be empty!')
        //     setErrorMsg({ ...errorMsg, townCity: true })
        //     setTimeout(() => {
        //         setErrorMsg({ ...errorMsg, townCity: false })
        //     }, 1200)
        // }

        // else if (!formData.pincodeInp || !regex.test(formData.pincodeInp)) {
        //     console.log('Pincode Invalid!');
        //     setErrorMsg({ ...errorMsg, pincode: true })
        //     setTimeout(() => {
        //         setErrorMsg({ ...errorMsg, pincode: false })
        //     }, 1200)
        // }

        // else {
        //     // townCity, pincode, State
        //     addShippingDetails(formData.town_cityInp, formData.pincodeInp, formData.stateInp);
        //     // setIsVisible(prev => !prev);
        //     // setFormData({ town_cityInp: '', pincodeInp: Number(""), stateInp: "" })
        //     setFormData({ town_cityInp: '', pincodeInp: Number(""), stateInp: formData.stateInp })
        // }

        console.log('formData.first_name', formData.first_name)
        console.log('formData.last_name', formData.last_name)
        console.log('formData.company_name', formData.company_name)
        console.log('formData.phone_number', formData.phone_number)
        console.log('formData.email_address', formData.email_address)
        console.log('formData.pincodeInp', formData.pincodeInp)
        console.log('formData.stateInp', formData.stateInp)
        console.log('formData.street_address', formData.street_address)
        console.log('formData.town_cityInp', formData.town_cityInp)

    }



    return (
        <div className="py-[50px]">
            {/* >>>>>>>>>>>>>> In Cont */}
            <div className="container_layout mx-auto flex justify-center items-center flex-col   "  >

                <div className="cart_heading pb-[40px] "  >
                    <h1 className=" text-3xl font-bold text-center ">Checkout</h1>
                </div>

                <div className="cart_card_cont w-full px-[50px] flex gap-[35px] "  >

                    <div className=" w-[60%] flex flex-col gap-[15px]  "  >
                        <BillingForm formData={formData} setFormData={setFormData} />
                    </div>

                    <YourOrderComp dummyHandlerPlaceOrder={dummyHandlerPlaceOrder} />

                </div>
            </div>


        </div>
    )
}

export default CheckoutPage;

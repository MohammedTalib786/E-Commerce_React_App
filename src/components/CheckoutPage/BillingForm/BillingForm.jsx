import React, { useState } from 'react'
import { useShippingDetails } from '../../../contexts/ShippingDetProvider';
import statesJSON from '../../states_JSON/states.json'
import Button from '../../FormComp/Button';
import InputBar from '../../FormComp/InputBar';
import SelectDropdown from '../../FormComp/SelectDropdown';

const BillingForm = ({
    formData,
    setFormData,
    errorMsg
}) => {

    let { shippingDetails, addShippingDetails } = useShippingDetails();

    // let [formData, setFormData] = useState({
    //     first_name: "",
    //     last_name: "",
    //     street_address: "",
    //     town_cityInp: "",
    //     pincodeInp: Number(""),
    //     stateInp: "Maharashtra",
    //     phone_number: Number(""),
    //     email_address: ""
    // })
    // let [errorMsg, setErrorMsg] = useState({
    //     townCity: false,
    //     pincode: false
    // })
    const regex = /^\d{6}$/;
    // console.log('shippingDetails in ship form comp ', shippingDetails)

    // const handlerDemo = () => {
    //     console.log('Click Btn');
    //     setIsVisible(prev => !prev);
    // }

    // >>>>>>>>>>>>>>>>>>>>> Form Validation
    // const dummyHandlerPlaceOrder = () => {
    //     console.log("Button CLicked");

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

    //     console.log('formData.first_name', formData.first_name)
    //     console.log('formData.last_name', formData.last_name)
    //     console.log('formData.company_name', formData.company_name)
    //     console.log('formData.phone_number', formData.phone_number)
    //     console.log('formData.email_address', formData.email_address)
    //     console.log('formData.pincodeInp', formData.pincodeInp)
    //     console.log('formData.stateInp', formData.stateInp)
    //     console.log('formData.street_address', formData.street_address)
    //     console.log('formData.town_cityInp', formData.town_cityInp)

    // }

    // console.log('Outside Scope', shippingDetails.states)

    // useEffect(() => {
    //     setFormData({ stateInp: shippingDetails.states })
    // }, [shippingDetails.states, shippingDetails.pincode, shippingDetails.town_city])


    return (
        <>
            <div className=""  >

                <div
                    className="checkoutFormCont flex flex-col gap-[18px] pt-[20px] "
                >

                    <div className="nameCont relative flex gap-[22px] "  >
                        <div className="">
                            <InputBar label_text="First Name" type="text" htmlFor="first_name" id="first_name"
                                onChange_func={(e) => setFormData({ ...formData, first_name: e.target.value })}
                            />
                            {
                                errorMsg.firstName &&
                                <p className='bg-red-800 text-white  absolute w-auto text-center top-[0px] right-[30px] text-[15px]/[21px] px-[16px] py-[10px] rounded-[12px]  ' >
                                    Name Field Can not be Empty!
                                </p>
                            }
                        </div>



                        <div className="">
                            <InputBar label_text="Last Name" type="text" htmlFor="last_name" id="last_name"
                                onChange_func={(e) => setFormData({ ...formData, last_name: e.target.value })}
                            />
                        </div>

                    </div>


                    <div className="emailCont relative "  >
                        <InputBar label_text="Email" type="email" htmlFor="email_address" id="email_address"
                            onChange_func={(e) => setFormData({ ...formData, email_address: e.target.value })}
                        />

                        {
                            errorMsg.email &&
                            <p className='bg-red-800 text-white  absolute w-auto text-center top-[0px] right-[30px] text-[15px]/[21px] px-[16px] py-[10px] rounded-[12px]  ' >
                                Invalid Email!
                            </p>
                        }

                    </div>


                    <div className="phoneCont relative "  >
                        <InputBar label_text="Phone" type="number" htmlFor="phone_number" id="phone_number"
                            onChange_func={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                        />

                        {
                            errorMsg.phone &&
                            <p className='bg-red-800 text-white  absolute w-auto text-center top-[0px] right-[30px] text-[15px]/[21px] px-[16px] py-[10px] rounded-[12px]  ' >
                                Invalid Phone Number!
                            </p>
                        }

                    </div>


                    <div className="countryCont relative "  >
                        <label htmlFor="country"> Country </label>
                        <input
                            type="text" readOnly name="" id="country" value="India"
                            className=' w-full border-[0]  outline-0 px-[0] pt-[7px] pb-[0] text-[18px]/[26px] rounded-[6px] font-[600] '
                        />

                    </div>


                    <div className="streetAddress relative flex flex-col gap-[22px] "  >
                        <div className="">
                            <InputBar label_text="Street Address" type="text" htmlFor="streetAddress_1" id="streetAddress_1"
                                onChange_func={(e) => setFormData({ ...formData, street_address: e.target.value })}
                            />

                            {
                                errorMsg.streetAddress &&
                                <p className='bg-red-800 text-white  absolute w-auto text-center top-[0px] right-[30px] text-[15px]/[21px] px-[16px] py-[10px] rounded-[12px]  ' >
                                    Street Address Can not be empty!
                                </p>
                            }

                        </div>
                    </div>


                    <div className="townCityCont relative "  >
                        <InputBar label_text="Town/City" type="text" htmlFor="town-city" id="town-city"
                            onChange_func={(e) => setFormData({ ...formData, town_cityInp: e.target.value })}
                        />

                        {
                            errorMsg.townCity &&
                            <p className='bg-red-800 text-white  absolute w-auto text-center top-[0px] right-[30px] text-[15px]/[21px] px-[16px] py-[10px] rounded-[12px]  ' >
                                townCity Can not be empty!
                            </p>
                        }

                    </div>


                    <div className="stateCont  relative "  >
                        <SelectDropdown label_text="State" htmlFor="state" id="state" value={formData.stateInp} onchange_func={(e) => setFormData({ ...formData, stateInp: e.target.value })} options_arr={statesJSON}
                        />
                    </div>


                    <div className="pinCodeCont relative "  >
                        <InputBar label_text="PinCode" type="number" htmlFor="pincode" id="pincode"
                            onChange_func={(e) => setFormData({ ...formData, pincodeInp: Number(e.target.value) })}
                        />

                        {
                            errorMsg.pincode &&
                            <p className='bg-red-800 text-white  absolute w-auto text-center top-[0px] right-[30px] text-[15px]/[21px] px-[16px] py-[10px] rounded-[12px]  ' >
                                Invalid Pincode!
                            </p>
                        }

                    </div>


                </div>
            </div>

        </>

    )
}

export default BillingForm
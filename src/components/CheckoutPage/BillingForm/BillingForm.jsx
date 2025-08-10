import React, { useEffect, useState } from 'react';
import { useShippingDetails } from '../../../contexts/ShippingDetProvider';
import statesJSON from '../../states_JSON/states.json';
import Button from '../../FormComp/Button';
import InputBar from '../../FormComp/InputBar';
import SelectDropdown from '../../FormComp/SelectDropdown';

const BillingForm = ({
    formData,
    setFormData,
    errorMsg
}) => {

    let { shippingDetails, addShippingDetails } = useShippingDetails();
    // console.log('shippingDetails inside billing form', shippingDetails);

    let { pincode, states, town_city } = shippingDetails;
    // console.log('pincoded', pincode)
    useEffect(() => {
        if (pincode || states || town_city) {
            setFormData({
                ...formData, town_cityInp: town_city, stateInp: states, pincodeInp: pincode
            })
        }
    }, [])

    const regex = /^\d{6}$/;

    return (
        <>
            <div className=""  >

                <div
                    className="checkoutFormCont flex flex-col gap-[18px] pt-[20px] "
                >

                    <div className="nameCont relative flex gap-[22px] "  >
                        <div className="">
                            <InputBar label_text="First Name" type="text" html_for="first_name" id="first_name"
                                onChange_func={(e) => setFormData({ ...formData, first_name: e.target.value })}
                                value={formData.first_name}

                            />
                            {
                                errorMsg.firstName &&
                                <p className='bg-red-800 text-white  absolute w-auto text-center top-[0px] right-[30px] text-[15px]/[21px] px-[16px] py-[10px] rounded-[12px]  ' >
                                    Name Field Can not be Empty!
                                </p>
                            }
                        </div>

                        <div className="">
                            <InputBar label_text="Last Name" type="text" html_for="last_name" id="last_name"
                                onChange_func={(e) => setFormData({ ...formData, last_name: e.target.value })}
                                value={formData.last_name}
                            />
                        </div>

                    </div>


                    <div className="emailCont relative "  >
                        <InputBar label_text="Email" type="email" html_for="email_address" id="email_address"
                            onChange_func={(e) => setFormData({ ...formData, email_address: e.target.value })}
                            value={formData.email_address}
                        />

                        {
                            errorMsg.email &&
                            <p className='bg-red-800 text-white  absolute w-auto text-center top-[0px] right-[30px] text-[15px]/[21px] px-[16px] py-[10px] rounded-[12px]  ' >
                                Invalid Email!
                            </p>
                        }

                    </div>


                    <div className="phoneCont relative "  >
                        <InputBar label_text="Phone" type="number" html_for="phone_number" id="phone_number"
                            onChange_func={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                            value={formData.phone_number ? formData.phone_number : ""}
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
                            <InputBar label_text="Street Address" type="text" html_for="streetAddress_1" id="streetAddress_1"
                                onChange_func={(e) => setFormData({ ...formData, street_address: e.target.value })}
                                value={formData.street_address}
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
                        <InputBar label_text="Town/City" type="text" html_for="town-city" id="town-city"
                            onChange_func={(e) => setFormData({ ...formData, town_cityInp: e.target.value })}
                            value={town_city ? town_city : formData.town_cityInp}
                        />

                        {
                            errorMsg.townCity &&
                            <p className='bg-red-800 text-white  absolute w-auto text-center top-[0px] right-[30px] text-[15px]/[21px] px-[16px] py-[10px] rounded-[12px]  ' >
                                townCity Can not be empty!
                            </p>
                        }

                    </div>


                    <div className="stateCont  relative "  >
                        <SelectDropdown label_text="State" html_for="state" id="state"
                            value={states ? states : formData.stateInp}
                            onchange_func={(e) => setFormData({ ...formData, stateInp: e.target.value })}
                            options_arr={statesJSON}
                        />
                    </div>


                    <div className="pinCodeCont relative "  >
                        <InputBar label_text="PinCode" type="number" html_for="pincode" id="pincode"
                            onChange_func={(e) => setFormData({ ...formData, pincodeInp: Number(e.target.value) })}
                            // value={formData.pincodeInp ? formData.pincodeInp : ""}
                            value={pincode ? pincode : ""}
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
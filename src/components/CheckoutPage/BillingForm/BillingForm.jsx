import React, { useState } from 'react'
import { useShippingDetails } from '../../../contexts/ShippingDetProvider';
import statesJSON from '../../states_JSON/states.json'
import Button from '../../Button';


const BillingForm = ({ formData, setFormData }) => {

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
    let [errorMsg, setErrorMsg] = useState({
        townCity: false,
        pincode: false
    })
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
                    className="shippingFormCont flex flex-col gap-[18px] pt-[20px] "
                >

                    <div className="nameCont relative flex gap-[22px] "  >
                        <div className="">
                            <label htmlFor="first_name"> First Name: </label>
                            <input
                                type="text" name="" id="first_name"
                                className=' w-full border border-[#737373] outline-0 px-[16px] py-[12px] text-[18px]/[26px] rounded-[6px]  '
                                // value={shippingDetails.first_name}
                                onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                            />


                        </div>

                        <div className="">
                            <label htmlFor="last_name"> Last Name: </label>
                            <input
                                type="text" name="" id="last_name"
                                className=' w-full border border-[#737373] outline-0 px-[16px] py-[12px] text-[18px]/[26px] rounded-[6px]  '
                                onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                            />

                            {
                                formData.first_name || formData.last_name &&
                                <p className='bg-red-800 text-white  absolute w-auto text-center top-[0px] right-[-60px] text-[15px]/[21px] px-[16px] py-[10px] rounded-[12px]  ' >
                                    Input field Can not be Empty!
                                </p>
                            }


                        </div>

                    </div>


                    {/* <div className="companyName relative "  >
                        <label htmlFor="companyName"> Company Name (Optional): </label>
                        <input
                            type="text" name="" id="companyName"
                            className=' w-full border border-[#737373] outline-0 px-[16px] py-[12px] text-[18px]/[26px] rounded-[6px]  '
                            onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                        />

                    </div> */}


                    {/* <div className="countryCont relative "  >
                        <label htmlFor="country"> Country </label>
                        <input
                            type="text" readOnly name="" id="country" value="India"
                            className=' w-full border-[0]  outline-0 px-[0] pt-[7px] pb-[0] text-[18px]/[26px] rounded-[6px] font-[600] '
                        />
                    </div> */}


                    {/* <div className="streetAddress relative flex flex-col gap-[22px] "  >
                        <div className="">
                            <label htmlFor="streetAddress_1"> Street Address: </label>
                            <input
                                type="text" name="" id="streetAddress_1"
                                className=' w-full border border-[#737373] outline-0 px-[16px] py-[12px] text-[18px]/[26px] rounded-[6px]  '
                                onChange={(e) => setFormData({ ...formData, street_address: e.target.value })}
                            />

                        </div>

                    </div> */}


                    {/* <div className="townCityCont relative "  >
                        <label htmlFor="town-city"> Town/City </label>
                        <input
                            type="text" name="" id="town-city"
                            className=' w-full border border-[#737373] outline-0 px-[16px] py-[12px] text-[18px]/[26px] rounded-[6px]  '
                            onChange={(e) => setFormData({ ...formData, town_cityInp: e.target.value })}
                        />

                        <p className='bg-red-800 text-white  absolute w-auto text-center top-[0px] right-[30px] text-[15px]/[21px] px-[16px] py-[10px] rounded-[12px]  ' >
                            Input field Can not be Empty!
                        </p>

                    </div> */}


                    {/* <div className="stateCont  relative "  >
                        <label htmlFor="state"> State </label>
                        <select
                            name="" id="state"
                            className=' w-full border border-[#737373] outline-0 px-[16px] py-[12px] text-[18px]/[26px] rounded-[6px]  '
                            value={formData.stateInp}
                            onChange={(e) => setFormData({ ...formData, stateInp: e.target.value })}
                        >
                            {
                                statesJSON.map((elem) => {
                                    return <option key={elem.code} value={elem.name} >{elem.name}</option>
                                })
                            }
                        </select>
                    </div> */}


                    {/* <div className="pinCodeCont relative "  >
                        <label htmlFor="pincode"> PinCode </label>
                        <input
                            type="number"
                            className=' w-full border border-[#737373] outline-0 px-[16px] py-[12px] text-[18px]/[26px] rounded-[6px]  ' name="" id="pincode"
                            onChange={(e) => setFormData({ ...formData, pincodeInp: Number(e.target.value) })}
                        />

                        <p className='bg-red-800 text-white  absolute w-auto text-center top-[0px] right-[30px] text-[15px]/[21px] px-[16px] py-[10px] rounded-[12px]  ' >
                            Invalid Pincode!
                        </p>

                    </div> */}


                    {/* <div className="phoneCont relative "  >
                        <label htmlFor="phone_number"> Phone: </label>
                        <input
                            type="number" name="" id="phone_number"
                            className=' w-full border border-[#737373] outline-0 px-[16px] py-[12px] text-[18px]/[26px] rounded-[6px]  '
                            onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                        />

                        <p className='bg-red-800 text-white  absolute w-auto text-center top-[0px] right-[30px] text-[15px]/[21px] px-[16px] py-[10px] rounded-[12px]  ' >
                            Input field Can not be Empty!
                        </p>

                    </div> */}


                    {/* <div className="emailCont relative "  >
                        <label htmlFor="email_address"> Email: </label>
                        <input
                            type="email" name="" id="email_address"
                            className=' w-full border border-[#737373] outline-0 px-[16px] py-[12px] text-[18px]/[26px] rounded-[6px]  '
                            onChange={(e) => setFormData({ ...formData, email_address: e.target.value })}
                        />

                        <p className='bg-red-800 text-white  absolute w-auto text-center top-[0px] right-[30px] text-[15px]/[21px] px-[16px] py-[10px] rounded-[12px]  ' >
                            Input field Can not be Empty!
                        </p>

                    </div> */}


                </div>
            </div>

        </>

    )
}

export default BillingForm
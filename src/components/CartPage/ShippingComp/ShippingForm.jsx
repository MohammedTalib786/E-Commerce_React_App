import { useEffect, useState } from 'react'
import statesJSON from '../../states_JSON/states.json'
import Button from '../../Button';
import { useShippingDetails } from '../../../contexts/ShippingDetProvider';

const ShippingForm = ({
    setIsVisible
}) => {

    let { shippingDetails, addShippingDetails } = useShippingDetails();
    let [countryMsg, showCountryMsg] = useState(false);
    let [formData, setFormData] = useState({
        town_cityInp: "",
        pincodeInp: Number(""),
        stateInp: "Maharashtra"
    })
    let [errorMsg, setErrorMsg] = useState({
        townCity: false,
        pincode: false
    })
    const regex = /^\d{6}$/;
    // console.log('shippingDetails in ship form comp ', shippingDetails)

    const handlerDemo = () => {
        console.log('Click Btn');
        setIsVisible(prev => !prev);
    }

    const handlerCountryInp = () => {
        showCountryMsg(true)
        setTimeout(() => showCountryMsg(false), 1500)
    }

    // >>>>>>>>>>>>>>>>>>>>> Form Validation
    const handlerSubmitForm = () => {
        console.log("Button CLicked");

        if (formData.town_cityInp === '') {
            console.log('town city inp cant be empty!')
            setErrorMsg({ ...errorMsg, townCity: true })
            setTimeout(() => {
                setErrorMsg({ ...errorMsg, townCity: false })
            }, 1200)
        }

        else if (!formData.pincodeInp || !regex.test(formData.pincodeInp)) {
            console.log('Pincode Invalid!');
            setErrorMsg({ ...errorMsg, pincode: true })
            setTimeout(() => {
                setErrorMsg({ ...errorMsg, pincode: false })
            }, 1200)
        }

        else {
            // townCity, pincode, State
            addShippingDetails(formData.town_cityInp, formData.pincodeInp, formData.stateInp);
            setIsVisible(prev => !prev);
            // setFormData({ town_cityInp: '', pincodeInp: Number(""), stateInp: "" })
            setFormData({ town_cityInp: '', pincodeInp: Number(""), stateInp: formData.stateInp })
        }
    }

    console.log('Outside Scope', shippingDetails.states)

    useEffect(() => {
        setFormData({ stateInp: shippingDetails.states })
    }, [shippingDetails.states, shippingDetails.pincode, shippingDetails.town_city])

    return (
        <>
            <div className=""  >

                <div
                    className="shippingFormCont flex flex-col gap-[18px] pt-[20px] "
                >

                    <div className="countryCont relative "  >
                        <label htmlFor="country"> Country </label>
                        <input
                            type="text" readOnly name="" id="country" value="India"
                            className=' w-full border border-[#737373] outline-0 px-[16px] py-[12px] text-[18px]/[26px] rounded-[6px]  '
                            onClick={handlerCountryInp}
                        />
                        {
                            countryMsg &&
                            <p className='bg-[var(--primary-color)] text-white  absolute w-auto text-center top-[0px] left-[90px] text-[15px]/[21px] px-[16px] py-[10px] rounded-[12px]  ' >
                                Currently Ships Only in India
                            </p>
                        }
                    </div>

                    <div className="stateCont  relative "  >
                        <label htmlFor="state"> State </label>
                        <select
                            name="" id="state"
                            className=' w-full border border-[#737373] outline-0 px-[16px] py-[12px] text-[18px]/[26px] rounded-[6px]  '
                            value={formData.stateInp}
                            onChange={(e) => setFormData({ ...formData, stateInp: e.target.value })}
                        >
                            {
                                statesJSON.map((elem) => {
                                    // console.log('Main State', elem.name)
                                    return <option key={elem.code} value={elem.name} >{elem.name}</option>
                                })
                            }
                        </select>
                    </div>

                    <div className="townCityCont relative "  >
                        <label htmlFor="town-city"> Town/City </label>
                        <input
                            type="text" name="" id="town-city"
                            className=' w-full border border-[#737373] outline-0 px-[16px] py-[12px] text-[18px]/[26px] rounded-[6px]  '
                            onChange={(e) => setFormData({ ...formData, town_cityInp: e.target.value })}
                        />
                        {
                            errorMsg.townCity &&
                            <p className='bg-red-800 text-white  absolute w-auto text-center top-[0px] left-[90px] text-[15px]/[21px] px-[16px] py-[10px] rounded-[12px]  ' >
                                Input field Can not be Empty!
                            </p>
                        }
                    </div>

                    <div className="pinCodeCont relative "  >
                        <label htmlFor="pincode"> PinCode </label>
                        <input
                            type="number"
                            className=' w-full border border-[#737373] outline-0 px-[16px] py-[12px] text-[18px]/[26px] rounded-[6px]  ' name="" id="pincode"
                            onChange={(e) => setFormData({ ...formData, pincodeInp: Number(e.target.value) })}
                        />
                        {
                            errorMsg.pincode &&
                            <p className='bg-red-800 text-white  absolute w-auto text-center top-[0px] left-[90px] text-[15px]/[21px] px-[16px] py-[10px] rounded-[12px]  ' >
                                Invalid Pincode!
                            </p>
                        }
                    </div>

                    {/* >>>>>>>>>>>>> Submit Button */}
                    <Button
                        btnWidth='w-fit'
                        handlerClickBtnComp={handlerSubmitForm}
                        text='Update Details'
                    />

                </div>
            </div>
        </>
    )
}

export default ShippingForm;

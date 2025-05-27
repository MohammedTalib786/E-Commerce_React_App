import React, { useEffect, useState } from 'react'
import statesJSON from './states.json'

const ShippingForm = () => {

    // console.log('statesJSON', statesJSON, typeof statesJSON)

    let [countryMsg, showCountryMsg] = useState(false);

    // let [states, setStates] = useState([]);

    let [shippingDetails, setShippingDetails] = useState({
        town_city: "",
        pincode: Number(""),
        states: ''
    })

    const handlerCountryInp = () => {
        showCountryMsg(true)
        setTimeout(() => showCountryMsg(false), 1500)
    }

    // console.log('value of shiiping det town city', shippingDetails.town_city)
    // console.log('value of shiiping det pincode', shippingDetails.pincode, typeof shippingDetails.pincode)
    // console.log('value of shiiping det state', shippingDetails.states, typeof shippingDetails.states)

    return (

        <>
            <div className=" flex flex-col gap-[18px] "  >

                <div className="countryCont relative "  >

                    <label htmlFor="country"> Country </label>
                    <input type="text" readOnly className=' w-full border border-[#737373] outline-0 px-[16px] py-[12px] text-[18px]/[26px] rounded-[6px]  ' name="" id="country" value="India"
                        onClick={handlerCountryInp}
                    />

                    {
                        countryMsg &&
                        <p className='bg-[var(--primary-color)] text-white  absolute w-[290px] text-center top-[0px] left-[90px] text-[17px]/[24px] px-[10px] py-[12px] rounded-[12px]  ' >
                            Currently Only Ships in India
                        </p>
                    }

                </div>

                <div className="stateCont "  >
                    <label htmlFor="state"> Town/City </label>
                    <select
                        name="" id="state" className=' w-full border border-[#737373] outline-0 px-[16px] py-[12px] text-[18px]/[26px] rounded-[6px]  '
                        onChange={(e) => setShippingDetails({ ...shippingDetails, states: e.target.value })}
                    >
                        {
                            statesJSON.map((elem) => {
                                // console.log('Main State', elem.name)
                                return <option key={elem.code} value={elem.name} >{elem.name}</option>
                            })
                        }
                    </select>

                </div>



                <div className="townCityCont "  >

                    <label htmlFor="town-city"> Town/City </label>
                    <input type="text" className=' w-full border border-[#737373] outline-0 px-[16px] py-[12px] text-[18px]/[26px] rounded-[6px]  ' name="" id="town-city"
                        onChange={(e) => setShippingDetails({ ...shippingDetails, town_city: e.target.value })}
                    />
                </div>


                <div className="pinCodeCont">

                    <label htmlFor="pincode"> PIN Code: </label>
                    <input type="text" className=' w-full border border-[#737373] outline-0 px-[16px] py-[12px] text-[18px]/[26px] rounded-[6px]  ' name="" id="pincode"
                        onChange={(e) => setShippingDetails({ ...shippingDetails, pincode: Number(e.target.value) })}
                    />
                </div>
            </div>
        </>

    )
}

export default ShippingForm
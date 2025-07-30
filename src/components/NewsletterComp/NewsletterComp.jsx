import React, { useRef, useState } from 'react'
// import emailIcon from './TopFooter/email_icon.svg'
import Button from '../FormComp/Button'

import { FaRegEnvelope } from "react-icons/fa";

import emailjs from '@emailjs/browser';

const NewsletterComp = () => {


    let [emailValue, setEmailValue] = useState('')

    let formRef = useRef();


    const handlerSubmitForm = async (e) => {
        let to_email = formRef.current.from_email.value
        e.preventDefault();
        console.log('Form Submitting!')

        // let from_name = formRef.current.from_name.value

        console.log('to_email', to_email)
        // let message = formRef.current.message.value


        try {
            // Receiver - Admin
            await emailjs
                .sendForm(import.meta.env.VITE_EJS_SERVICE_ID, import.meta.env.VITE_EJS_TEMPLATE_RECEIVER_ID, formRef.current, {
                    publicKey: import.meta.env.VITE_EJS_PUBLIC_KEY,
                })

            // Sender - User
            await emailjs
                .send(import.meta.env.VITE_EJS_SERVICE_ID, import.meta.env.VITE_EJS_TEMPLATE_SENDER_ID, { to_email: to_email }, {
                    publicKey: import.meta.env.VITE_EJS_PUBLIC_KEY,
                })

            console.log('Success');
            setEmailValue('');
            
        }
        catch (err) {
            console.log('an Error Occured', err)
            setEmailValue('')
        }

    }


    return (
        <div className='w-full bg-[#eff2f4] py-[40px] px-[20px] flex flex-col justify-center items-center   ' >
            <h3 className='font-[600] text-[20px]/[30px] text-[#1C1C1C] ' >Subscribe on our newsletter</h3>
            <p className='text-[#606060] font-[400] text-[16px]/[26px] pb-[20px] text-center ' >Get daily news on upcoming offers from many suppliers all over the world</p>

            <form action=""
                ref={formRef} onSubmit={handlerSubmitForm} 
                className=' w-full relative flex gap-[8px] tab:flex-row flex-col justify-center items-center '
            >
                {/* <img src={emailIcon} alt="" className=' w-[24px] absolute top-[13px] left-[8px] ' /> */}
                <div className="input_text relative tab:w-auto w-full " >

                    <FaRegEnvelope className=' text-[#8B96A5] text-[16px] absolute top-[13px] left-[14px] ' />
                    <input type="email" placeholder='Email' name='from_email' value={emailValue} onChange={(e) => setEmailValue(e.target.value) }
                        className=' text-[#8B96A5]  tab:min-w-[300px] min-w-full  border-[#DEE2E7] border-1 bg-white placeholder:text-[#8B96A5] py-[8px] pr-[20px] pl-[40px] rounded-[6px] outline-0 '
                    />
                </div>

                <Button type='submit' id="newsletter_submit_btn" text='Subscribe' btnWidth='fit' />

            </form>

        </div>
    )
}

export default NewsletterComp

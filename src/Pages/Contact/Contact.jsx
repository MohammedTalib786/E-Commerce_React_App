import { useEffect, useRef, useState } from 'react'
import contact from '../../assets/Contact/contactUs.webp'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import emailjs from '@emailjs/browser';
import Button from '../../components/FormComp/Button';
import InputBar from '../../components/FormComp/InputBar';

import { useAnimation, useScroll } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import ContactSpotlight from '../../components/ContactPage/Spotlight'
import useDocumentTitle from '../../hooks/useDocumentTitle';


const Contact = () => {

  // >>>>>>>>>>>>>>>>> Change Document Title Dynamically
  useDocumentTitle('Get in Touch - VoltCart');

  let formRef = useRef();
  let [errorMsg, setErrorMsg] = useState({
    name: false,
    nameStyle: "",
    email: false,
    emailStyle: "",
  })
  let [succesMsg, setSuccessMsg] = useState({})
  let [toggleMsg, setToggleMsg] = useState(false)

  let [cFormData, setcFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handlerSubmitForm = async (e) => {
    e.preventDefault();

    let from_name = formRef.current.from_name.value
    let to_email = formRef.current.from_email.value
    let message = formRef.current.message.value

    // console.log('from_name', from_name)
    // console.log('from_name', from_name.length)
    // console.log('to_email', to_email)
    // console.log('message', message)

    try {

      if (from_name.length <= 0) {
        setErrorMsg({ email: false, emailStyle: "", name: true, nameStyle: "border-b-[#c31717] border-b-2" })
        // console.log('name field incorrect')
      }

      else if (to_email.length <= 0 || !emailRegex.test(to_email)) {
        setErrorMsg({ name: false, nameStyle: "", email: true, emailStyle: "border-b-[#c31717] border-b-2" })
        // console.log('email field incorrect')
      }

      else {
        setErrorMsg({ email: false, name: false })
        // console.log('Form Submitting!');
        setToggleMsg(true)
        setSuccessMsg({
          message: "Form Submitting...",
          additionalClass: "bg-[#dfb450]"
        })
        // console.log('Success');

        setcFormData({
          name: '',
          email: '',
          message: ''
        })

        setToggleMsg(true)
        setSuccessMsg({
          message: "Form Submitted Successfully!",
          additionalClass: "bg-[#46b450]"
        })
        setTimeout(() => setToggleMsg(false), 2500)

        // Receiver - Admin
        await emailjs
          .sendForm(import.meta.env.VITE_EJS_SERVICE_ID, import.meta.env.VITE_EJS_TEMPLATE_RECEIVER_ID, formRef.current, {
            publicKey: import.meta.env.VITE_EJS_PUBLIC_KEY,
          })

        // Sender - User
        await emailjs
          .send(import.meta.env.VITE_EJS_SERVICE_ID, import.meta.env.VITE_EJS_TEMPLATE_SENDER_ID, { from_name: from_name, to_email: to_email, message: message }, {
            publicKey: import.meta.env.VITE_EJS_PUBLIC_KEY,
          })
      }

    }
    catch (err) {

      // console.log('an Error Occured', err)
      setToggleMsg(true)
      setSuccessMsg({
        message: "An Error Occured while submitting the Form!",
        additionalClass: "bg-[#b74556] "
      })
      setTimeout(() => setToggleMsg(false), 2500)
      // setcFormData({
      //   name: '',
      //   email: '',
      //   message: ''
      // })
    }
  }


  // >>>>>>>>>>>>>>>>>>>>>>>>> Spotlight ANimation

  const controls = useAnimation();
  const { scrollYProgress } = useScroll();
  const location = useLocation();

  const controls3D = useAnimation();

  // Entrance animation on route change or reload
  useEffect(() => {
    controls3D.set({ y: 50, opacity: 0 }); // reset before animating in
    const timer = setTimeout(() => {
      controls3D.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }, 250);
    return () => clearTimeout(timer);
  }, [location.pathname, controls3D]);

  // Entrance animation on route change or reload
  useEffect(() => {
    controls.set({ y: -50, opacity: 0 }); // reset before animating in
    const timer = setTimeout(() => {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }, 250);
    return () => clearTimeout(timer);
  }, [location.pathname, controls]);

  // Scroll animation
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      controls.start({
        y: latest * -8500, // moves text upward
        // y: latest * 8500, // moves text downward
        opacity: 1 - latest * 1.2, // fades out
        transition: { duration: 0.4 },
      });
    });
  }, [scrollYProgress, controls]);


  return (
    <div>
      <section className="bg-white ">
        <div className="m-auto" >


          {/* >>>>>>>>>>>>>> Full Width 3D Spotlight */}
          <ContactSpotlight />

          {/* >>>>>>>>>>>>>>>>> Spotlight */}
          {/* <div className="relative h-[500px] bg-cover bg-no-repeat bg-center flex flex-col justify-center px-4" style={{ backgroundImage: `url(${contact})` }}>
            <div className="max-w-[1440px] w--[100%] py-[20px] px-[50px] absolute top-0"><BreadCrumbs /></div>
            <h2 className="mb-4 text-4xl lg:text-6xl tracking-tight font-[montserrat] font-[700] text-center text-white dark:text-white">Contact Us</h2>

          </div> */}


          <div className="container_layout mt-[50px] " >
            <div className="w-[100%] flex flex-col justify-center gap-[50px] lg:gap-[75px] md:my-20 mb-[20px]">

              <div className="w-[100%] md:w-[100%] flex flex-col md:flex-row gap-[20px] md:gap-[40px] ">

                <div className="w-[100%] md:w-[33%] border-solid border-2 border-gray-100 py-[10px] px-[20px] rounded-xl">
                  <div className="flex flex-row items-center pb-[10px]">
                    <FaLocationDot width='20px' height='20px' fill='blue' />
                    <h5 className="font-[inter] font-bold text-[16px] pl-[10px]">Location Address</h5>
                  </div>
                  <p className='font-[inter] font-regular text-[16px]'>Shop No. 2, near Cement Bridge, Baramulla, Jammu and Kashmir 193101</p>
                </div>

                <div className="w-[100%] md:w-[33%] border-solid border-2 border-gray-100 py-[10px] px-[20px] rounded-xl">
                  <div className="flex flex-row items-center pb-[10px]">
                    <FaPhone width='20px' height='20px' fill='blue' />
                    <h5 className="font-[inter] font-bold text-[16px] pl-[10px]">Connect over call</h5>
                  </div>
                  <a className='font-[inter] font-regular text-[16px]' href="tel:+91 8454896170">+91 84548-96170</a>
                </div>

                <div className="w-[100%] md:w-[33%] border-solid border-2 border-gray-100 py-[10px] px-[20px] rounded-xl">

                  <div className="flex flex-row items-center pb-[10px]">
                    <MdEmail width='20px' height='20px' fill='blue' />
                    <h5 className="font-[inter] font-bold text-[16px] pl-[10px]">Contact via mail</h5>
                  </div>

                  <a className='font-[inter] font-regular text-[16px]' href="mailto:tausif8454@gmail.com">tausif8454@gmail.com</a>
                </div>

              </div>

            </div>


            <div className="flex flex-col md:flex-row">

              <form
                ref={formRef} onSubmit={handlerSubmitForm}
                className="w=[100%] md:w-[55%] mb-20 space-y-5 md:pr-10 relative "
              >

                <div>
                  {/* <label htmlFor="name" className="block mb-2 font-[inter] text-[16px] font-medium text-black-1c ">Your Name</label>
                  <input type="text" id="name" name='from_name' value={cFormData.name} onChange={(e) => setcFormData({ ...cFormData, name: e.target.value })}
                    className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-visible:outline-[0] block w-full p-2.5 font-[inter] font-regular text-[16px] ${errorMsg.nameStyle} `}
                    placeholder="eg: John Doe"
                  /> */}
                  <InputBar html_for="name" label_text="Your Name"
                    type="text" id="name" name="from_name" placeholder="eg: John Doe"
                    value={cFormData.name} onChange_func={(e) => setcFormData({ ...cFormData, name: e.target.value })}
                    additionalClassName={errorMsg.nameStyle}
                  />
                  {
                    errorMsg.name && <span className='text-[14px]/[20px] text-[#c31717] ' >The Field is required</span>
                  }

                </div>

                <div>
                  {/* <label htmlFor="email" className="block mb-2 font-[inter] text-[16px] font-medium text-black-1c ">Your Email</label>
                  <input
                    type="email" id="email" name='from_email' value={cFormData.email} onChange={(e) => setcFormData({ ...cFormData, email: e.target.value })}
                    className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-visible:outline-[0] block w-full p-2.5 font-[inter] font-regular text-[16px] ${errorMsg.emailStyle} `}
                    placeholder="eg: name@flowbite.com"
                  /> */}

                  <InputBar html_for="email" label_text="Your Email"
                    type="email" id="email" name="from_email" placeholder="eg: name@flowbite.com"
                    value={cFormData.email} onChange_func={(e) => setcFormData({ ...cFormData, email: e.target.value })}
                    additionalClassName={errorMsg.emailStyle}
                  />
                  {
                    errorMsg.email && <span className='text-[14px]/[20px] text-[#c31717] ' >The Field is Incorrect!</span>
                  }
                </div>

                {/* <div>
                  <label htmlFor="subject" className="block font-[inter] mb-2 text-[16px] font-medium text-black dark:text-gray-300">Subject</label>
                  <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus-visible:outline-[0] font-[inter] font-regular text-[16px]" placeholder="Let us know how we can help you" required />
                </div> */}

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block mb-2 font-[inter] text-[16px] font-medium text-black-1c">Your Message</label>
                  <textarea
                    id="message" rows="8" name='message' value={cFormData.message} onChange={(e) => setcFormData({ ...cFormData, message: e.target.value })}
                    // className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-gray-300 font-[inter] focus-visible:outline-[0] font-regular text-[16px]"
                    className="w-full border border-[#737373] outline-0 px-[16px] py-[12px] text-[18px]/[26px] rounded-[6px] focus:border-sky-500 "
                    placeholder="Leave a messege..."></textarea>
                </div>

                {/* <button type="submit" className="py-3 px-5 text-sm font-lg text-center text-white rounded-lg bg-[#1E2D3B] cursor-pointer sm:w-fit hover:bg-[#1e2d3bde] focus:ring-4 focus:outline-none focus:ring-primary-300">Send</button> */}
                <Button type="submit" id="newsletter_submit_btn" text='Send' btnWidth='fit' />

                {
                  toggleMsg &&
                  <div
                    // className="input_msg bg-[#a3a3a3] text-white inline-flex absolute bottom-[23px] right-[40px] px-[30px] py-[6px] rounded-[6px] " 
                    className={`input_msg text-white inline-flex absolute bottom-[23px] right-[40px] px-[30px] py-[6px] rounded-[6px] ${succesMsg.additionalClass} `}
                  >

                    <span className='text-[16px]/[22px] ' >{succesMsg.message}</span>

                  </div>
                }

              </form>

              <iframe className="w-[100%] md:w-[45%] h-[500px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d824.8908350351486!2d74.34184322233432!3d34.20863162896153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x427a1554541875c5%3A0x767cf96bc9f82add!2sBeyond%20Basic%20Home!5e0!3m2!1sen!2sin!4v1750772833106!5m2!1sen!2sin" />
            </div>

          </div>
        </div>

      </section>
    </div>
  )
}

export default Contact

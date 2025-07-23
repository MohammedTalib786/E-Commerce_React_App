import React from 'react'

import logo from '../../../assets/Header/logo.png'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import paymentOptImgs from '../../../assets/Footer/payment_option_new_img.webp'
import { FiPhone } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";

import { SlLocationPin } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
// import { SlLocationPin } from "react-icons/sl";



const TopFooter = () => {
    return (
        <footer className=" head_foot_cont_full w-full max-w-[1440px] mx-auto  flex gt-tab:flex-nowrap flex-wrap  gt-tab:gap-[50px] tab:gap-[40px]  gap-x-0 gap-y-[25px]  bg-white pt-[40px] pb-[50px] gt-tab:px-[50px] tab:px-[30px] px-[20px]  ">

            <div className="columns cols-1 tab:w-[45%] gt-tab:w-full w-full flex flex-col gap-[15px] ">
                <img src={logo} alt="logo" className='max-w-[150px] ' />
                <p className='text-[#505050] font-[400] text-[16px]/[22px]  ' >Best information about the company gies here but now lorem ipsum is</p>
                <div className="socials flex gap-[11px] ">

                    <button className=' bg-[#BDC4CD] w-[32px] h-[32px] flex justify-center items-center rounded-[50px] cursor-pointer hover:bg-prim-blue transition-all ' >
                        <FaFacebookF className='text-[18px]/[18px] h-fit fill-white ' />
                    </button>

                    <button className=' bg-[#BDC4CD] w-[32px] h-[32px] flex justify-center items-center rounded-[50px] cursor-pointer hover:bg-prim-blue transition-all ' >
                        <FaTwitter className='text-[18px]/[18px] h-fit fill-white ' />
                    </button>

                    <button className=' bg-[#BDC4CD] w-[32px] h-[32px] flex justify-center items-center rounded-[50px] cursor-pointer hover:bg-prim-blue transition-all ' >
                        <FaLinkedinIn className='text-[18px]/[18px] h-fit fill-white ' />
                    </button>

                    <button className=' bg-[#BDC4CD] w-[32px] h-[32px] flex justify-center items-center rounded-[50px] cursor-pointer hover:bg-prim-blue transition-all ' >
                        <FaInstagram className='text-[18px]/[18px] h-fit fill-white ' />
                    </button>

                    <button className=' bg-[#BDC4CD] w-[32px] h-[32px] flex justify-center items-center rounded-[50px] cursor-pointer hover:bg-prim-blue transition-all ' >
                        <FaYoutube className='text-[18px]/[18px] h-fit fill-white ' />
                    </button>

                </div>
            </div>

            <div className="columns cols-2  gt-tab:w-[50%] tab:w-[20%] w-[48%] " >
                <h4 className='text-[#1C1C1C] font-[600] text-[16px]/[22px] pb-[12px]   ' >About</h4>
                <ul className='flex flex-col gap-[3px] ' >

                    <li className=' text-[#8B96A5] hover:text-prim-blue  font-[400] text-[16px]/[22px] transition-all ' >
                        <a href="#">About Us</a>
                    </li>
                    <li className=' text-[#8B96A5] hover:text-prim-blue  font-[400] text-[16px]/[22px] transition-all '  >
                        <a href="#">Find store</a>
                    </li>
                    <li className=' text-[#8B96A5] hover:text-prim-blue  font-[400] text-[16px]/[22px] transition-all ' >
                        <a href="#">Categories</a>
                    </li>
                    <li className=' text-[#8B96A5] hover:text-prim-blue  font-[400] text-[16px]/[22px] transition-all '  >
                        <a href="#">Blogs</a>
                    </li>

                </ul>
            </div>

            <div className="columns cols-2 tab:w-[20%] gt-tab:w-[50%]  w-[47%] " >
                <h4 className='text-[#1C1C1C] font-[600] text-[16px]/[22px] pb-[12px]   ' >About</h4>
                <ul className='flex flex-col gap-[3px] ' >

                    <li  className=' text-[#8B96A5] hover:text-prim-blue  font-[400] text-[16px]/[22px] transition-all '  >
                        <a href="#">About Us</a>
                    </li>
                    <li  className=' text-[#8B96A5] hover:text-prim-blue  font-[400] text-[16px]/[22px] transition-all '  >
                        <a href="#">Find store</a>
                    </li>
                    <li  className=' text-[#8B96A5] hover:text-prim-blue  font-[400] text-[16px]/[22px] transition-all '  >
                        <a href="#">Categories</a>
                    </li>
                    <li  className=' text-[#8B96A5] hover:text-prim-blue  font-[400] text-[16px]/[22px] transition-all '  >
                        <a href="#">Blogs</a>
                    </li>

                </ul>
            </div>

            <div className="columns cols-2  gt-tab:w-[80%]    tab:w-[45%] ">
                <h4 className='text-[#1C1C1C] font-[600] text-[16px]/[22px] pb-[12px]   ' >Contact</h4>
                <ul className='flex flex-col gap-[14px] ' >
                    <li className=' text-[#8B96A5] hover:text-prim-blue font-[400] text-[16px]/[22px] flex justify-start items-center gap-[10px] transition-all ' >
                        {/* <img src={phoneIcon} alt="" /> */}
                        <FiPhone className='text-[20px]/[20px]  h-fit ' />
                        <a className='  ' href="tel:+918787878787">+91 8787878787</a>
                    </li>
                    <li className=' text-[#8B96A5] hover:text-prim-blue font-[400] text-[16px]/[22px] flex justify-start items-center gap-[10px] transition-all ' >
                        {/* <img src={emailIcon} alt="" /> */}
                        <FaRegEnvelope className='text-[20px]/[20px]  h-fit ' />
                        <a href="mailto:mail@mail.com">mail@mail.com</a>
                    </li>
                    <li className=' text-[#8B96A5] font-[400] text-[16px]/[22px] flex justify-start items-start gap-[10px] ' >
                        {/* <img src={locationIcon} alt="" /> */}
                        {/* <SlLocationPin className='text-[54px]/[54px] w-[46px] h-fit ' /> */}
                        <SlLocationPin className=' difLocation_icon_footer text-[24px]/[24px] tab:text-[33px]/[33px] gt-tab:text-[33px]/[33px] h-fit ' />
                        <span>13th Street 47 W 13th St, New York, NY 10011, USA</span>
                    </li>

                </ul>
            </div>

            <div className="columns  cols-2 gt-tab:w-[80%]  tab:w-[40%]  ">
                <h4 className='text-[#1C1C1C] font-[600] text-[16px]/[22px] pb-[12px]   ' title='Need to use new image later'  >Payment Options</h4>
                <img src={paymentOptImgs} alt="" />
            </div>

        </footer>
    )
}

export default TopFooter



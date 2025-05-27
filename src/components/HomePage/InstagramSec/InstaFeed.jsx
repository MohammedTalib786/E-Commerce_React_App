import React from 'react'
import { FaInstagram } from "react-icons/fa";
import './instaFeed.css'

const InstaFeed = () => {
    return (

        <div className="flex flex-col py-[50px] gap-[16px] items-center ">

            <h3 className='uppercase text-[32px]/[40px] ' >SHOP OUR INSTA</h3>

            <div className="cont flex gap-[20px]  ">

                <div className="insta_box w-full cursor-pointer relative ">
                    <img
                        src="https://www.tintaccessories.com/wp-content/uploads/2024/01/ARMOUR-Sapphire-Blue-JPEG-1024x1024.jpg"
                        className='h-[320px] object-cover w-full '
                    />
                    <FaInstagram
                        className=' icon_insta text-[65px] text-white mx-auto  '
                    />
                </div>

                <div className="insta_box w-full cursor-pointer relative ">
                    <img
                        src="https://www.tintaccessories.com/wp-content/uploads/2024/01/ARMOUR-Sapphire-Blue-JPEG-1024x1024.jpg"
                        className='h-[320px] object-cover w-full '
                    />
                    <FaInstagram
                        className=' icon_insta text-[65px] text-white mx-auto  '
                    />
                </div>

                <div className="insta_box w-full cursor-pointer relative ">
                    <img
                        src="https://www.tintaccessories.com/wp-content/uploads/2024/01/ARMOUR-Sapphire-Blue-JPEG-1024x1024.jpg"
                        className='h-[320px] object-cover w-full '
                    />
                    <FaInstagram
                        className=' icon_insta text-[65px] text-white mx-auto  '
                    />
                </div>

                <div className="insta_box w-full cursor-pointer relative ">
                    <img
                        src="https://www.tintaccessories.com/wp-content/uploads/2024/01/ARMOUR-Sapphire-Blue-JPEG-1024x1024.jpg"
                        className='h-[320px] object-cover w-full '
                    />
                    <FaInstagram
                        className=' icon_insta text-[65px] text-white mx-auto  '
                    />
                </div>

                <div className="insta_box w-full cursor-pointer relative ">
                    <img
                        src="https://www.tintaccessories.com/wp-content/uploads/2024/01/ARMOUR-Sapphire-Blue-JPEG-1024x1024.jpg"
                        className='h-[320px] object-cover w-full '
                    />
                    <FaInstagram
                        className=' icon_insta text-[65px] text-white mx-auto  '
                    />
                </div>



            </div>
        </div>
    )
}

export default InstaFeed
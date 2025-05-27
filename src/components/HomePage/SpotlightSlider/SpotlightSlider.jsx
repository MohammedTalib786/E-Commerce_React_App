import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Slides from './Slides';



const SpotlightSlider = () => {

    let slides = [
        {
            title: "YOUR PRODUCTS <br/>ARE GREAT.",
            source: "https://www.tintaccessories.com/wp-content/uploads/2024/01/Pueblo-Black-JPEG-1024x1024.jpg"
        },
        {
            title: "TECHNOLOGY <br/>HACK YOU WON'T <br/>GET.",
            source: "https://www.tintaccessories.com/wp-content/uploads/2024/01/69-1024x1024.jpg"
        },
    ]

    return (
        <div className=" bg-[#F6F6F6] ">


            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
            >
                {
                    slides.map((elem) => {
                        return <SwiperSlide> <Slides title={elem.title} source={elem.source} /> </SwiperSlide>
                    })
                }

            </Swiper>
        </div>
    )
}

export default SpotlightSlider
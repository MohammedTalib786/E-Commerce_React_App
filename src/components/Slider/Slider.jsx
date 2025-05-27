import React from 'react'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slides from './Slides';
// import 'swiper/css/scrollbar';

const Slider = () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide> <Slides source="https://www.tintaccessories.com/wp-content/uploads/2024/01/MagPop-JPEG-1024x1024.jpg" /> </SwiperSlide>
            <SwiperSlide> <Slides source="https://www.tintaccessories.com/wp-content/uploads/2023/09/MagPop-3-1024x1005.webp" /> </SwiperSlide>
            <SwiperSlide> <Slides source="https://www.tintaccessories.com/wp-content/uploads/2023/09/MagPop-4-1024x1005.webp" /> </SwiperSlide>
            <SwiperSlide> <Slides source="https://www.tintaccessories.com/wp-content/uploads/2023/09/MagPop-5-1024x1005.webp" /> </SwiperSlide>
            <SwiperSlide> <Slides source="https://www.tintaccessories.com/wp-content/uploads/2023/09/MagPop-6-1024x1005.webp" /> </SwiperSlide>

        </Swiper>
    )
}

export default Slider
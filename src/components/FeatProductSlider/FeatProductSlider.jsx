import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import '../ProductSlider/productSlider.css'

import placeholderImg from '../../assets/placeholder_img.png'

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import ProductCard from '../ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch';
import Loader from '../Loader/SingleRowSkeleton';

const FeatProductSlider = ({
    title,
    urlText,
    urlVal,
}) => {

    let productsAPI = import.meta.env.VITE_PRODUCT_API_KEY;
    let useProdList = useFetch(productsAPI);

    let loader = useProdList.loader;
    let error = useProdList.error;
    let prodData = useProdList.data;

    let filteredData = prodData.filter((elem) =>  elem.featured_col )
    // console.log('filtered', filteredArr)

    return (
        <div className=' w-full py-[50px]' >

            <div className="texts flex items-center justify-between pb-[20px] ">
                <h3 className='uppercase text-[32px]/[40px] ' >{title}</h3>
                <Link
                    to={urlVal}
                    className=' hover:underline '
                >

                    {urlText}
                </Link>
            </div>


            <div className="prodSlider">

                <Swiper
                    // install Swiper modules
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={4}
                    pagination={{ clickable: true }}
                    loop={true}

                >

                    {
                        loader ?
                            (<Loader />)
                            : error ?
                                (<p className="text-red-500">Something went wrong: {error.message}</p>) :
                                (
                                    filteredData.map((elem) => {
                                        return <SwiperSlide> <ProductCard name={elem.name} price={elem.price.sale_price} 
                                        // featImg={elem.feat_img}
                                        featImg={placeholderImg}
                                        urlToProd={elem.slug} /> </SwiperSlide>
                                    })
                                )
                    }

                </Swiper>

            </div>

        </div>
    )
}

export default FeatProductSlider
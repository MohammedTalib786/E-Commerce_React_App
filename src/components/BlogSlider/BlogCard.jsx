import React from 'react'

import placeholderImg from '../../assets/placeholder_img.png'

const BlogCard = () => {
    return (

        <div className="blog_card relative flex flex-col gap-[12px] pb-[20px]  cursor-pointer  " >

            <img
                // src="https://www.tintaccessories.com/wp-content/uploads/2024/01/MagPop-JPEG-1024x1024.jpg"
                src={placeholderImg}
                alt="prod-img"
                className=' h-[260px] object-cover '
            />

            <div className="texts flex flex-col ">
                <h4 className=' font-[Open_Sans] uppercase text-[16px]/[24px] text-gray-500 ' >feb 22, 2023 - Camera</h4>
                <h3 className='text-[20px]/[26px] uppercase ' >Blog Name</h3>
            </div>

        </div>
    )
}

export default BlogCard
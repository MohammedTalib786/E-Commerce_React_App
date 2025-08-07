import React from 'react'
import placeholderImg from '../../assets/placeholder_img.png'
import { Link } from 'react-router-dom'
import './search-box.css'

const SearchBox = ({ name, slug }) => {
    // console.log('name', name)
    // console.log('slug', slug)
    return (
        <Link to={`/products/${slug}`}  >
            <div className="search_box bg-[#f9f9f9] rounded-[16px] w-full px-[14px] py-[12px] flex justify-start items-center gap-[14px] border-[1px] border-[#b5b5b5]  " >
                <img src={placeholderImg} alt="img" className='w-full max-w-[110px] rounded-[12px] ' />
                <p>{name}</p>
            </div>
        </Link>
    )
}

export default SearchBox
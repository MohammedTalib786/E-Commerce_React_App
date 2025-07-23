import React from 'react'

const SearchBar = () => {
    return (
        <div className='flex items-center' >

            <input type="text" name="search" id="search" placeholder='Search'
                className='w-[100%] py-[10px] pl-[20px] font-inter text-[#8B96A5] border-1 border-r-0 border-prim-blue placeholder-get-grey outline-0 rounded-bl-[6px] rounded-tl-[6px] '
            />
            <button
                className='py-[10px] px-[20px] bg-prim-blue border-1 border-prim-blue text-white rounded-tr-[6px] rounded-br-[6px] ' >Search</button>
        </div>
    )
}

export default SearchBar;

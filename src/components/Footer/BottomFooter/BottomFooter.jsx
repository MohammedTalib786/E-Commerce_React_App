import React from 'react'

const BottomFooter = () => {
    // console.log('get Year', new Date().getFullYear())
    return (
        <div className=' w-full py-[23px] bg-[#DEE2E7] ' >

            <p className=' text-[#606060] text-[16px]/[22px] text-center font-[400] ' >
                &copy; {new Date().getFullYear()} Example Corp. All rights reserved
            </p>
        </div>
    )
}

export default BottomFooter

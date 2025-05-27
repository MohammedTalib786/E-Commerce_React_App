import React, { useState } from 'react'
import { FaAngleUp } from "react-icons/fa6";
import './scrollToTop.css'


const ScrollToTop = () => {
    let [toggleClass, setToggleClass] = useState(false)
    // window.addEventListener('scroll', () => window.pageYOffset > 100 ? btn.classList.add('active') : btn.classList.remove('active'))

    window.addEventListener('scroll', () => window.pageYOffset > 150 ? setToggleClass(true) : setToggleClass(false))

    const handlerScrollToTop = () => window.scrollTo(0, 0)

    return (
        <button
            className={` ${toggleClass ? 'onScrollBtn' : ''} scrollToTopBtn opacity-0 pointer-events-none transition-all bg-[var(--primary-color)] w-[55px] h-[55px] text-[28px]/[28px] text-white flex justify-center items-center fixed z-[9999] bottom-[10px] right-[40px] rounded-[50%] cursor-pointer `}
            onClick={handlerScrollToTop}
        >
            <FaAngleUp />

        </button>
    )
}

export default ScrollToTop
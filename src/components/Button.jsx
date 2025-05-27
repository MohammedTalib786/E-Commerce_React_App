import React from 'react'

const Button = ({
    text="Dummy Text",
    borderClr = 'border-black',
    bgClr = "bg-black",
    textClr = "text-white",
    hoverBgClr = "bg-white",
    hoverTextClr = "text-black"
}) => {
    return (
        <button
            className={` uppercase transition-all flex justify-center items-center p-[12px 25px] px-[25px] py-[12px] border ${borderClr} ${bgClr} ${textClr} hover:${hoverBgClr} hover:${hoverTextClr} cursor-pointer  `} >
            {text}
        </button>
    )
}

export default Button;
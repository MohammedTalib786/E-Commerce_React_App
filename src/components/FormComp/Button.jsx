
const Button = ({
    text = "Button",
    borderClr = 'border-prim-blue',
    bgClr = "bg-primary",
    textClr = "text-white",
    hoverBgClr = "bg-white",
    hoverTextClr = "text-black",
    btnWidth = "w-100",
    handlerClickBtnComp,
    type,
    id,
    additionalClass,
}) => {
    return (
        <button
            onClick={handlerClickBtnComp}
            type={type}
            id={id}
            className={` ${btnWidth} max-w-100 transition-all flex justify-center items-center px-[16px] py-[8px] border ${borderClr} ${bgClr} ${textClr}  cursor-pointer rounded-[6px] ${additionalClass} `} >
            {text}
        </button>
    )
}

export default Button;

import React from 'react'

const InputBar = ({
    label_text = "Default Label",
    html_for = "",
    type = "text",
    read_only = false,
    // disabled=false,
    // class_name="w-full border border-[#737373] outline-0 px-[16px] py-[12px] text-[18px]/[26px] rounded-[6px]  focus:border-sky-500",
    class_name = `w-full border border-[#737373] outline-0 px-[16px] py-[12px] text-[18px]/[26px] rounded-[6px] ${!read_only ? 'focus:border-sky-500' : ''} `,
    id,
    value,
    name,
    onclick_func,
    onChange_func
}) => {
    return (
        <>
            {/* <label htmlhtmlFor="country"> Country </label>
            <input
                type="text" readOnly name="" id="country" value="India"
                className=' w-full border border-[#737373] outline-0 px-[16px] py-[12px] text-[18px]/[26px] rounded-[6px]  '
                onClick={handlerCountryInp}
            /> */}

            <label htmlhtmlFor={html_for} > {label_text} </label>
            <input
                type={type} readOnly={read_only} name={name} id={id} value={value}
                className={class_name}
                onClick={onclick_func}
                onChange={onChange_func}
            />
        </>
    )
}

export default InputBar;
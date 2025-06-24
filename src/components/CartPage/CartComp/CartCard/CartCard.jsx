import React, { useState } from 'react'
import './cartCard.css'
import { useCart } from '../../../../contexts/ProdProvider'
import { Link } from 'react-router-dom';

const CartCard = ({
    id,
    prodName = "Item 1",
    price,
    slug,
    feat_img = "https://www.tintaccessories.com/wp-content/uploads/2023/11/Shadow-JPEG-1024x1024.jpg"
}) => {

    let { cartProducts, changeQuantityFunc, removeFromCartFunc } = useCart();

    // console.log('cartProducts Cart Card', cartProducts)
    // console.log('What is Slug in Cart Card', slug)






    let item = cartProducts.find(item => item.id === id);

    let [msg, showMsg] = useState({
        maxItemMsg: false,
        minItemMsg: false
    })

    const handlerRemoveItem = (id) => removeFromCartFunc(id)


    const handlerAddQnt = () => {
        if (item.quantity >= 10) {
            showMsg(prevVal => ({ ...prevVal, maxItemMsg: true }))
            setTimeout(() => showMsg(prevVal => ({ ...prevVal, maxItemMsg: false })), 1500)
        }
        changeQuantityFunc(id, item.quantity <= 9 ? item.quantity + 1 : 10)
    }

    const handlerMinusQnt = () => {
        if (item.quantity <= 1) {
            showMsg(prevVal => ({ ...prevVal, minItemMsg: true }))
            setTimeout(() => showMsg(prevVal => ({ ...prevVal, minItemMsg: false })), 1500)
        }
        changeQuantityFunc(id, item.quantity > 1 ? item.quantity - 1 : 1)
    }

    return (

        <div className="cart_card w-full p-[20px] flex justify-between items-center rounded-[12px] border-[1px] border-[#737373] " >

            <Link to={`/products/${slug}`}   className=' w-full ' >
                <div className="prodInfo  flex w-full items-center gap-[30px] ">
                    <img src={feat_img}
                        alt="" className='w-[110px] '

                    />
                    <div className="text">
                        <h3 className=' text-[22px]/[28px] ' >{prodName}</h3>
                        <h5 className=' text-[20px]/[28px] font-semi-bold text-[var(--primary-color)] ' >&#8377;{price}</h5>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handlerRemoveItem(id)
                            }}
                            className='text-red-500 cursor-pointer hover:underline '
                        >Remove Item From Cart</button>
                    </div>
                </div>
            </Link>
                            
            <div className="qnty flex items-center h-fit p-[10px] relative ">
                {/* >>>>>>>>>>>>>>>>>>>> Message */}
                {
                    msg.maxItemMsg &&
                    <p className='bg-[var(--primary-color)] text-white absolute w-[220px] text-center top-[80px] left-[-30px] text-[17px]/[24px] px-[10px] py-[12px] rounded-[12px]  ' >
                        The maximum number of cart items is 10
                    </p>
                }

                {
                    msg.minItemMsg &&
                    <p className='bg-[var(--primary-color)] text-white  absolute w-[220px] text-center top-[80px] left-[-30px] text-[17px]/[24px] px-[10px] py-[12px] rounded-[12px]  ' >
                        The minimum number of cart items is 1
                    </p>
                }
                {/* >>>>>>>>>>>>>>>>>>>> ENDS Message */}

                <button
                    onClick={handlerMinusQnt}
                    className=' qnty_btns  w-[40px] h-[40px] flex justify-center items-center text-[24px]/[30px] bg-black text-white hover:bg-white hover:text-black transition-all border-[1px] border-black cursor-pointer ' >
                    -
                </button>

                <input type="number"
                    id='qunt_val'
                    className='  w-[60px] text-[28px]/[34px] text-center focus:outline-0 '
                    value={item.quantity}
                    onChange={(e) => changeQuantityFunc(id, Number(e.target.value < 1 ? 1 : e.target.value > 10 ? 10 : e.target.value))}
                />

                <button
                    onClick={handlerAddQnt}
                    className=' qnty_btns  w-[40px] h-[40px] flex justify-center items-center text-[24px]/[30px] bg-black text-white hover:bg-white hover:text-black transition-all border-[1px] border-black cursor-pointer ' >
                    +
                </button>
            </div>

        </div>

    )

}

export default CartCard
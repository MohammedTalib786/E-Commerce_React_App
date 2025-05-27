import './cartCard.css'
import { Link } from 'react-router-dom'
import empCartImg from './empty_cart_image.webp'

const CartCardForEmpty = () => {

    return (
        <div className="cart_card w-full p-[40px] flex items-center rounded-[12px] border-[1px] border-[#737373] " >
            <div className="prodInfo w-full flex justify-center items-center gap-[30px] ">
                <img src={empCartImg} alt="" className=' w-[120px] ' />
                <div className="text flex flex-col gap-[8px] ">
                    <h3 className=' text-[24px]/[30px] ' >Your Cart is Currently Empty </h3>
                    <h5 className=' text-[20px]/[28px] font-semi-bold text-[var(--primary-color)] ' ><Link to='/products' >Return to Shop</Link></h5>
                </div>
            </div>


        </div>
    )
}

export default CartCardForEmpty
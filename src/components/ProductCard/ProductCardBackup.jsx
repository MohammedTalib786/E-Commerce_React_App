import React, { useState } from 'react'
import './productCard.css'

import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../contexts/ProdProvider'
import placeholderImg from '../../assets/placeholder_img.png'

const ProductCard = ({
    id,
    name = "Product Name",
    price = 500,
    slug,
    // featImg = "https://www.tintaccessories.com/wp-content/uploads/2024/01/MagPop-JPEG-1024x1024.jpg",
    featImg = placeholderImg,
    boxWidth = "w-full",
    urlToProd
}) => {

    let [btnElement, setBtnElement] = useState('addToCart');

    let [itemAddedTooltip, setItemAddedTooltip] = useState(true);

    let [toolTipStyle, setToolTipStyle] = useState({
        opacity: 1,
        scale: 1,
        pointerEvents: 'all',
        transform: 'translate(0px, 0px)',
        transition: 'all .45s ease-in-out'
    })

    let navigateToCart = useNavigate();
    let { addToCartFunc } = useCart();

    const ItemAddToCart = () => {
        addToCartFunc({ id: id, name: name, feat_img: featImg, price: price, slug: slug, quantity: 1 });
        // console.log('Handler Added to Cart func prod det pg');
    }

    const ItemViewCart = () => navigateToCart("/cart")

    const checkAddToCartElem = () => setBtnElement(btnElement === "addToCart" ? "viewCart" : "addToCart")

    const handlerAddToCart = (e) => {
        // >>>>>>>>>>>>>>>>>>>>>>> Calling Main Add to Cart Func
        e.stopPropagation();
        e.preventDefault();
        ItemAddToCart();
        checkAddToCartElem();

        // >>>>>>>>>>>>>>>> For ToolTip
        setTimeout(() => {
            setToolTipStyle({
                opacity: 0,
                scale: .5,
                pointerEvents: 'none',
                transform: 'translate(0px, 70px)',
                transition: 'all .45s ease-in-out'
            })
        }, 1500)

        setTimeout(() => setItemAddedTooltip(false), 2000)
        // >>>>>>>>>>>>>>>> ENDS For ToolTip
    }

    const handlerViewCart = (e) => {
        e.stopPropagation();
        e.preventDefault();
        ItemViewCart();
        checkAddToCartElem();
    }

    return (
        <>
            <div className={`prod_card relative flex flex-col gap-[12px] pb-[20px] cursor-pointer ${boxWidth} `} >
                <Link to={`/products/${urlToProd}`} >

                    <img src={featImg} alt="prod-img" className=' h-[360px] object-cover w-full  ' />

                    <div className="texts flex justify-between pt-[12px] ">
                        <h3 className='  text-[20px]/[26px] w-[100%]  ' >{name}</h3>
                        <h4 className=' text-[20px]/[26px] text-[var(--primary-color)] w-[35%] text-right  '  > &#8377; {price} </h4>
                    </div>

                    {/* >>>>>>>>>>>>> Item Added to Cart > ToolTip */}
                    {
                        btnElement !== "addToCart" ?
                            (
                                itemAddedTooltip && <div style={toolTipStyle} className="  item_added_toolTip w-50% bg-[var(--primary-color)] px-[32px] py-[10px] rounded-[12px] absolute bottom-[185px] left-[40px] text-white  "> Item added to Cart</div>
                            ) :
                            ""
                    }

                    {/* >>>>>>>>>>>>> Add to Cart and View Cart Button */}
                    {
                        btnElement === "addToCart" ?
                            (<button
                                onClick={handlerAddToCart}
                                className=' add_to_cart_btn w-[85%] top-[295px] left-[22px] absolute  uppercase transition-all flex justify-center items-center p-[12px 25px] px-[25px] py-[12px] border border-black bg-black text-white hover:bg-white hover:text-black cursor-pointer  '
                            >Add to Cart</button>) :
                            (<button
                                onClick={handlerViewCart}
                                className=' view_cart_btn add_to_cart_btn w-[85%] top-[295px] left-[22px] absolute  uppercase transition-all flex justify-center items-center p-[12px 25px] px-[25px] py-[12px] border border-black bg-black text-white hover:bg-white hover:text-black hover:underline cursor-pointer  '
                            >View Cart</button>)
                    }

                </Link>

            </div>

        </>

    )
}

export default ProductCard
import React from 'react'
import { useCart } from '../../contexts/ProdProvider'
import CartCard from '../../components/CartPage/CartComp/CartCard/CartCard'
import CartCardForEmpty from '../../components/CartPage/CartComp/CartCard/CartCardForEmpty'
import OrderSummary from '../../components/CartPage/CartComp/OrderSummary/OrderSummary'

const Cart = () => {

    let { cartProducts } = useCart()

    // console.log('products context in Cart Page', cartProducts, typeof cartProducts)
    // console.log('cartProducts.length', cartProducts.length)
    // let cartItems = products[0].map((elem) => elem)

    // console.log('cartItems', cartItems, typeof cartItems)

    // cartProducts.map((elem) => {
    // console.log('inside Cart itrems | elem', elem)
    // console.log("IDs", elem.id)
    // })

    // cartProducts 

    return (

        <div className="py-[50px]">
            {/* >>>>>>>>>>>>>> In Cont */}
            <div className="container_layout mx-auto flex justify-center items-center flex-col   "  >

                <div className="cart_heading pb-[40px] "  >
                    <h1 className=" text-3xl font-bold text-center ">Cart</h1>
                </div>

                <div className="cart_card_cont w-full px-[50px] flex gap-[35px] "  >

                    {

                        cartProducts.length <= 0
                            ? <CartCardForEmpty />
                            : (
                                <>
                                    <div className=" w-[70%] flex flex-col gap-[15px]  "  >
                                        {
                                            cartProducts.map((elem, index) => <CartCard
                                                key={`${elem.id}-${index}`} id={elem.id} prodName={elem.name} slug={elem.slug} price={elem.price} feat_img={elem.feat_img}
                                            />)
                                        }
                                    </div>
                                    <OrderSummary />
                                </>
                            )
                    }

                </div>
            </div>


        </div>

    )
}

export default Cart
import React from 'react'
import Button from '../../Button'

const YourOrderComp = ({ dummyHandlerPlaceOrder }) => {


    return (
        <>
            <div className=' w-[40%] bg-red-500 ' >

                <p>YourOrderComp</p>

                {/* >>>>>>>>>>>>>> Demo Submit Button */}
                <Button
                    text='Dummy Place Order'
                    handlerClickBtnComp={dummyHandlerPlaceOrder}
                    btnWidth='w-[100%]'
                />
            </div>

        </>
    )
}

export default YourOrderComp
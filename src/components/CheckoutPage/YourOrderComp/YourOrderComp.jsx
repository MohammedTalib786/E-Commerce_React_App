import React from 'react'
import Button from '../../FormComp/Button'

const YourOrderComp = () => {


    return (
        <>
            <div className=' w-[40%] bg-red-200 ' >

                <p>YourOrderComp</p>

                {/* >>>>>>>>>>>>>> Demo Submit Button */}
                <Button
                    text='Dummy Place Order'
                    
                    btnWidth='w-[100%]'
                    type="submit"
                />
            </div>

        </>
    )
}

export default YourOrderComp
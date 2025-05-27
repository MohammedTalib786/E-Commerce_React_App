import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import SpinnerLoader from '../../components/Loader/SpinnerLoader';



const ProductDetail = () => {

    let [loader, setLoader] = useState(true)

    let [prodData, setProdData] = useState({})
    let params = useParams();
    let productsAPI = import.meta.env.VITE_PRODUCT_API_KEY;
    console.log('params', params, typeof params)

    useEffect(() => {
        (async () => {
            setLoader(true)
            let data = await fetch(`${productsAPI}/${params.slug}`);
            let res = await data.json();
            console.log('res', res)
            setProdData(res)
            setLoader(false)
        })()
    }, [])


    return (

        <div className='py-[50px] ' >
            <h1 className='mx-auto text-center text-3xl  ' >This is the Product Detail Page</h1>

            {
                loader ?
                    <SpinnerLoader /> :
                    <div>
                        <h2 className='text-2xl' >Product Parameter {params.slug}</h2>
                        <img src={prodData.feat_img} alt="" />
                        <h3>{prodData.name}</h3>

                        <p className='text-decoration-line'  > Regular Price: Rs: {prodData.price?.reg_price} </p>
                        <p className=''  > Sale Price: Rs: {prodData.price?.sale_price} </p>
                    </div>
            }

        </div>

    )
}

export default ProductDetail;

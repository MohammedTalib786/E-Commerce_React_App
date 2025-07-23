import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import '../../components/layout.css'
import Loader from '../../components/Loader/SkeletonLoader'
import useFetch from '../../hooks/useFetch'
import placeholderImg from '../../assets/placeholder_img.png'



const Products = () => {

    let productsAPI = import.meta.env.VITE_PRODUCT_API_KEY;
    // console.log('Vite API Key', import.meta.env.VITE_PRODUCT_API_KEY)


    let useProdList = useFetch(productsAPI);

    let loader = useProdList.loader;
    let error = useProdList.error;
    let prodData = useProdList.data;

    // console.log('useProdList Main hook in List Page', useProdList);

    return (

        <div className=" py-[50px] "  >

            {/* >>>>>>>>>>>>>> In Cont */}
            <div className="container_layout mx-auto flex justify-center items-center flex-col  "  >

                <h1 className=" text-3xl font-bold text-center pb-5 ">Products</h1>

                <div className="cont flex w-full flex-wrap justify-center items-center gap-[20px] " >

                    {
                        loader ?
                            (<Loader />)
                            : error ?
                                (<p className="text-red-500">Something went wrong: {error.message}</p>) :
                                (
                                    prodData.map(elem => <ProductCard
                                        urlToProd={elem.slug}
                                        key={elem.id}
                                        id={elem.id}
                                        boxWidth={"w-[23%]"}
                                        name={elem.name}
                                        slug={elem.slug}
                                        price={elem.price.sale_price}
                                        // featImg={elem.feat_img}
                                        featImg={placeholderImg}
                                    />
                                    )
                                )
                    }

                </div>


            </div>
        </div>
    )
}

export default Products
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import blogData from '../../../blogdata.json'
import useFetch from '../../hooks/useFetch';
import SkeletonLoader from '../../components/Loader/SearchBoxSkeleton';
import SearchBox from '../../components/SearchListing/SearchBox';
import useDocumentTitle from '../../hooks/useDocumentTitle';


const SearchListing = () => {

    // >>>>>>>>>>>>>>>>> Change Document Title Dynamically
    useDocumentTitle('Search - VoltCart');

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');
    // console.log('search main Query: ', query);
    let [loader, setLoader] = useState(true)

    let [results, setResults] = useState([]);

    let productsAPI = import.meta.env.VITE_PRODUCT_API_KEY;
    // will use the blog api as well ...Further
    // (Currently its Dummy Data)

    let useProdList = useFetch(productsAPI);
    let prodData = useProdList.data;

    let blog_filtered = blogData.filter(elem => {
        let blogTitle = elem.name.toLowerCase()
        let searchQuery = query.toLowerCase();
        return blogTitle.includes(searchQuery);
    })
    // console.log('blog_filtered', blog_filtered)

    let prod_filtered = prodData.filter(elem => {
        let prodTitle = elem.name.toLowerCase()
        let searchQuery = query.toLowerCase();
        return prodTitle.includes(searchQuery);
    })
    // console.log('prod_filtered', prod_filtered)

    useEffect(() => {
        setLoader(true)
        setResults([...prod_filtered, ...blog_filtered])
        setLoader(false)
    }, [query, prodData, blogData])


    // console.log('Main Result for Query: Italian Pueblo', results);

    return (

        <>

            {/* >>>>>>>>>>>>>> In Cont */}
            <div className="container_layout mx-auto flex justify-center items-start flex-col gap-[15px] w-full " >
                <h2 className='pt-[50px] pb-[5px] text-[22px]/[28px] ' >{results.length <= 0 ? "" : `Search Results for: "${query}"`}</h2>

                <div className="search_box_cont w-full flex flex-col gap-[20px] pb-[50px] " >

                    {/* {
                        loader ? <SkeletonLoader /> : results.map(elem => <SearchBox name={elem.name} />)
                    } */}

                    {
                        loader ?
                            <SkeletonLoader /> :
                            results.length <= 0 ?
                                <SearchBox name="No Results Found!" /> :
                                results.map((elem, ind) => <SearchBox key={ind} name={elem.name} slug={elem.slug} />)
                    }


                    {/* <div className="search_box bg-[#d9d9d9] rounded-[6px] w-full px-[30px] py-[20px] flex justify-start items-center " >
                        <p>Hello</p>
                    </div>
                    <div className="search_box bg-[#d9d9d9] rounded-[6px] w-full px-[30px] py-[20px] flex justify-start items-center " >
                        <p>Hello</p>
                    </div>
                    <div className="search_box bg-[#d9d9d9] rounded-[6px] w-full px-[30px] py-[20px] flex justify-start items-center " >
                        <p>Hello</p>
                    </div>
                    <div className="search_box bg-[#d9d9d9] rounded-[6px] w-full px-[30px] py-[20px] flex justify-start items-center " >
                        <p>Hello</p>
                    </div> */}

                </div>

            </div>
        </>

    )
}

export default SearchListing
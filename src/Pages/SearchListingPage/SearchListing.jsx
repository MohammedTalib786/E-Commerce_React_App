import React, { useState } from 'react'

import { useLocation } from 'react-router-dom'
import blogData from '../../../blogdata.json'


const SearchListing = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');
    console.log('search main Query: ', query)

    console.log('blog data', blogData)

    let filtered = blogData.filter(elem => {
        let blogTitle = elem.name.toLowerCase()
        let searchQuery = "Blog Data".toLowerCase();
        return blogTitle.includes(searchQuery);
    })

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Cracked the functionality | Just use it in the App Properly with BLog and Prod

    console.log('filtered', filtered)


    // let [results, setResults] = useState([]);
    // let blogs = 

    return (

        <>

            {/* >>>>>>>>>>>>>> In Cont */}
            <div className="container_layout mx-auto flex justify-center items-start flex-col gap-[15px] bg-amber-400 w-full " >
                <h2 className='pt-[20px]' >Search Results for: "Search Query"</h2>

                <div className="search_box_cont w-full flex flex-col gap-[20px] pb-[50px] " >

                    <div className="search_box bg-pink-50 w-full px-[30px] py-[20px] flex justify-center items-center " >
                        <p>Hello</p>
                    </div>
                    <div className="search_box bg-pink-50 w-full px-[30px] py-[20px] flex justify-center items-center " >
                        <p>Hello</p>
                    </div>
                    <div className="search_box bg-pink-50 w-full px-[30px] py-[20px] flex justify-center items-center " >
                        <p>Hello</p>
                    </div>
                    <div className="search_box bg-pink-50 w-full px-[30px] py-[20px] flex justify-center items-center " >
                        <p>Hello</p>
                    </div>

                </div>

            </div>
        </>

    )
}

export default SearchListing
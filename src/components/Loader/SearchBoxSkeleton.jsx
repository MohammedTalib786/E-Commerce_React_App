import React from 'react'
import './search-box-skeleton.css'

const SearchBoxSkeleton = () => {
    return (
        <div className="container">
            <div className="post  ">
                <div className="avatar"></div>
                <div className="flex flex-col ">
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
            <div className="post  ">
                <div className="avatar"></div>
                <div className="flex flex-col ">
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
            <div className="post  ">
                <div className="avatar"></div>
                <div className="flex flex-col ">
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>

        </div>
    )
}

export default SearchBoxSkeleton
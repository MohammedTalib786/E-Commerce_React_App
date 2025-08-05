import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './layout.css'
import ScrollToTopButton from './ScrollToTopButton/ScrollToTopButton'
import NewsletterComp from './NewsletterComp/NewsletterComp'


const Layout = () => {
    return (
        <>
            <Header />
            <div 
            // className=' tab:mt-[60px] mt-[56px] '
            className=' m-0 '
             >
                <Outlet />
            </div>
            <ScrollToTopButton />
            <NewsletterComp />
            <Footer />
        </>

    )
}

export default Layout

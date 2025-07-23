import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './layout.css'
import ScrollToTop from './ScrollToTop/ScrollToTop'
import NewsletterComp from './NewsletterComp/NewsletterComp'


const Layout = () => {
    return (
        <>
            <Header />
            <div className=' tab:mt-[60px] mt-[56px] ' >
                <Outlet />
            </div>
            <ScrollToTop />
            <NewsletterComp />
            <Footer />
        </>

    )
}

export default Layout

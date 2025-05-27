import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './layout.css'
import ScrollToTop from './ScrollToTop/ScrollToTop'

const Layout = () => {
    return (
        <>
            <Header />
            <div className=' mt-[65px] ' >
                <Outlet />
            </div>
            <ScrollToTop />
            <Footer />
        </>

    )
}

export default Layout
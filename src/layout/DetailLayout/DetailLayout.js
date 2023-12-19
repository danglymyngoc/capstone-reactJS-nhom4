import React from 'react'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import { Outlet } from 'react-router-dom'


export default function
    () {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

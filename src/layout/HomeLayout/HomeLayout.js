
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
export default function HomeLayout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

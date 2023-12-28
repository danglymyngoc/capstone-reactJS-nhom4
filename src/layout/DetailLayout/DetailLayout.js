import React from 'react'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { FloatButton } from 'antd';

export default function
    () {
    return (
        <div style={{
            height: '300vh',
        }}>
            <Header />
            <Outlet />
            <Footer />
            <FloatButton.BackTop />
        </div>
    )
}

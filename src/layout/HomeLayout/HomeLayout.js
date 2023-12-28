
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import { FloatButton } from 'antd';
export default function HomeLayout() {
    return (
        <div style={{
            height: '300vh',
        }}>

            <Header />
            <div
                className=''
            >

                <Outlet />

            </div>
            <Footer />

            <FloatButton.BackTop />
        </div>
    )
}

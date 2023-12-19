import React from 'react'
import Header from '../../component/Header/Header'
import UserProfile from '../../page/UserProfile/UserProfile'
import Footer from '../../component/Footer/Footer'

export default function UserProfileLayout() {
    return (
        <div>
            <Header />
            <UserProfile />
            <Footer />
        </div>
    )
}

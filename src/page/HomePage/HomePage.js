import React from 'react'
import Banner from './Banner/Banner'
import ListMovie from './ListMovie/ListMovie'
import TabMovie from './TabMovie/TabMovie'
import Contact from './Contact/Contact'

export default function HomePage() {
    return (
        <div>
            <Banner />
            <ListMovie />
            <TabMovie />
            <Contact />

        </div>
    )
}

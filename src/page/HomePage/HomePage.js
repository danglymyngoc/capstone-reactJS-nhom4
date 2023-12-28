import React from 'react'
import Banner from './Banner/Banner'
import ListMovie from './ListMovie/ListMovie'
import TabMovie from './TabMovie/TabMovie'
import Contact from './Contact/Contact'
import SearchMovie from './SearchMovie/SearchMovie'
import DemoList from './ListMovie/DemoList'
import ResponsiveListMovie from './ListMovie/ResponsiveListMovie'

export default function HomePage() {
    return (
        <div>
            <Banner />
            <div className="">
                <SearchMovie />
                <ResponsiveListMovie />
            </div>
            <TabMovie />
            <Contact />

        </div>
    )
}

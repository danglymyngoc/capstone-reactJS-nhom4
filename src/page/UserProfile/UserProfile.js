import React from 'react'

import LichSuDatVe from './LichSuDatVe';
import ThongTinCaNhan from './ThongTinCaNhan';


export default function UserProfile() {


    return (
        <div className='container-body min-h-screen mt-10'>
            <div className='grid col-span-12'>
                <div className='col-span-6'>
                    <ThongTinCaNhan />

                </div>
                <div className='col-span-6'>
                    <LichSuDatVe />

                </div>
            </div>
        </div>
    )

}

//accessToken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4zMjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhZG1pbjMyMUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiUXVhblRyaSIsImFkbWluMzIxQGdtYWlsLmNvbSIsIkdQMDEiXSwibmJmIjoxNzAzMDc0MDE0LCJleHAiOjE3MDMwNzc2MTR9.2hZ-vk7L7xCTU1T80I8qT4x5kKBAKalZgQ7lHskkZ6Y"

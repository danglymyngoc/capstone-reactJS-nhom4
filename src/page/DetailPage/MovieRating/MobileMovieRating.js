import { Rate } from 'antd'
import moment from 'moment'
import React from 'react'
import { Progress, Space } from 'antd';


const conicColors = {
    '0%': '#87d068',
    '50%': '#ffe58f',
    '100%': '#ffccc7',
};
export default function MobileMovieRating({ movieRating }) {

    return (
        <div className='container mt-10'>
            <div className=' grid grid-cols-2'>
                <div className='mr-3'>
                    <img style={{ width: '100%', height: '100%' }} src={movieRating.hinhAnh} alt="" />
                </div>
                <div className='space-y-3' >
                    <p className='text-2xl font-semibold text-blue-600 text-center'>{movieRating.tenPhim}</p>
                    <div className='text-center'>
                        <Rate className=' text-xl ' allowHalf value={movieRating.danhGia / 2} count={5} disabled />
                    </div>
                    <p><span className='text-red-600 font-semibold'>Ngày khởi chiếu: </span><span className='font-semibold'>{moment(movieRating.ngayKhoiChieu).format('DD-MM-YYYY')}</span></p>
                    <p className='text-justify leading-6'> <span className='text-red-600 font-semibold'>Nội dung phim: </span><span >{movieRating.moTa}</span></p>
                </div>

            </div>

        </div>
    )
}


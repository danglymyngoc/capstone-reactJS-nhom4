import { Rate } from 'antd'
import moment from 'moment'
import React from 'react'

export default function MovieRating({ movieRating }) {

    return (
        <div className='container'>
            <div className=' grid grid-cols-12 gap-5'>
                <div className='col-span-4'>
                    <img style={{ width: '100%', height: '100%' }} src={movieRating.hinhAnh} alt="" />
                </div>
                <div className='col-span-6' >
                    <p>{movieRating.tenPhim}</p>
                    <Rate allowHalf value={movieRating.danhGia / 2} count={5} />
                    <p>{moment(movieRating.ngayKhoiChieu).format('DD-MM-YYYY')}</p>
                    <button className='btn-theme'>Xem trailer</button>
                </div>

            </div>
            <div>
                {movieRating.moTa}
            </div>
        </div>
    )
}

import { Rate } from 'antd'
import moment from 'moment'
import React from 'react'
import { Progress, Space } from 'antd';


const conicColors = {
    '0%': '#87d068',
    '50%': '#ffe58f',
    '100%': '#ffccc7',
};
export default function TabletMovieRating({ movieRating }) {

    return (
        <div className='container mt-10'>
            <div className=' grid grid-cols-12'>
                <div className='col-span-4 mr-5'>
                    <img style={{ width: '100%', height: '100%' }} src={movieRating.hinhAnh} alt="" />
                </div>
                <div className='col-span-4 space-y-3' >
                    <p className='text-3xl font-semibold text-blue-600'>{movieRating.tenPhim}</p>

                    <p><span className='text-red-600 font-semibold'>Ngày khởi chiếu: </span><span className='font-semibold'>{moment(movieRating.ngayKhoiChieu).format('DD-MM-YYYY')}</span></p>
                    <p className='text-justify leading-6'> <span className='text-red-600 font-semibold'>Nội dung phim: </span><span >{movieRating.moTa}</span></p>
                </div>
                <div className='col-span-4'>
                    <div className='flex justify-center items-center flex-col'>
                        <Space >

                            <Progress type="circle" percent={movieRating.danhGia * 10} strokeColor={conicColors} format={(percent) => `${percent / 20}/${percent / 20}`} size={150} />
                        </Space>
                        <Rate className='text-2xl mt-5' allowHalf value={movieRating.danhGia / 2} count={5} disabled />
                    </div>
                </div>
            </div>

        </div>
    )
}

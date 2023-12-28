import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setThongTinDatVeAction } from '../../redux/action/userProfile'
import moment from 'moment'



export default function LichSuDatVe() {
    const dispatch = useDispatch()
    const thongTinDatVe = useSelector(state => state.userProfileReducer.thongTinDatVe)
    console.log(thongTinDatVe)
    useEffect(() => {
        dispatch(setThongTinDatVeAction())
    }, [])
    console.log(thongTinDatVe.danhSachGhe, 'danhSachGhe')

    return (
        <div className=''>
            <div className='p-3 m-2 bg-white rounded-lg'>
                <div className='mb-3 border-b-2 pb-3'>
                    <h1 className='text-lg leading-6 font-semibold text-gray-900'>Lịch sử đặt vé</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 h-96 overflow-y-auto'>
                    {thongTinDatVe.length > 0 ? (
                        thongTinDatVe.map((item, index) => (
                            <div key={index}>
                                <p className='font-semibold'>Ngày đặt: {moment(item.ngayDat).format("DD-MM-YYYY | hh:mm")}</p>
                                <p className='font-semibold text-xl text-[#fb4226]'>Tên phim: {item.tenPhim}</p>
                                <p className='font-medium'>
                                    Thời lượng: {item.thoiLuongPhim} phút, Giá vé: {item.giaVe.toLocaleString()} VND
                                </p>
                                <p className='font-semibold text-xl text-[#008000]'>{item.danhSachGhe[0].tenHeThongRap}</p>
                                <p className='font-medium'>
                                    {item.danhSachGhe[0].tenCumRap}, Ghế:{" "}
                                    {item.danhSachGhe.map((itemChild, indexChild) => (
                                        <span key={indexChild}>
                                            {itemChild.tenGhe}
                                            {indexChild === item.danhSachGhe.length - 1 ? "." : ", "}
                                        </span>
                                    ))}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className='font-semibold'>Không có vé nào được đặt</p>
                    )}
                </div>
            </div>

        </div>
    )
}

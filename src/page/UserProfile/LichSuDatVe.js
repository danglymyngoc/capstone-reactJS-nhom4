import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setThongTinDatVeAction } from '../../redux/action/userProfile'
import moment from 'moment'


export default function LichSuDatVe() {
    console.log('render');
    const dispatch = useDispatch()

    const thongTinDatVe = useSelector(state => state.userProfileReducer.thongTinDatVe)

    console.log(thongTinDatVe, 'thongTinDatVe');

    useEffect(() => {
        dispatch(setThongTinDatVeAction())
        console.log('useEffect')
    }, [])
    return (

        <div>

            {thongTinDatVe.map((item, index) => {
                return <div key={index} className="max-w-md p-8 sm:flex sm:space-x-6 bg-gray-50 text-gray-800">
                    <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                        <img src={item.hinhAnh} alt className="object-cover object-center w-full h-full rounded bg-gray-500" />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <h2 className="text-2xl font-semibold">{item.tenPhim}</h2>
                            <span className="text-sm text-gray-600">Ngày đặt: {moment(`${item.ngayDat}`).format('DD/MM/YYYY - hh:mm')}</span>
                        </div>
                        <div className="space-y-1">
                            {item.danhSachGhe?.map((dsg) => {
                                return <span className="text-gray-600">
                                    {dsg.tenHeThongRap} <br /> {dsg.tenCumRap} - Ghế {dsg.tenGhe}
                                </span>

                            })}

                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

import React, { Fragment, useEffect } from 'react'
import './styleBookingPage.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setBookingAction, setDatVeAction } from '../../redux/action/booking'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { button } from '@material-tailwind/react'
import { DAT_GHE, DAT_LAI_GHE } from '../../redux/constant/booking'
import { message } from 'antd'



export default function TabletBooking() {
    const { maLichChieu } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const thongTinPhim = useSelector(state => state.bookingReducer.thongTinPhim)
    const danhSachGhe = useSelector(state => state.bookingReducer.danhSachGhe)
    const danhSachGheDuocChon = useSelector(state => state.bookingReducer.danhSachGheDuocChon)
    console.log(danhSachGheDuocChon, 'danhSachGheDuocChon')
    console.log(thongTinPhim, 'thongTinPhim')
    useEffect(() => {
        dispatch(setBookingAction(maLichChieu))
    }, [])
    const values = {
        "maLichChieu": thongTinPhim.maLichChieu,
        "danhSachVe": danhSachGheDuocChon
    }
    console.log(values, 'values')
    const tinhTongTien = () => {
        let sum = 0
        for (let i = 0; i < danhSachGheDuocChon.length; i++) {
            let ghe = danhSachGheDuocChon[i]
            sum += ghe.giaVe
        }
        return sum.toLocaleString() + 'đ'
    }
    return (
        <div className='flex flex-col  items-center container-body text-center  mb-10 ' style={{
            width: 700
        }}>
            <div className=' ' >
                <div className='screen mt-5 text-base font-semibold'>Màn hình </div>

                <div className=' bg-current py-5'>
                    <div className='text-sm'>
                        {danhSachGhe?.map((item, index) => {
                            if (item.daDat === true) {
                                return <button className='gheDuocChon'><FontAwesomeIcon icon={faX} /></button>
                            } else if (item.daDat === false) {
                                if (item.loaiGhe === 'Thuong') {
                                    return <button onClick={() => {
                                        dispatch({
                                            type: DAT_GHE,
                                            payload: item
                                        })
                                    }} className='ghe'>{item.tenGhe}</button>
                                } else {
                                    return <button onClick={() => {
                                        dispatch({
                                            type: DAT_GHE,
                                            payload: item
                                        })
                                    }} className='gheVip'>{item.tenGhe}</button>
                                }
                            } else {
                                return <button onClick={() => {
                                    dispatch({
                                        type: DAT_LAI_GHE,
                                        payload: item
                                    })
                                }} className='gheDangChon'>{item.tenGhe}</button>

                            }
                        })}
                    </div>
                </div>
                <div className='flex justify-center shadow-lg bg-current pb-5 rounded-br rounded-bl'>
                    <div>
                        <span className='text-white' >Ghế đã đặt</span>
                        <button style={{ marginTop: 5 }} className='gheDuocChon font-semibold'><FontAwesomeIcon icon={faX} /></button>
                    </div>
                    <div>
                        <span className='text-white'>Ghế đang đặt</span>
                        <button className='gheDangChon'></button>
                    </div>
                    <div>
                        <span className='text-white'>Ghế thường</span>
                        <button className='ghe'></button>
                    </div>
                    <div>
                        <span className='text-white'>Ghế VIP</span>
                        <button className='gheVip'></button>
                    </div>
                </div>
            </div>
            <div className=' mt-5' style={{
                width: 700
            }}>
                <div className='space-y-5'>
                    <div className='text-black font-semibold text-xl'>Thông tin đặt vé</div>

                    <div className='flex items-center justify-between border-b py-1'>
                        <h2 className='text-black font-semibold'>Cụm Rạp:</h2>
                        <h2 className='text-red-600 font-semibold'>{thongTinPhim.tenCumRap}</h2>
                    </div>

                    <div className='flex items-center justify-between border-b py-1'>
                        <h2 className='text-black font-semibold text-left w-20'>Địa chỉ:</h2>
                        <h2 className='text-red-600 font-semibold text-right'>{thongTinPhim.diaChi}</h2>
                    </div>
                    <div className='flex items-center justify-between border-b py-1'>
                        <h2 className='text-black font-semibold'>Rạp:</h2>
                        <h2 className='text-red-600 font-semibold'>{thongTinPhim.tenRap}</h2>
                    </div>
                    <div className='flex items-center justify-between border-b py-1'>
                        <h2 className='text-black font-semibold'>Ngày giờ chiếu:</h2>
                        <h2 className='text-red-600 font-semibold'><span>{thongTinPhim.ngayChieu}</span> - <span>{thongTinPhim.gioChieu}</span></h2>
                    </div>
                    <div className='flex items-center justify-between border-b py-1'>
                        <h2 className='text-black font-semibold'>Tên Phim:</h2>
                        <h2 className='text-red-600 font-semibold'>{thongTinPhim.tenPhim} </h2>
                    </div>

                    <div className="flex flex-row my-5 justify-between border-b py-1">
                        <div >
                            <span className="text-black font-semibold mr-2">Ghế:</span>


                        </div>

                        <div className="text-right col-span-1">
                            {danhSachGheDuocChon?.map((ghe, index) => {
                                return <Fragment key={index}>
                                    <span className="text-green-600  font-semibold  inline-block">
                                        {`${ghe.tenGhe},`}
                                    </span>
                                </Fragment>
                            })}
                        </div>
                    </div>
                    <div className='flex items-center justify-between border-b py-1'>
                        <h2 className='text-black font-semibold'>Tổng tiền:</h2>
                        <h2 className='text-red-600 font-semibold'>{tinhTongTien()} </h2>
                    </div>
                    <div className='text-center'>
                        <button
                            className='btn-theme block w-full'
                            onClick={() => {
                                if (danhSachGheDuocChon.length !== 0) {

                                    dispatch(setDatVeAction(values, navigate))
                                } else {
                                    message.error('Vui lòng chọn ghế!')
                                }
                            }}
                        >Đặt vé</button>
                    </div>
                </div>
            </div>
        </div>


    )
}


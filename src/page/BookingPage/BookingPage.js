import React, { Fragment, useEffect } from 'react'
import './styleBookingPage.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setBookingAction } from '../../redux/action/booking'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { button } from '@material-tailwind/react'
import { DAT_GHE, DAT_LAI_GHE } from '../../redux/constant/booking'



export default function BookingPage() {
    const { maLichChieu } = useParams()
    const dispatch = useDispatch()
    const thongTinPhim = useSelector(state => state.bookingReducer.thongTinPhim)
    const danhSachGhe = useSelector(state => state.bookingReducer.danhSachGhe)
    const danhSachGheDuocChon = useSelector(state => state.bookingReducer.danhSachGheDuocChon)
    useEffect(() => {
        dispatch(setBookingAction(maLichChieu))
    }, [])

    const tinhTongTien = () => {
        let sum = 0
        for (let i = 0; i < danhSachGheDuocChon.length; i++) {
            let ghe = danhSachGheDuocChon[i]
            sum += ghe.giaVe
        }
        return sum.toLocaleString()
    }
    return (
        <div className='grid grid-cols-12 text-center h-fit mb-10' style={{ width: '95%', margin: '0 auto' }}>
            <div className='col-span-8 ' style={{ width: '85%' }}>
                <div className='screen my-5 text-base'>Màn hình </div>

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
                <div className='flex justify-center mt-5'>
                    <div>
                        <span >Ghế đã đặt</span>
                        <button style={{ marginTop: 5 }} className='gheDuocChon'><FontAwesomeIcon icon={faX} /></button>
                    </div>
                    <div>
                        <span>Ghế đang đặt</span>
                        <button className='gheDangChon'></button>
                    </div>
                    <div>
                        <span>Ghế thường</span>
                        <button className='ghe'></button>
                    </div>
                    <div>
                        <span>Ghế VIP</span>
                        <button className='gheVip'></button>
                    </div>
                </div>
            </div>
            <div className='col-span-4'>
                <div className='space-y-5'>
                    <div className='text-green-500 text-xl'>{tinhTongTien()}</div>

                    <div className='flex items-center justify-between border-b-2'>
                        <h2>Cụm Rạp:</h2>
                        <h2>{thongTinPhim.tenCumRap}</h2>
                    </div>

                    <div className='flex items-center justify-between border-b-2'>
                        <h2>Địa chỉ:</h2>
                        <h2>{thongTinPhim.diaChi}</h2>
                    </div>
                    <div className='flex items-center justify-between border-b-2'>
                        <h2>Rạp:</h2>
                        <h2>{thongTinPhim.tenRap}</h2>
                    </div>
                    <div className='flex items-center justify-between border-b-2'>
                        <h2>Ngày giờ chiếu:</h2>
                        <h2><span>{thongTinPhim.ngayChieu}</span> - <span>{thongTinPhim.gioChieu}</span></h2>
                    </div>
                    <div className='flex items-center justify-between border-b-2'>
                        <h2>Tên Phim:</h2>
                        <h2>{thongTinPhim.tenPhim} </h2>
                    </div>
                    <div className="flex flex-row my-5 justify-between border-b-2">
                        <div >
                            <span className="text-red-400 text-lg mr-2">Ghế</span>


                        </div>
                        <div className="text-right col-span-1">
                            {danhSachGheDuocChon?.map((ghe, index) => {
                                return <Fragment key={index}>
                                    <span className="text-green-500 text-xl  inline-block">
                                        {`${ghe.tenGhe},`}
                                    </span>
                                </Fragment>
                            })}
                        </div>
                    </div>
                    <div className='text-center'>
                        <button>Đặt vé</button>
                    </div>
                </div>
            </div>
        </div>


    )
}

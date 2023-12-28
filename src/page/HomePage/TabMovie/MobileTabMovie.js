import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTabMovieAction } from '../../../redux/action/tabMovie'
import { Tabs, Tooltip, message } from 'antd'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import { USER_INFO } from '../../../service/config'

export default function MobileTabMovie() {
    const dispatch = useDispatch()
    const heThongRap = useSelector(state => state.tabMovieReducer.tabMovie)
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(setTabMovieAction())
    }, [])

    return (
        <div className='pb-20  container'>
            <h2 className='text-2xl text-red-600 text-center my-10 font-semibold'>Lịch chiếu theo rạp</h2>
            <div className='border'>
                <Tabs
                    tabPosition='top'
                    defaultActiveKey="1"
                    items={heThongRap.map((heThong, index) => {
                        return {
                            key: index,
                            label: <div className='text-center px-auto w-full '>
                                <img className='w-20 p-2 ' src={heThong.logo} alt="" />
                            </div>,
                            children: <Tabs
                                style={{ height: 600 }}
                                tabPosition='left'
                                items={heThong.lstCumRap.map(cumRap => {
                                    return {
                                        key: cumRap.diaChi,
                                        label: <div className='w-52 p-2 border-b truncate text-left'>
                                            <Tooltip title={cumRap.diaChi}>
                                                <p>{cumRap.tenCumRap}</p>
                                            </Tooltip>
                                        </div>,
                                        children: <div style={{ height: 600 }} className='space-y-5 overflow-y-scroll'>
                                            {cumRap.danhSachPhim.map((phim) => {
                                                return <div className='flex space-x-2 p-2 border-b'>
                                                    <img className='w-32 h-48 object-cover' src={phim.hinhAnh} alt="" />
                                                    <div>
                                                        <h2 className='text-xl font-semibold'>{phim.tenPhim}</h2>
                                                        <div className='grid grid-cols-1 gap-2 mt-2'>
                                                            {phim.lstLichChieuTheoPhim.slice(0, 4).map((lichChieu) => {
                                                                return (
                                                                    <span
                                                                        onClick={() => {
                                                                            if (localStorage.getItem(USER_INFO)) {
                                                                                navigate(`/ticket-room/${lichChieu.maLichChieu}`)
                                                                            } else {
                                                                                message.error('Vui lòng đăng nhập để đặt vé')
                                                                            }

                                                                        }}
                                                                        className=' font-semibold border w-36 border-gray-300 bg-gray-100 p-1 rounded cursor-pointer text-center hover:bg-slate-200 hover:transition-all' key={lichChieu.maLichChieu}>
                                                                        <span className='text-red-600'>{moment(lichChieu.ngayChieuGioChieu).format('DD-MM-YYYY')}</span> ~ <span className='text-green-600'>{moment(lichChieu.ngayChieuGioChieu).format('hh:mm')}</span>
                                                                    </span>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            })}
                                        </div>
                                    }
                                })} />
                        }
                    })}
                />
            </div>

        </div>
    )
}

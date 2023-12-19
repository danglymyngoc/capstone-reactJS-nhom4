import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTabMovieAction } from '../../../redux/action/tabMovie'
import { Tabs, Tooltip } from 'antd'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

export default function TabMovie() {
    const dispatch = useDispatch()
    const heThongRap = useSelector(state => state.tabMovieReducer.tabMovie)
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(setTabMovieAction())
    }, [])

    return (
        <div className='pb-10 pt-10 container'>
            <h2 className='text-2xl text-red-600 text-center mb-10'>Lịch chiếu theo rạp</h2>
            <Tabs
                tabPosition='left'
                defaultActiveKey="1"
                items={heThongRap.map((heThong, index) => {
                    return {
                        key: index,
                        label: <img className='w-16' src={heThong.logo} alt="" />,
                        children: <Tabs
                            style={{ height: 600 }}
                            tabPosition='left'
                            items={heThong.lstCumRap.map(cumRap => {
                                return {
                                    key: cumRap.diaChi,
                                    label: <div className='w-60 truncate text-left'>
                                        <Tooltip title={cumRap.diaChi}>
                                            <p>{cumRap.tenCumRap}</p>
                                        </Tooltip>
                                    </div>,
                                    children: <div style={{ height: 600 }} className='space-y-5 overflow-y-scroll'>
                                        {cumRap.danhSachPhim.map((phim) => {
                                            return <div className='flex space-x-5'>
                                                <img className='w-32 h-48 object-cover' src={phim.hinhAnh} alt="" />
                                                <div>
                                                    <h2 className='text-2xl'>{phim.tenPhim}</h2>
                                                    <div className='grid grid-cols-4 gap-5 mt-3'>
                                                        {phim.lstLichChieuTheoPhim.slice(0, 16).map((lichChieu) => {
                                                            return (
                                                                <span
                                                                    onClick={() => {
                                                                        navigate(`/ticket-room/${lichChieu.maLichChieu}`)
                                                                    }}
                                                                    className='text-red-600 font-medium border border-red-600 rounded' key={lichChieu.maLichChieu}>
                                                                    {moment(lichChieu.ngayChieuGioChieu).format('DD-MM-YYYY ~ hh:mm')}
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
    )
}

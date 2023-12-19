import { Tabs, Tooltip } from 'antd'
import moment from 'moment'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { setMovieScheduleAction } from '../../../redux/action/detail'

export default function MovieSchedule() {
    const { idFilm } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const movieSchedule = useSelector(state => state.detailReducer.movieSchedule)

    useEffect(() => {
        dispatch(setMovieScheduleAction(idFilm))
    }, [])
    return (
        <div className='pb-10 pt-10 container'>
            <Tabs
                tabPosition='left'
                defaultActiveKey="1"
                items={movieSchedule?.heThongRapChieu?.map((heThong, index) => {
                    return {
                        key: index,
                        label: <img className='w-16' src={heThong.logo} alt="" />,
                        children: <Tabs
                            style={{ height: 600 }}
                            tabPosition='left'
                            items={heThong.cumRapChieu.map(cumRap => {
                                return {
                                    key: cumRap.diaChi,
                                    label: <div className='w-60 truncate text-left'>
                                        <Tooltip title={cumRap.diaChi}>
                                            <p>{cumRap.tenCumRap}</p>
                                        </Tooltip>
                                    </div>,
                                    children: <div style={{ height: 600 }} className='space-y-5 overflow-y-scroll'>
                                        {cumRap.lichChieuPhim.map((phim) => {
                                            return <div className='flex space-x-5'>

                                                <div>
                                                    <h2 className='text-2xl'>{phim.tenRap}</h2>
                                                    <h3>{phim.thoiLuong}p</h3>
                                                    <div className='grid grid-cols-4 gap-5 mt-3'>
                                                        <span
                                                            onClick={() => {
                                                                navigate(`/ticket-room/${phim.maLichChieu}`)
                                                            }}
                                                            className='text-red-600 font-medium border border-red-600 rounded' key={phim.maLichChieu}>
                                                            {moment(phim.ngayChieuGioChieu).format('DD-MM-YYYY ~ hh:mm')}
                                                        </span>
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
        // <div>mo</div>

    )
}

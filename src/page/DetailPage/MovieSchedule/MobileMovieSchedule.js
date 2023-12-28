import { Tabs, Tooltip, message } from 'antd'
import moment from 'moment'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { setMovieScheduleAction } from '../../../redux/action/detail'
import { USER_INFO } from '../../../service/config'

export default function MobileMovieSchedule() {
    const { idFilm } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const movieSchedule = useSelector(state => state.detailReducer.movieSchedule)
    console.log(movieSchedule)

    useEffect(() => {
        dispatch(setMovieScheduleAction(idFilm))
    }, [])
    return (
        <div className='pb-10  container-body '>
            <h2 className='text-2xl text-red-600 text-center mb-10 font-semibold '>Lịch chiếu</h2>

            <Tabs
                tabPosition='top'
                defaultActiveKey="1"
                style={{
                    height: 300,

                }}
                className='overflow-y-scroll border flex items-center'
                items={movieSchedule?.heThongRapChieu?.map((heThong, index) => {
                    return {
                        key: index,
                        label: <div className=' w-full mx-auto'>
                            <img className='w-16 py-2' src={heThong.logo} alt="" />
                        </div>,
                        children: <Tabs
                            style={{ height: 300 }}
                            className='overflow-y-scroll'
                            tabPosition='left'
                            items={heThong.cumRapChieu.map(cumRap => {
                                return {
                                    key: cumRap.diaChi,
                                    label: <div className='w-40 truncate text-left border-b p-3'>
                                        <Tooltip title={cumRap.diaChi}>
                                            <p>{cumRap.tenCumRap}</p>
                                        </Tooltip>
                                    </div>,
                                    children: <div style={{ height: 300 }} className=''>
                                        {cumRap.lichChieuPhim.map((phim) => {
                                            return <div className=' border-b p-3'>

                                                <div className='p-3 space-y-2 '>
                                                    <h2 className='text-xl font-semibold'>{phim.tenRap}</h2>
                                                    <h3 className='font-medium'>Thời lượng: <span>{phim.thoiLuong}p</span></h3>
                                                    <div className='space-y-3'>
                                                        <span
                                                            onClick={() => {
                                                                if (localStorage.getItem(USER_INFO)) {
                                                                    navigate(`/ticket-room/${phim.maLichChieu}`)
                                                                } else {
                                                                    message.error('Vui lòng đăng nhập để đặt vé')
                                                                }

                                                            }}
                                                            className=' font-semibold border w-36 border-gray-300 bg-gray-100 p-1 rounded cursor-pointer text-center hover:bg-slate-200 hover:transition-all' key={phim.maLichChieu}>
                                                            <span className='text-red-600'>{moment(phim.ngayChieuGioChieu).format('DD-MM-YYYY')}</span> ~ <span className='text-green-600'>{moment(phim.ngayChieuGioChieu).format('hh:mm')}</span>
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

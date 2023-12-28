import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setListMovieAction } from '../../../redux/action/listMovie'

import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import { Tabs } from 'antd';
import { useNavigate } from 'react-router-dom'



export default function MobileListMovie() {
    const listMovie = useSelector(state => state.listMovieReducer.listMovie)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(setListMovieAction())
    }, [])
    const onChangeTab = (key) => {
        console.log(key);
    };
    const phimDangChieu = listMovie.filter(movie => movie.dangChieu === true)
    const phimSapChieu = listMovie.filter(movie => movie.dangChieu === false)
    const items = [
        {
            key: '1',
            label: 'Phim đang chiếu',
            children: <div className=' grid grid-cols-2 gap-4 mb-3 text-center'>
                {phimDangChieu.map((item, index) => {
                    return <Card
                        key={index}
                        hoverable
                        style={{
                            width: 210,
                            marginBottom: 8
                        }}
                        cover={<img className='h-80' alt="example" src={item.hinhAnh} />}
                    >
                        <Meta title={item.tenPhim} />
                        <div className=' block mt-3'>
                            <button
                                className='btn-theme'
                                onClick={() => {
                                    navigate(`/detail/${item.maPhim}`)
                                }}
                            >Xem chi tiết</button>
                        </div>
                    </Card>
                })}
            </div>
        },
        {
            key: '2',
            label: 'Phim sắp chiếu',
            children: <div className=' grid grid-cols-2 text-center gap-4 mb-3'>
                {phimSapChieu.map((item, index) => {
                    return <Card
                        key={index}
                        hoverable
                        style={{
                            width: 210,
                            marginBottom: 8
                        }}
                        cover={<img alt="example" src={item.hinhAnh} />}
                    >
                        <Meta title={item.tenPhim} />
                        <div className=' block mt-3'>
                            <button
                                className='btn-theme'
                                onClick={() => {
                                    navigate(`/detail/${item.maPhim}`)
                                }}
                            >Xem chi tiết</button>
                        </div>
                    </Card>
                })}
            </div>
        },
    ]
    return (
        <div className='container-body pb-10 pt-10'>
            <h2 className='text-2xl text-red-600 text-center mb-10 font-semibold'>Lịch chiếu theo phim</h2>
            <Tabs defaultActiveKey="1" items={items} onChange={onChangeTab} />
        </div>
    )
}

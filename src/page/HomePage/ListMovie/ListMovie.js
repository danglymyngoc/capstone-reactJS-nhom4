import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setListMovieAction } from '../../../redux/action/listMovie'

import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import { Tabs } from 'antd';
import { useNavigate } from 'react-router-dom'



export default function ListMovie() {
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
            children: <div className='grid grid-cols-5 gap-4 mb-3'>
                {phimDangChieu.map((item, index) => {
                    return <Card
                        hoverable
                        style={{
                            width: 210,
                            marginBottom: 8
                        }}
                        cover={<img className='h-80' alt="example" src={item.hinhAnh} />}
                    >
                        <Meta title={item.tenPhim} description="www.instagram.com" />
                        <div className='text-center block mt-3'>
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
            children: <div className='grid grid-cols-5 gap-4 mb-3'>
                {phimSapChieu.map((item, index) => {
                    return <Card
                        hoverable
                        style={{
                            width: 210,
                            marginBottom: 8
                        }}
                        cover={<img alt="example" src={item.hinhAnh} />}
                    >
                        <Meta title={item.tenPhim} description="www.instagram.com" />
                        <div className='text-center block mt-3'>
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
        <div className='container'>
            <h3>Lịch chiếu theo phim</h3>
            <Tabs defaultActiveKey="1" items={items} onChange={onChangeTab} />
        </div>
    )
}

import React, { useEffect } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ListMovieStyle.css'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setListMovieAction } from '../../../redux/action/listMovie';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
export default function DemoList() {
    const listMovie = useSelector(state => state.listMovieReducer.listMovie)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(setListMovieAction())
    }, [])
    const phimDangChieu = listMovie.filter(movie => movie.dangChieu === true)
    const phimSapChieu = listMovie.filter(movie => movie.dangChieu === false)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        className: 'text-center',
        dots: false,
    };
    const settings1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        centerMode: false,
        className: 'center',
        dots: false,
    };
    return (
        <div className='container-body'>
            <div>
                <h2 className='text-2xl text-red-600 text-center my-10 font-semibold'>Phim đang chiếu</h2>
                <Slider {...settings}>
                    {phimDangChieu.map((item, index) => {
                        return <div className='p-2 text-center'>
                            <Card
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
                                        className='btn-theme block mx-auto w-full'
                                        onClick={() => {

                                            navigate(`/detail/${item.maPhim}`)
                                        }}
                                    >Xem chi tiết</button>
                                </div>
                            </Card>
                        </div>
                    })}
                </Slider>
                <h2 className='text-2xl text-red-600 text-center my-10 font-semibold'>Phim sắp chiếu</h2>
                <Slider {...settings1}>
                    {phimSapChieu.map((item, index) => {
                        return <div className='p-2 text-center'>
                            <Card
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
                                        className='btn-theme block mx-auto w-full'
                                        onClick={() => {
                                            navigate(`/detail/${item.maPhim}`)
                                        }}
                                    >Xem chi tiết</button>
                                </div>
                            </Card>
                        </div>
                    })}

                </Slider>
            </div>

        </div>
    )
}

import React, { useEffect } from 'react'
import { Carousel } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setBannerAction } from '../../../redux/action/banner';

export default function Banner() {
    const arrImg = useSelector(state => state.bannerReducer.arrImg)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setBannerAction())
    }, [])
    const contentStyle = {
        height: '600px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        backgroundPosition: 'center',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        objectFit: 'cover'
    };
    const renderImg = () => {
        return arrImg.map((item, index) => {
            return <div key={index}>
                <div className='object-cover' style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})`, objectFit: 'cover' }}>
                    <img src={item.hinhAnh} className='w-full opacity-0' alt={item.hinhAnh} />
                </div>
            </div>
        })
    }
    return (
        <div>
            <Carousel effect="scrollx" autoplaySpeed={2000} autoplay='true' >
                {renderImg()}
            </Carousel>
        </div>
    )
}

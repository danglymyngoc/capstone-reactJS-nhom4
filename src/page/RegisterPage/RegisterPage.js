import React from 'react'
import ImgAnimate from '../LoginPage/ImgAnimate.json'
import Lottie from 'lottie-react'
import FormRegister from './FormRegister'
export default function RegisterPage() {
    return (
        <div className='grid grid-cols-12 container'>
            <div className="col-span-7" style={{ height: '100vh' }}>
                {/* <Lottie animationData={ImgAnimate} /> */}
            </div>
            <div className='col-span-5'>
                <h2>Đăng ký</h2>
                <FormRegister />
            </div>
        </div>
    )
}

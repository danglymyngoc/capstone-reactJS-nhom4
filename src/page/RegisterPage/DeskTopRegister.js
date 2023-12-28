import Lottie from 'lottie-react'
import ImgAnimate from '../LoginPage/ImgAnimate.json'
import FormRegister from './FormRegister'

export default function DeskTopRegister() {
    return (
        <div style={{ backgroundImage: 'url("https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg")', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} className='h-full w-full bg-cover bg-scrolls'>
            <div className='grid grid-cols-12 container pt-10 h-screen'>
                <div className="col-span-7 " >
                    <Lottie animationData={ImgAnimate} />
                </div>
                <div className='col-span-5 pt-4'>
                    <div className='border border-slate-400 p-4 mr-0 rounded-md backdrop-opacity-10 backdrop-invert bg-gray/50'>
                        <h2 className='text-2xl font-semibold mb-5 ml-28'>Đăng ký</h2>
                        <FormRegister />
                    </div>


                </div>
            </div>
        </div>
    )
}

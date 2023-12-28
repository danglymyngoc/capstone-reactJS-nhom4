import React from 'react'
import FormRegister from './FormRegister'

export default function TabletRegister() {
    return (
        <div style={{ backgroundImage: 'url("https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg")', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} className='h-full w-full bg-cover bg-scrolls'>
            <div className='flex items-center justify-center container pt-10 h-screen'>

                <div className=''>
                    <div className='border border-slate-400 p-4 mr-0 rounded-md backdrop-opacity-10 backdrop-invert bg-gray/50'>
                        <h2 className='text-2xl font-semibold mb-5 ml-28'>Đăng ký</h2>
                        <FormRegister />
                    </div>


                </div>
            </div>
        </div>
    )
}

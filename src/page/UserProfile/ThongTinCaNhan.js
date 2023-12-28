import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { USER_INFO } from '../../service/config'
import { setUserProfileAction } from '../../redux/action/userProfile'

export default function ThongTinCaNhan() {
    const dispatch = useDispatch()
    const userProfile = useSelector(state => state.userProfileReducer.userProfile)
    // const thongTinDatVe = useSelector(state => state.userProfileReducer.thongTinDatVe)
    console.log(userProfile, 'userProfile')
    useEffect(() => {

        if (JSON.parse(localStorage.getItem(USER_INFO)).accessToken) {
            dispatch(setUserProfileAction())

        }
    }, [])
    return (
        <div className="bg-white overflow-hidden shadow rounded-lg border">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-semibold text-gray-900">
                    Thông tin tài khoản
                </h3>

            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Tài khoản
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {userProfile.taiKhoan}
                        </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Họ và tên
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {userProfile.hoTen}
                        </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Email
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {userProfile.email}
                        </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Số điện thoại
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {userProfile.soDT}
                        </dd>
                    </div>

                </dl>
            </div>
        </div>


    )
}

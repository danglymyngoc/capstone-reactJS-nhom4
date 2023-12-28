

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'

import { USER_INFO } from '../../service/config'
import { Avatar, Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from 'flowbite-react'

import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'



export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    let navigate = useNavigate()
    let user = useSelector(state => state.loginReducer.user)
    let renderMenu = () => {
        if (user) {
            return <>
                <Dropdown
                    label={<Avatar alt="User settings" img="https://i.pravatar.cc/" rounded />}
                    arrowIcon={false}
                    inline
                >
                    <DropdownHeader>
                        <span className="block text-sm font-semibold">{`Xin chào, ${user.hoTen}`}</span>

                    </DropdownHeader>
                    <DropdownItem onClick={() => {
                        navigate('/user-profile')
                    }}>Thông tin cá nhân & Lịch sử đặt vé</DropdownItem>

                    <DropdownDivider />
                    <DropdownItem onClick={() => {
                        window.location.href = '/'
                        // localStorage.removeItem(ACCESS_TOKEN)
                        localStorage.removeItem(USER_INFO)
                    }}>Đăng xuất</DropdownItem>
                </Dropdown>
            </>
        } else {
            return <div>
                <button
                    className='btn-theme'
                    onClick={() => {
                        window.location.href = '/login'
                    }}
                >Đăng nhập</button>
                <button
                    className='btn-theme ml-2'
                    onClick={() => {
                        window.location.href = '/register'
                    }}
                >Đăng ký</button>
            </div>
        }
    }
    let renderMenuMobile = () => {
        if (user) {
            return <>
                <div className="space-y-2 ">

                    <a

                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-red-600 hover:bg-gray-50"
                    >
                        {`Xin chào, ${user.hoTen}`}
                    </a>
                    <a

                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
                        onClick={() => {
                            navigate('/user-profile')
                        }}
                    >
                        Thông tin cá nhân
                    </a>
                    <a

                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"

                        onClick={() => {
                            window.location.href = '/'
                            localStorage.removeItem(USER_INFO)
                        }}

                    >
                        Đăng xuất
                    </a>
                </div>

            </>
        } else {
            return <div>
                <button
                    className='btn-theme mr-2'
                    onClick={() => {
                        window.location.href = '/login'
                    }}
                >Đăng nhập</button>

                <button
                    className='btn-theme ml-2'
                    onClick={() => {
                        window.location.href = '/register'
                    }}
                >Đăng ký</button>
            </div>
        }
    }
    return (
        <div className='shadow-lg'>
            <header className="bg-white container ">
                <nav className=" flex items-center justify-between py-6 " aria-label="Global">
                    <div className="flex lg:flex-1">
                        <span
                            onClick={() => { navigate('/') }}
                            className='cursor-pointer text-3xl text-red-500 font-semibold animate-pulse '>CyberFlix</span>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <Popover.Group className="hidden lg:flex lg:gap-x-12">
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                            Lịch chiếu
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                            Cụm rạp
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                            Liên hệ
                        </a>
                    </Popover.Group>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        {renderMenu()}
                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <span
                                onClick={() => { navigate('/') }}
                                className='cursor-pointer text-xl text-red-500 font-semibold animate-pulse '>CyberFlix</span>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10 text-center">
                                <div className="py-6">
                                    {renderMenuMobile()}
                                </div>
                                <div className="space-y-2 py-6">

                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Lịch chiếu
                                    </a>
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Cụm rạp
                                    </a>
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Liên hệ
                                    </a>
                                </div>

                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    )

}

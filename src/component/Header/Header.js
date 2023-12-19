
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { USER_INFO } from '../../service/config'
import { Avatar, Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from 'flowbite-react'



export default function Header() {
    let navigate = useNavigate()
    let user = useSelector(state => state.loginReducer.user)

    let renderMenu = () => {
        if (user) {
            return <>
                {/* <div className="flex items-center">
                    <div style={{ borderRadius: '50%' }} >

                        <img style={{ display: 'block', borderRadius: '50%' }} className='w-10 pr-3 ' src="https://i.pravatar.cc/" alt="" />
                    </div>
                    <span className='pr-10'>{user.hoTen}</span>
                    <button
                        className='btn-theme'
                        onClick={() => {
                            window.location.href = '/'
                            localStorage.removeItem(USER_INFO)
                        }}
                    >Logout</button>
                    <button onClick={() => {
                        navigate('/user-profile')
                    }} className='btn-theme'>Lịch sử đặt vé</button>
                </div> */}
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
            return <button
                className='btn-theme'
                onClick={() => {
                    window.location.href = '/login'
                }}
            >Login</button>
        }
    }
    return (
        <div className="container h-20 flex items-center justify-between">
            <span
                onClick={() => { navigate('/') }}
                className='cursor-pointer text-2xl text-red-500 font-semibold animate-pulse '>CyberFlix</span>
            <div>
                {renderMenu()}
            </div>
        </div >
    )
}

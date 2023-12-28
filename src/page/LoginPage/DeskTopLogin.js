import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import Lottie from 'lottie-react';
import ImgAnimate from './ImgAnimate.json'
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserLoginAction } from '../../redux/action/login';
export default function DeskTopLogin() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onFinish = (values) => {
        dispatch(setUserLoginAction(values, navigate))
    };
    return (
        <div style={{ backgroundImage: 'url("https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg")', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='grid grid-cols-12 container pt-10 h-screen'>
                <div className="col-span-7" >
                    <Lottie animationData={ImgAnimate} />
                </div>
                <div className='col-span-5 pl-20 pt-20'>
                    <div className='border border-slate-400 p-10 rounded-md backdrop-opacity-10 backdrop-invert bg-gray/50'>
                        <h2 className='text-2xl font-semibold mb-5'>Đăng nhập</h2>
                        <Form
                            name="normal_login"
                            className="login-form "
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}

                        >
                            <Form.Item
                                name="taiKhoan"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Tài khoản không được bỏ trống!',
                                    },
                                ]}

                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Tài khoản" />
                            </Form.Item>
                            <Form.Item
                                name="matKhau"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Mật khẩu không được bỏ trống!',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Mật khẩu"
                                />
                            </Form.Item>


                            <Form.Item>
                                {/* <Button type="primary" htmlType="submit" className="btn-theme">
                        Đăng nhập
                    </Button> */}
                                <button className='btn-theme mr-2 mb-4'>Đăng nhập</button>
                                <br />
                                Bạn chưa có tài khoản? <NavLink style={{ textDecoration: 'underline' }} to='/register'>
                                    Đăng ký
                                </NavLink>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

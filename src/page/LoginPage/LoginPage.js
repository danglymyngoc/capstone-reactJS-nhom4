import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import Lottie from 'lottie-react';
import ImgAnimate from './ImgAnimate.json'
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserLoginAction } from '../../redux/action/login';
export default function LoginPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onFinish = (values) => {
        dispatch(setUserLoginAction(values, navigate))
    };
    return (
        <div className='grid grid-cols-12 container'>
            <div className="col-span-7" style={{ height: '100vh' }}>
                {/* <Lottie animationData={ImgAnimate} /> */}
            </div>
            <div className='col-span-5'>
                <h2>Đăng nhập</h2>
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
                        <button className='btn-theme'>Đăng nhập</button>
                        chưa có tài khoản? <NavLink to='/register'>
                            Đăng ký
                        </NavLink>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

import React from 'react';
import {
    Form,
    Input,
    Select,
} from 'antd';

import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { setUserRegisterAction } from '../../redux/action/register';
/*
{
  "taiKhoan": "string",
  "matKhau": "string",
  "email": "string",
  "soDt": "string",
  "maNhom": "string",
  "hoTen": "string"
}
*/
const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const FormRegister = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [form] = Form.useForm();
    const onFinish = (values) => {
        dispatch(setUserRegisterAction(values, navigate))
    };

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
                residence: ['zhejiang', 'hangzhou', 'xihu'],
                prefix: '86',
            }}
            style={{
                width: 500,
                maxWidth: 350,

            }}
            scrollToFirstError
        >
            {/* taiKhoan */}
            <Form.Item
                name="taiKhoan"
                label="Tài khoản"
                rules={[
                    {
                        required: true,
                        message: 'Tài khoản không được bỏ trống!',
                    },
                ]}
            >
                <Input className='pt-1 pb-1 rounded-md' />
            </Form.Item>
            {/* matKhau */}
            <Form.Item
                name="matKhau"
                label="Mật khẩu"
                rules={[
                    {
                        required: true,
                        message: 'Mật khẩu không được bỏ trống!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>
            {/* email */}
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'Nhập vào email!',
                    },
                    {
                        required: true,
                        message: 'Email không được bỏ trống!',
                    },
                ]}
            >
                <Input className='pt-1 pb-1 rounded-md' />
            </Form.Item>
            {/* hoTen */}
            <Form.Item
                name="hoTen"
                label="Họ và tên"
                rules={[
                    {
                        required: true,
                        message: 'Họ và tên không được bỏ trống!',
                    },
                ]}

            >
                <Input className='pt-1 pb-1 rounded-md' />
            </Form.Item>
            {/* soDt */}
            <Form.Item
                name="soDt"
                label="Số điện thoại:"
                rules={[
                    {
                        required: true,
                        message: 'Số điện thoại không được bỏ trống!',
                    },
                    {
                        pattern: /^[0-9]+$/,
                        message: 'Số điện thoại phải là số!',
                    }
                ]}
            >
                <Input className='pt-1 pb-1 rounded-md' />
            </Form.Item>
            {/* maNhom */}
            <Form.Item
                name="maNhom"
                label="Mã nhóm"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng chọn mã nhóm đăng ký!',
                    },
                ]}
            >
                <Select placeholder="Mã nhóm">
                    <Option value="GP01">GP01</Option>
                    <Option value="GP02">GP02</Option>
                    <Option value="GP03">GP03</Option>
                    <Option value="GP04">GP04</Option>
                    <Option value="GP05">GP05</Option>
                    <Option value="GP06">GP06</Option>
                    <Option value="GP07">GP07</Option>
                    <Option value="GP08">GP08</Option>
                    <Option value="GP09">GP09</Option>

                </Select>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <button className='btn-theme'>Đăng ký</button>
                <br />
                Bạn đã có tài khoản? <NavLink style={{ textDecoration: 'underline' }} to='/login'>
                    Đăng nhập
                </NavLink>
            </Form.Item>
        </Form>
    );
};
export default FormRegister;

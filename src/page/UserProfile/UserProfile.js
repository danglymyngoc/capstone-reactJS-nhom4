import React, { useEffect } from 'react'
import { Tabs } from 'antd';
// /QuanLyNguoiDung/ThongTinTaiKhoan
import {
    Form,
    Input,
    Select,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setThongTinDatVeAction, setUserProfileAction } from '../../redux/action/userProfile';
import moment from 'moment';
import { ACCESS_TOKEN, USER_INFO } from '../../service/config';
import LichSuDatVe from './LichSuDatVe';

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
export default function UserProfile() {

    const dispatch = useDispatch()
    const userProfile = useSelector(state => state.userProfileReducer.userProfile)
    // const thongTinDatVe = useSelector(state => state.userProfileReducer.thongTinDatVe)

    useEffect(() => {

        if (JSON.parse(localStorage.getItem(USER_INFO)).accessToken) {
            dispatch(setUserProfileAction())
        }
    }, [])
    // useEffect(() => {
    //     dispatch(setThongTinDatVeAction())
    // }, { thongTinDatVe })
    // console.log(userProfile, 'userProfile');
    // console.log(thongTinDatVe, 'thongTinDatVe');
    const onChange = (key) => {
        console.log(key);
    };
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const items = [
        {
            key: '1',
            label: 'Thông tin cá nhân',
            children: <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                    residence: ['zhejiang', 'hangzhou', 'xihu'],
                    prefix: '86',
                }}
                style={{
                    maxWidth: 600,
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
                    <Input />
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
                    <Input />
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
                    <Input />
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
                    <button className='btn-theme'>Cập nhật</button>
                </Form.Item>
            </Form>
        },
        {
            key: '2',
            label: 'Lịch sử đặt vé',
            children: <div className='grid grid-cols-2 gap-10'>
                {/* {thongTinDatVe.map((item, index) => {
                    return <div key={index} className="max-w-md p-8 sm:flex sm:space-x-6 bg-gray-50 text-gray-800">
                        <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                            <img src={item.hinhAnh} alt className="object-cover object-center w-full h-full rounded bg-gray-500" />
                        </div>
                        <div className="flex flex-col space-y-4">
                            <div>
                                <h2 className="text-2xl font-semibold">{item.tenPhim}</h2>
                                <span className="text-sm text-gray-600">Ngày đặt: {moment(`${item.ngayDat}`).format('DD/MM/YYYY - hh:mm')}</span>
                            </div>
                            <div className="space-y-1">
                                {item.danhSachGhe?.map((dsg) => {
                                    return <span className="text-gray-600">
                                        {dsg.tenHeThongRap} <br /> {dsg.tenCumRap} - Ghế {dsg.tenGhe}
                                    </span>

                                })}

                            </div>
                        </div>
                    </div>
                })} */}
                <LichSuDatVe />
            </div>

        },
    ];
    return (
        <div className='container min-h-screen'>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    )

}

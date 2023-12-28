import React, { useEffect, useState } from "react";
import "./AddForm.css";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";
import { useFormik } from "formik";
import moment, { min } from "moment";
import { useDispatch } from "react-redux";
import { themPhimUploadHinhUpLoad } from "../../../../../redux/action/filmManagement";

export default function AddForm() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 5,
      hinhAnh: {},
    },
    onSubmit: (values) => {
      values.maNhom = "GP01";
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, formik.values[key]);
        } else {
          formData.append("file", values.hinhAnh, values.hinhAnh.name);
        }
      }
      // Call Api
      dispatch(themPhimUploadHinhUpLoad(formData));
    },
  });

  const handleChangeDatePicker = (value) => {
    let date = moment(value).format("DD-MM-YYYY");
    console.log(
      "🚀 ~ file: AddForm.js:38 ~ handleChangeDatePicker ~ date:",
      date
    );
    formik.setFieldValue(date);
  };
  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };
  const handleChangeFile = (evt) => {
    let file = evt.target.files[0];
    console.log(file, "file");
    // Tạo đối tượng để đọc file
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (evt) => {
      setImgSrc(evt.target.result); // hình base 64
    };
    formik.setFieldValue("hinhAnh", file);
  };
  const [imgSrc, setImgSrc] = useState("");
  return (
    <div className=" modal-body">
      <p className="text-4xl font-semibold ">Adding new film</p>
      <br />
      <div className="container mb-5">
        <Form
          onSubmitCapture={formik.handleSubmit}
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          initialValues={{}}
          style={{ minWidth: "500px" }}
        >
          <Form.Item label="Tên phim">
            <Input name="tenPhim" onChange={formik.handleChange} />
          </Form.Item>
          <Form.Item label="Trailer">
            <Input name="trailer" onChange={formik.handleChange} />
          </Form.Item>
          <Form.Item label="Mô tả">
            <Input name="moTa" onChange={formik.handleChange} />
          </Form.Item>

          <Form.Item label="Ngày khởi chiếu">
            <DatePicker
              format={"DD-MM-YYYY"}
              onChange={handleChangeDatePicker}
            />
          </Form.Item>
          <Form.Item label="Số sao">
            <InputNumber
              onChange={(value) => {
                formik.setFieldValue("danhGia", value);
              }}
              min={1}
              max={10}
            />
          </Form.Item>
          <Form.Item label="Sắp chiếu" valuePropName="checked">
            <Switch onChange={handleChangeSwitch("sapChieu")} />
          </Form.Item>
          <Form.Item label="Đang chiếu" valuePropName="checked">
            <Switch onChange={handleChangeSwitch("sapChieu")} />
          </Form.Item>
          <Form.Item label="Hot" valuePropName="checked">
            <Switch onChange={handleChangeSwitch("hot")} />
          </Form.Item>
          <Form.Item label="Hình ảnh">
            <input type="file" onChange={handleChangeFile} />
            <img
              src={imgSrc}
              style={{ width: "200px", height: "100px" }}
              alt="..."
            />
          </Form.Item>
          <Form.Item label="Submit">
            <button
              type="submit"
              className="text-xl text-white bg-red-500 rounded"
            >
              Thêm phim
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

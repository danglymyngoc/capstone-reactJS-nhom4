import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import HeaderAdmin from "../../../Header/HeaderAdmin";
import { DatePicker, Form, Input, InputNumber, Switch, Space } from "antd";
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  capNhatPhimAction,
  layThongTinPhimAction,
} from "../../../../../redux/action/filmManagement";
import { SearchOutlined } from "@ant-design/icons";
const { Search } = Input;
const EditFilm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { thongTinPhim } = useSelector((state) => state.QuanLyPhimReducer);
  console.log(
    "🚀 ~ file: EditFilm.js:27 ~ EditFilm ~ thongTinPhim:",
    thongTinPhim
  );
  let { id } = useParams();

  useEffect(() => {
    console.log(id);
    dispatch(layThongTinPhimAction(id));
  }, []);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maPhim: thongTinPhim?.maPhim,
      tenPhim: thongTinPhim?.tenPhim,
      trailer: thongTinPhim?.trailer,
      moTa: thongTinPhim?.moTa,
      ngayKhoiChieu: thongTinPhim?.ngayKhoiChieu,
      dangChieu: thongTinPhim?.dangChieu,
      sapChieu: thongTinPhim?.sapChieu,
      hot: thongTinPhim?.hot,
      danhGia: thongTinPhim?.danhGia,
      hinhAnh: null,
    },
    onSubmit: (values) => {
      values.maNhom = "GP01";
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, formik.values[key]);
        } else {
          if (values.hinhAnh !== null) {
            formData.append("file", values.hinhAnh, values.hinhAnh.name);
          }
        }
      }
      // Call Api
      dispatch(capNhatPhimAction(formData));
    },
  });
  const handleChangeDatePicker = (value) => {
    let date = moment(value);
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
  const handleChangeFile = async (evt) => {
    let file = evt.target.files[0];
    console.log(file, "file");
    // Tạo đối tượng để đọc file
    let reader = new FileReader();
    reader.onload = (evt) => {
      setImgSrc(evt.target.result); // hình base 64
    };
    await formik.setFieldValue("hinhAnh", file);
  };
  const [imgSrc, setImgSrc] = useState("");
  const onSearch = (value) => {
    console.log(value);
    // dispatch(layDanhSachPhimAction(value));
  };
  return (
    <div>
      <HeaderAdmin />
      <div className="flex adminBody">
        <div className="admin_navbar">
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="p-4 mb-2"></div>
            <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
              <h5 className="block mb-5 ml-2 font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-red-500">
                Cyber Flix
              </h5>
              <div
                role="button"
                tabIndex="0"
                className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900"
              >
                <div className="grid mr-4 place-items-center"></div>
                <Space direction="vertical">
                  <Search
                    placeholder="input search text"
                    onSearch={onSearch}
                    enterButton={<SearchOutlined style={{ color: "blue" }} />}
                    style={{
                      width: 200,
                    }}
                  />
                </Space>
              </div>
              <div
                role="button"
                tabIndex="0"
                className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900"
              >
                <div className="grid mr-4 place-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <NavLink to={`/admin`}>Films</NavLink>
              </div>
              <div
                role="button"
                tabIndex="0"
                className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900"
                onClick={() => {
                  navigate(`/admin/films/addnew`);
                }}
              >
                <div className="grid mr-4 place-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                Add new film
              </div>

              <div
                role="button"
                tabIndex="0"
                className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900"
              >
                <div className="grid mr-4 place-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                Update shedule{" "}
                <div className="grid ml-auto place-items-center justify-self-end">
                  <div
                    className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-blue-900 uppercase rounded-full select-none whitespace-nowrap bg-blue-500/20"
                    style={{ opacity: 1 }}
                  >
                    <span className="">14</span>
                  </div>
                </div>
              </div>

              <div
                role="button"
                tabIndex="0"
                className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900"
              >
                <div className="grid mr-4 place-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                Log Out
              </div>
            </nav>
          </div>
        </div>
        {/* Edit Form */}
        <div className=" modal-body">
          <p className="text-4xl font-semibold ">Edit film</p>
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
                <Input
                  name="tenPhim"
                  onChange={formik.handleChange}
                  value={formik.values.tenPhim}
                />
              </Form.Item>
              <Form.Item label="Trailer">
                <Input
                  name="trailer"
                  onChange={formik.handleChange}
                  value={formik.values.trailer}
                />
              </Form.Item>
              <Form.Item label="Mô tả">
                <Input
                  name="moTa"
                  onChange={formik.handleChange}
                  value={formik.values.moTa}
                />
              </Form.Item>

              <Form.Item label="Ngày khởi chiếu">
                <DatePicker
                  format={"DD-MM-YYYY"}
                  onChange={handleChangeDatePicker}
                  value={moment(formik.values.ngayKhoiChieu, "DD-MM-YYYY")}
                />
              </Form.Item>
              <Form.Item label="Số sao">
                <InputNumber
                  onChange={(value) => {
                    formik.setFieldValue("danhGia", value);
                  }}
                  min={1}
                  max={10}
                  value={formik.values.danhGia}
                />
              </Form.Item>
              <Form.Item label="Sắp chiếu">
                <Switch
                  onChange={handleChangeSwitch("sapChieu")}
                  checked={formik.values.sapChieu}
                />
              </Form.Item>
              <Form.Item label="Đang chiếu">
                <Switch
                  onChange={handleChangeSwitch("sapChieu")}
                  checked={formik.values.dangChieu}
                />
              </Form.Item>
              <Form.Item label="Hot">
                <Switch
                  onChange={handleChangeSwitch("hot")}
                  checked={formik.values.hot}
                />
              </Form.Item>
              <Form.Item label="Hình ảnh">
                <input type="file" onChange={handleChangeFile} />
                <img
                  src={imgSrc === "" ? thongTinPhim.hinhAnh : imgSrc}
                  style={{ width: "200px", height: "100px" }}
                  alt="..."
                />
              </Form.Item>
              <Form.Item label="Submit">
                <button
                  type="submit"
                  className="text-xl text-white bg-red-500 rounded"
                >
                  Cập nhật
                </button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditFilm;

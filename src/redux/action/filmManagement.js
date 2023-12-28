import {
  layThongTinPhim,
  themPhimUploadHinh,
} from "../../Admin/service/QuanLyPhimService/QuanLyPhimService";
import https from "../../service/api";
import { SET_THONG_TIN_PHIM } from "../constant/filmManage";

export const layDanhSachPhimAction = (tenPhim = "") => {
  if (tenPhim != "") {
    https
      .get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${"GP01"}`)
      .then((res) => {
        console.log(res.data.content);
      })
      .catch((err) => {
        console.log("Error: " + err.message);
      });
  }
};

export const themPhimUploadHinhUpLoad = (formData) => {
  return async (dispatch) => {
    https
      .post(`/api/QuanLyPhim/ThemPhimUploadHinh`, formData)
      .then((response) => {
        console.log(response.data.content);
        console.log("THêm phim thành công");
      })
      .catch((error) => {});
  };
};

export const layThongTinPhimAction = (maPhim) => {
  return async (dispatch) => {
    https
      .get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
      .then((response) => {
        dispatch({
          type: SET_THONG_TIN_PHIM,
          thongTinPhim: response.data.content,
        });
      })
      .catch((error) => {});
  };
};

export const capNhatPhimAction = (formData) => {
  return async (dispatch) => {
    https
      .post(`/api/QuanLyPhim/CapNhatPhimUpload`, formData)
      .then((res) => {
        console.log("CapNhatPhim upload successful");
      })
      .catch((error) => {
        console.log("error");
      });
  };
};

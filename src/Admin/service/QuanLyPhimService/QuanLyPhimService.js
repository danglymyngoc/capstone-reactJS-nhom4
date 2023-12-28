import https from "../../../service/api";

export const themPhimUploadHinh = (formData) => {
  return https.post(`/api/QuanLyPhim/ThemPhimUploadHinh`, formData);
};

export const layThongTinPhim = (maPhim) => {
  return https
    .get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("error", error);
    });
};

import { SET_THONG_TIN_PHIM } from "../constant/filmManage";

const initialState = {
  arrFilm: {},
  thongTinPhim: {
    dangChieu: false,
    danhGia: 4,
    hinhAnh: "",
    hot: true,
    maNhom: "GP01",
    maPhim: 13510,
    moTa: "",
    ngayKhoiChieu: "",
    sapChieu: true,
    tenPhim: "Laboriosam ex quasi",
    trailer: "Necessitatibus aut s",
  },
};

export const QuanLyPhimReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THONG_TIN_PHIM: {
      state.thongTinPhim = action.thongTinPhim;
      return { ...state };
    }
    default:
      console.log(state, "Lỗi rồi");
      return { ...state };
  }
};


import { DAT_GHE, DAT_LAI_GHE, DAT_VE, SET_DANH_SACH_GHE, SET_THONG_TIN_PHIM } from "../constant/booking"

const initialState = {
    thongTinPhim: {
        maLichChieu: '',
        tenCumRap: '',
        tenRap: "",
        diaChi: "",
        tenPhim: "",
        hinhAnh: "",
        ngayChieu: "",
        gioChieu: ""
    },
    danhSachGhe: [],
    danhSachGheDuocChon: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_THONG_TIN_PHIM: {
            return { ...state, thongTinPhim: action.payload }
        }

        case SET_DANH_SACH_GHE: {
            return { ...state, danhSachGhe: action.payload }
        }

        case DAT_GHE: {
            let DSGheDuocChonClone = [...state.danhSachGheDuocChon]
            DSGheDuocChonClone.push(action.payload)
            let danhSachGheClone = [...state.danhSachGhe]
            let index = danhSachGheClone.findIndex(value => value.tenGhe == action.payload.tenGhe)
            danhSachGheClone[index].daDat = 0
            state.danhSachGheDuocChon = DSGheDuocChonClone
            state.danhSachGhe = danhSachGheClone
            return { ...state }
        }

        case DAT_LAI_GHE: {
            let danhSachGheClone = [...state.danhSachGhe]
            let index = danhSachGheClone.findIndex(value => value.tenGhe == action.payload.tenGhe)
            let DSGheDuocChonClone = state.danhSachGheDuocChon.filter(item => item.tenGhe != action.payload.tenGhe)
            danhSachGheClone[index].daDat = false
            state.danhSachGhe = danhSachGheClone
            state.danhSachGheDuocChon = DSGheDuocChonClone
            return { ...state }
        }
        case DAT_VE: {

            state.danhSachGheDuocChon = []
            return { ...state }
        }
        default:
            return { ...state }
    }
}
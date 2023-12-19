
import { SET_LICH_SU_DAT_VE, SET_USER_PROFILE } from "../constant/userProfile"


const initialState = {
    userProfile: {
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        email: "",
        soDT: "",
        maNhom: "",
        maLoaiNguoiDung: "",
    },
    thongTinDatVe: []
}

export const userProfileReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_PROFILE:
            return { ...state, userProfile: action.payload }
        case SET_LICH_SU_DAT_VE:
            console.log(action.payload, 'SET_LICH_SU_DAT_VE');
            return { ...state, thongTinDatVe: action.payload }
        default:
            return state
    }
}
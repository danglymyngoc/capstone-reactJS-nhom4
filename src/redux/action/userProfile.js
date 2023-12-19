
import { TURN_OFF_LOADING, TURN_ON_LOADING } from "../constant/spinner";
import { SET_LICH_SU_DAT_VE, SET_USER_PROFILE } from "../constant/userProfile";
import https from "../../service/api";

export const setUserProfileAction = () => {
    return dispatch => {
        dispatch({ type: TURN_ON_LOADING })
        https.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan')

            .then((result) => {
                dispatch({
                    type: SET_USER_PROFILE,
                    payload: result.data.content
                })
                dispatch({ type: TURN_OFF_LOADING })
            }).catch((err) => {
                console.log(err.response)
                dispatch({ type: TURN_OFF_LOADING })
            });
    }
}

export const setThongTinDatVeAction = () => {
    return dispatch => {
        dispatch({ type: TURN_ON_LOADING })
        https.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan')

            .then((result) => {
                dispatch({
                    type: SET_LICH_SU_DAT_VE,
                    payload: result.data.content.thongTinDatVe
                })
                dispatch({ type: TURN_OFF_LOADING })

            }).catch((err) => {
                console.log(err)
                dispatch({ type: TURN_OFF_LOADING })
            });
    }
}
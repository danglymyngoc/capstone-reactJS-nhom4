import https from "../../service/api";
import { SET_DANH_SACH_GHE, SET_THONG_TIN_PHIM } from "../constant/booking";
import { TURN_OFF_LOADING, TURN_ON_LOADING } from "../constant/spinner";

export const setBookingAction = (maLichChieu) => {
    return dispatch => {


        dispatch({ type: TURN_ON_LOADING })

        https.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
            .then((result) => {

                dispatch({
                    type: SET_THONG_TIN_PHIM,
                    payload: result.data.content.thongTinPhim
                })
                dispatch({
                    type: SET_DANH_SACH_GHE,
                    payload: result.data.content.danhSachGhe
                })
                setTimeout(() => {

                    dispatch({ type: TURN_OFF_LOADING })
                }, 2000)

            }).catch((err) => {
                setTimeout(() => {

                    dispatch({ type: TURN_OFF_LOADING })
                }, 2000)

                console.log(err)
            });
    }
}
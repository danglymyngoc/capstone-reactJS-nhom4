
import https from "../../service/api";
import { SET_BANNER } from "../constant/banner";
import { TURN_OFF_LOADING, TURN_ON_LOADING } from "../constant/spinner";

export const setBannerAction = () => {
    return dispatch => {
        dispatch({ type: TURN_ON_LOADING })
        https.get('/api/QuanLyPhim/LayDanhSachBanner')
            .then((result) => {
                dispatch({
                    type: SET_BANNER,
                    payload: result.data.content
                })
                dispatch({ type: TURN_OFF_LOADING })
            }).catch((err) => {
                dispatch({ type: TURN_OFF_LOADING })
                console.log(err)
            });
    }
}

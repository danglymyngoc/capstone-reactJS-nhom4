import https from "../../service/api";
import { TURN_OFF_LOADING, TURN_ON_LOADING } from "../constant/spinner";
import { SET_TAB_MOVIE } from "../constant/tabMovie";

export const setTabMovieAction = () => {
    return dispatch => {
        dispatch({ type: TURN_ON_LOADING })
        https.get('/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01')
            .then((result) => {
                dispatch({
                    type: SET_TAB_MOVIE,
                    payload: result.data.content
                })
                dispatch({ type: TURN_OFF_LOADING })
            }).catch((err) => {
                dispatch({ type: TURN_OFF_LOADING })
                console.log(err)
            });
    }
}

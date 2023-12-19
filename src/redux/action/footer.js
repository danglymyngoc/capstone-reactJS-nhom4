import { SET_FOOTER } from "../constant/footer";
import https from "../../service/api";
import { TURN_OFF_LOADING, TURN_ON_LOADING } from "../constant/spinner";
export const setFooterAction = () => {
    return dispatch => {
        dispatch({ type: TURN_ON_LOADING })
        https.get('/api/QuanLyRap/LayThongTinHeThongRap')
            .then((result) => {
                dispatch({
                    type: SET_FOOTER,
                    payload: result.data.content
                })
                dispatch({ type: TURN_OFF_LOADING })
            }).catch((err) => {
                dispatch({ type: TURN_OFF_LOADING })

                console.log(err)
            });
    }
}
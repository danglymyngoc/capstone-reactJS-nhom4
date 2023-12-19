import https from "../../service/api";

import { SET_LIST_MOVIE } from "../constant/listMovie";
import { TURN_OFF_LOADING, TURN_ON_LOADING } from "../constant/spinner";

export const setListMovieAction = () => {
    return dispatch => {
        dispatch({ type: TURN_ON_LOADING })
        https.get('/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09')
            .then((result) => {
                dispatch({
                    type: SET_LIST_MOVIE,
                    payload: result.data.content
                })
                dispatch({ type: TURN_OFF_LOADING })
            }).catch((err) => {
                dispatch({ type: TURN_OFF_LOADING })

                console.log(err)
            });
    }
}
import https from "../../service/api";
import { SET_MOVIE_RATING, SET_MOVIE_SCHEDULE } from "../constant/detail";
import { TURN_OFF_LOADING, TURN_ON_LOADING } from "../constant/spinner";

export const setMovieRatingAction = (idFilm) => {
    return dispatch => {
        dispatch({ type: TURN_ON_LOADING })
        https.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${idFilm}`)
            .then((result) => {
                dispatch({
                    type: SET_MOVIE_RATING,
                    payload: result.data.content
                })
                dispatch({ type: TURN_OFF_LOADING })
            }).catch((err) => {
                dispatch({ type: TURN_OFF_LOADING })

                console.log(err)
            });
    }
}

export const setMovieScheduleAction = (idFilm) => {
    return dispatch => {
        https.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idFilm}`)
            .then((result) => {
                dispatch({
                    type: SET_MOVIE_SCHEDULE,
                    payload: result.data.content
                })
            }).catch((err) => {
                console.log(err)
            });
    }
}
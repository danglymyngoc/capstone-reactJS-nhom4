import https from "../../service/api";
import { TURN_OFF_LOADING, TURN_ON_LOADING } from "../constant/spinner";
import { USER_LOGIN } from "../constant/login";
import { message } from "antd";
import { USER_INFO } from "../../service/config";



export const setUserLoginAction = (values, navigate) => {

    return dispatch => {

        dispatch({ type: TURN_ON_LOADING })
        https.post('/api/QuanLyNguoiDung/DangNhap', values)

            .then((result) => {
                dispatch({
                    type: USER_LOGIN,
                    payload: result.data.content
                })

                const dataJson = JSON.stringify(result.data.content)
                localStorage.setItem(USER_INFO, dataJson)
                message.success('Đăng nhập thành công')
                setTimeout(() => {

                    navigate('/')
                }, 2000)

                dispatch({ type: TURN_OFF_LOADING })
            }).catch((err) => {
                message.error('Đã có lỗi xảy ra')
                dispatch({ type: TURN_OFF_LOADING })
                console.log(err)
            });
    }
}


import https, { httpsRegister } from "../../service/api";
import { TURN_OFF_LOADING, TURN_ON_LOADING } from "../constant/spinner";
import { message } from "antd";
export const setUserRegisterAction = (values, navigate) => {

    return dispatch => {

        dispatch({ type: TURN_ON_LOADING })
        httpsRegister.post('/api/QuanLyNguoiDung/DangKy', values)

            .then((result) => {
                message.success('Đăng ký thành công')
                setTimeout(() => {

                    navigate('/login')
                }, 2000)

                dispatch({ type: TURN_OFF_LOADING })
            }).catch((err) => {
                message.error(err.response.data.content)
                dispatch({ type: TURN_OFF_LOADING })
                console.log(err)
            });
    }
}


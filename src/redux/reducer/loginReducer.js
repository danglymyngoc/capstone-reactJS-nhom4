import { USER_INFO } from "../../service/config"
import { USER_LOGIN } from "../constant/login"


const initialState = {
    user: JSON.parse(localStorage.getItem(USER_INFO)),


}

export default (state = initialState, action) => {
    switch (action.type) {

        case USER_LOGIN:
            state.user = action.payload

            return { ...state }

        default:
            return { ...state }
    }
}

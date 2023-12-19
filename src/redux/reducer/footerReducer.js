
import { SET_FOOTER } from "../constant/footer"

const initialState = {
    logoArr: [],
}

export default (state = initialState, action) => {
    switch (action.type) {

        case SET_FOOTER:
            return { ...state, logoArr: action.payload }

        default:
            return state
    }
}
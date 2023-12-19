import { SET_BANNER } from "../constant/banner"

const initialState = {
    arrImg: [],
}

export default (state = initialState, action) => {
    switch (action.type) {

        case SET_BANNER:
            return { ...state, arrImg: action.payload }

        default:
            return state
    }
}

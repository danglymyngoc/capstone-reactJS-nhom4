
import { TURN_OFF_LOADING, TURN_ON_LOADING } from "../constant/spinner"

const initialState = {
    isLoading: false,
}

export default (state = initialState, action) => {
    switch (action.type) {

        case TURN_ON_LOADING:
            return { ...state, isLoading: true }
        case TURN_OFF_LOADING:
            return { ...state, isLoading: false }
        default:
            return state
    }
}

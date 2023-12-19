
import { SET_TAB_MOVIE } from "../constant/tabMovie"

const initialState = {
    tabMovie: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case SET_TAB_MOVIE:
            return { ...state, tabMovie: action.payload }

        default:
            return state
    }
}
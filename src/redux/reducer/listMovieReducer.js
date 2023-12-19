import { SET_LIST_MOVIE } from "../constant/listMovie"

const initialState = {
    listMovie: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case SET_LIST_MOVIE:
            return { ...state, listMovie: action.payload }

        default:
            return state
    }
}


import { SET_MOVIE_RATING, SET_MOVIE_SCHEDULE } from "../constant/detail"


const initialState = {
    movieRating: [],
    movieSchedule: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case SET_MOVIE_RATING:
            return { ...state, movieRating: action.payload }
        case SET_MOVIE_SCHEDULE:
            return { ...state, movieSchedule: action.payload }
        default:
            return state
    }
}
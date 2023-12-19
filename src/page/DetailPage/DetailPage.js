import React, { useEffect } from 'react'
import MovieRating from './MovieRating/MovieRating'
import MovieSchedule from './MovieSchedule/MovieSchedule'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setMovieRatingAction } from '../../redux/action/detail'

export default function DetailPage() {
    const { idFilm } = useParams()
    const dispatch = useDispatch()
    const movieRating = useSelector(state => state.detailReducer.movieRating)

    useEffect(() => {
        dispatch(setMovieRatingAction(idFilm))
    }, [])

    return (
        <div>
            <MovieRating movieRating={movieRating} />
            <MovieSchedule />
        </div>
    )
}

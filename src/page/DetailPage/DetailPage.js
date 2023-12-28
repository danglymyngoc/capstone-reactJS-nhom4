import React, { useEffect } from 'react'
import MovieRating from './MovieRating/MovieRating'
import MovieSchedule from './MovieSchedule/MovieSchedule'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setMovieRatingAction } from '../../redux/action/detail'

import ReactPlayer from 'react-player'
import { useMediaQuery } from 'react-responsive'
import TabletMovieRating from './MovieRating/TabletMovieRating'
import MobileMovieRating from './MovieRating/MobileMovieRating'
import MobileMovieSchedule from './MovieSchedule/MobileMovieSchedule'

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
}
const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
}
export default function DetailPage() {
    const { idFilm } = useParams()
    const dispatch = useDispatch()
    const movieRating = useSelector(state => state.detailReducer.movieRating)
    console.log(movieRating)
    useEffect(() => {
        dispatch(setMovieRatingAction(idFilm))
    }, [])

    return (
        <div >
            <div>
                <Desktop>
                    <MovieRating movieRating={movieRating} />
                    <h2 className='text-2xl text-red-600 text-center mb-10 font-semibold mt-28'>Trailer</h2>
                    <div style={{ position: 'relative', paddingTop: '56.25%' }} className="container mt-10 pb-0">
                        <ReactPlayer
                            style={{ position: 'absolute', top: 0, left: 0 }}
                            url={movieRating.trailer}
                            controls={true}
                            width='100%' height='80%'
                            className='mb-0 pb-0'

                        />
                    </div>
                    <MovieSchedule />
                </Desktop>
                <Tablet>
                    <TabletMovieRating movieRating={movieRating} />
                    <h2 className='text-2xl text-red-600 text-center mb-10 font-semibold mt-28'>Trailer</h2>
                    <div style={{ position: 'relative', paddingTop: '56.25%' }} className="container mt-10 pb-0">
                        <ReactPlayer
                            style={{ position: 'absolute', top: 0, left: 0 }}
                            url={movieRating.trailer}
                            controls={true}
                            width='100%' height='80%'
                            className='mb-0 pb-0'

                        />
                    </div>
                    <MovieSchedule />
                </Tablet>
                <Mobile>
                    <MobileMovieRating movieRating={movieRating} />
                    <h2 className='text-2xl text-red-600 text-center mb-10 font-semibold mt-28'>Trailer</h2>
                    <div style={{ position: 'relative', paddingTop: '56.25%' }} className="container mt-10 pb-0">
                        <ReactPlayer
                            style={{ position: 'absolute', top: 0, left: 0 }}
                            url={movieRating.trailer}
                            controls={true}
                            width='100%' height='80%'
                            className='mb-0 pb-0'

                        />
                    </div>
                    <MobileMovieSchedule />
                </Mobile>

            </div>

        </div>
    )
}

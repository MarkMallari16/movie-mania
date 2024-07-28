import React from 'react'
import MovieCard from './MovieCard'
import PropTypes from 'prop-types';
const MovieCarousel = ({ carouselTitle, movies }) => {
    return (
        <>
            <h1 className='mt-10 mb-4 text-2xl text-white font-medium'>{carouselTitle}</h1>
            <div className='carousel rounded-box'>
                <div className='carousel-item space-x-6'>
                    {movies && movies.results.map((movie, _) => (
                        <MovieCard key={movie.id} id={movie.id} poster={movie.poster_path} title={movie.title} />
                    ))}
                </div>
            </div>
        </>
    )
}
MovieCarousel.propTypes = {
    carouselTitle: PropTypes.string.isRequired,
    movies: PropTypes.shape({
        results: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                poster_path: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired
            })
        ).isRequired
    }).isRequired
}

export default MovieCarousel
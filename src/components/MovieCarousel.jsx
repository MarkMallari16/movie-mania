import React from 'react'
import MovieCard from './MovieCard'
import PropTypes from 'prop-types';
const MovieCarousel = ({ carouselTitle, icon, movies }) => {
    return (
        <>
            <h1 className='mt-10 mb-6 text-2xl text-white font-bold flex items-center gap-2'>
                {icon}{carouselTitle}
            </h1>
            <div className="gap-6 flex carousel carousel-end rounded-box w-full">
                <div className="carousel-item space-x-5 ">

                    {movies && movies.results.map((movie, _) => (
                        <MovieCard key={movie.id} id={movie.id} poster={movie.poster_path} rate={movie.vote_average} releaseDate={new Date(movie.release_date).getFullYear()} title={movie.title} />
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
                rate: PropTypes.number.isRequired,
                releaseDate: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired
            })
        ).isRequired
    }).isRequired
}

export default MovieCarousel
import React from 'react'
import MovieCarousel from '../components/MovieCarousel'
import MovieMediumCard from '../components/MovieMediumCard'

const TopRatedMovies = ({ topRated }) => {
    return (
        <div className='mx-20 mt-28'>
            <MovieCarousel movieData={topRated} />
            <h1 className='my-8 text-2xl text-white font-medium'>Top Rated  Movies</h1>
            <div className='rounded-box flex flex-wrap gap-8 justify-center'>
                {topRated.results.map(topRatedMovie => (
                    <MovieMediumCard key={topRatedMovie.id} movieId={topRatedMovie?.id} poster_path={topRatedMovie.poster_path} title={topRatedMovie.title} vote_average={topRatedMovie.vote_average} overview={topRatedMovie.overview} />
                ))}
            </div>
        </div>
    )
}

export default TopRatedMovies
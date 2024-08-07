import React from 'react'

import MovieMediumCard from '../components/MovieMediumCard'
import MovieCarousel from '../components/MovieCarousel'

const PopularMovies = ({ popular }) => {
    return (
        <div className='mx-20'>
            <MovieCarousel movieData={popular} />
            <h1 className='my-8 text-2xl text-white font-medium'>Popular Movies</h1>
            <div className='rounded-box flex flex-wrap gap-10 justify-center'>
                {popular.results.map(popularMovie => (
                    <MovieMediumCard key={popularMovie.id} popularMovieId={popularMovie?.id} poster_path={popularMovie.poster_path} title={popularMovie.title} vote_average={popularMovie.vote_average} overview={popularMovie.overview} />

                ))}
            </div>
        </div>

    )
}

export default PopularMovies
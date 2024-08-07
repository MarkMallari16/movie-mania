import React from 'react'


import MovieCarousel from '../components/MovieCarousel'
import MovieMediumCard from '../components/MovieMediumCard'

const UpcomingMovies = ({ upcoming }) => {
    return (
        <div className='mx-20'>
            <MovieCarousel movieData={upcoming} />
            <h1 className='my-8 text-2xl text-white font-medium'>Upcoming Movies</h1>
            <div className='rounded-box flex flex-wrap gap-8 justify-center'>
                {upcoming.results.map(upcomingMovie => (
                    <MovieMediumCard key={upcomingMovie.id} movieId={upcomingMovie?.id} poster_path={upcomingMovie.poster_path} title={upcomingMovie.title} vote_average={upcomingMovie.vote_average} overview={upcomingMovie.overview} />
                ))}
            </div>
        </div>
    )
}

export default UpcomingMovies
import React from 'react'


import MovieCarousel from '../components/MovieCarousel'
import MovieMediumCard from '../components/MovieMediumCard'
import useSortOrder from '../hooks/useSortOrder'
import SortDropDown from '../components/SortDropDown'
import MovieList from '../components/MovieList'

const UpcomingMovies = ({ upcoming }) => {
    const { sort, handleSort } = useSortOrder();

    const sortedMovies = sort === "highest" ? [...upcoming.results].sort((a, b) => b.vote_average - a.vote_average) : [...upcoming.results].sort((a, b) => a.vote_average - b.vote_average);
    return (
        <div className='mx-20'>
            <MovieCarousel movieData={upcoming} />
            <div className='flex justify-between items-center'>
                <h1 className='my-8 text-2xl text-white font-medium'>Upcoming Movies</h1>
                <SortDropDown onSorted={handleSort} currentSort={sort} />
            </div>

            <div className='rounded-box flex justify-center flex-wrap gap-10'>
                <MovieList movies={sortedMovies} />
            </div>
        </div>
    )
}

export default UpcomingMovies
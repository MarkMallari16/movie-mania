import React, { useState } from 'react'

import MovieMediumCard from '../components/MovieMediumCard'
import MovieCarousel from '../components/MovieCarousel'
import SortDropDown from '../components/SortDropDown';
import useSortOrder from '../hooks/useSortOrder';

const PopularMovies = ({ popular }) => {
    const { sort, handleSort } = useSortOrder();
    
    const sortedMovies = sort === "highest" ? [...popular.results].sort((a, b) => b.vote_average - a.vote_average) : [...popular.results].sort((a, b) => a.vote_average - b.vote_average);
    return (
        <div className='mx-10 lg:mx-20 lg:mt-28'>
            <MovieCarousel movieData={popular} />
            <div className='flex justify-between items-center'>
                <h1 className='my-8 text-2xl text-white font-medium'>Popular Movies</h1>
                <SortDropDown onSorted={handleSort} currentSort={sort} />
            </div>
            <div className='rounded-box flex justify-center flex-wrap gap-10'>
                {sortedMovies.map(popularMovie => (
                    <MovieMediumCard key={popularMovie.id} movieId={popularMovie?.id} poster_path={popularMovie.poster_path} title={popularMovie.title} vote_average={popularMovie.vote_average} overview={popularMovie.overview} />

                ))}
            </div>
        </div>

    )
}

export default PopularMovies
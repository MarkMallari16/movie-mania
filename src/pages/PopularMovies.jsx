import React from 'react'


import MovieCarousel from '../components/MovieCarousel'
import SortDropDown from '../components/SortDropDown';
import useSortOrder from '../hooks/useSortOrder';

import MovieList from '../components/MovieList';
import { sortingUtils } from '../utils/sortingUtils';


const PopularMovies = ({ popular }) => {
    const { sort, handleSort } = useSortOrder();

    const sortedMovies = sortingUtils(popular.results, sort);

    return (
        <div className='mx-10 lg:mx-20 lg:mt-28'>
            <MovieCarousel movieData={popular} />
            <div className='flex justify-between items-center'>
                <h1 className='my-8 text-2xl text-white font-medium'>Popular Movies</h1>
                <SortDropDown onSorted={handleSort} currentSort={sort} />
            </div>
            <div className='rounded-box flex justify-center flex-wrap gap-10'>
                <MovieList movies={sortedMovies} />
            </div> 
        </div>
    )
}

export default PopularMovies
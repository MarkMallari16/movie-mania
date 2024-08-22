import React, { Suspense, lazy } from 'react'

import SortDropDown from '../components/SortDropDown';
import useSortOrder from '../hooks/useSortOrder';

import MovieList from '../components/MovieList';
import { sortingUtils } from '../utils/sortingUtils';
import LazyLoadingComponent from '../components/LazyLoadingComponent';
const MovieCarousel = lazy(() => import('../components/MovieCarousel'));

const PopularMovies = ({ popular }) => {
    const { sort, handleSort } = useSortOrder();

    const sortedMovies = sortingUtils(popular.results, sort);

    return (
        <div className='mx-10 lg:mx-20 lg:mt-28'>
            <Suspense fallback={<LazyLoadingComponent className='w-full h-60' />}>
                <MovieCarousel movieData={popular} />
            </Suspense>
            <div className='flex justify-between items-center'>
                <h1 className='my-8 text-2xl text-white font-semibold'>Popular Movies</h1>
                <SortDropDown onSorted={handleSort} currentSort={sort} />
            </div>

            <div className='rounded-box grid grid-cols-1 justify-center lg:grid-cols-5 gap-8'>
                <MovieList movies={sortedMovies} />
            </div>
        </div>
    )
}

export default PopularMovies
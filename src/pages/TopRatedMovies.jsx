import React, { Suspense, lazy } from 'react'
import useSortOrder from '../hooks/useSortOrder'
import SortButtons from '../components/SortButtons'
import MovieList from '../components/MovieList'
import { sortingUtils } from '../utils/sortingUtils'
import LazyLoadingComponent from '../components/LazyLoadingComponent'

const MovieCarousel = lazy(() => import('../components/MovieCarousel'))

const TopRatedMovies = ({ topRated }) => {
    const { sort, handleSort } = useSortOrder();

    const sortedMovies = sortingUtils(topRated.results, sort);

    return (
        <div className='mx-10 lg:mx-20 lg:mt-28'>
            <Suspense fallback={<LazyLoadingComponent className='w-full h-60' />}>
                <MovieCarousel movieData={topRated} />
            </Suspense>

            <div className='mt-10 mb-8 flex justify-between items-center  flex-wrap'>
                <h1 className='text-2xl text-white gap-5  font-semibold'>Top Rated  Movies</h1>
                <SortButtons onSorted={handleSort} currentSort={sort} />
            </div>

            <div className='rounded-box grid grid-cols-1 justify-center lg:grid-cols-5 gap-8'>
                <MovieList movies={sortedMovies} />
            </div>
        </div>
    )
}

export default TopRatedMovies   
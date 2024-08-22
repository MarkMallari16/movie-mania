import React, { lazy } from 'react'
import useSortOrder from '../hooks/useSortOrder'
import SortDropDown from '../components/SortDropDown'
import MovieList from '../components/MovieList'
import { sortingUtils } from '../utils/sortingUtils'

const MovieCarousel = lazy(() => import('../components/MovieCarousel'))

const TopRatedMovies = ({ topRated }) => {
    const { sort, handleSort } = useSortOrder();

    const sortedMovies = sortingUtils(topRated.results, sort);

    return (
        <div className='mx-10 lg:mx-20 lg:mt-28'>
            <Suspense fallback={<LazyLoadingComponent className='w-full h-60' />}>
                <MovieCarousel movieData={topRated} />
            </Suspense>
            <div className='flex justify-between items-center'>
                <h1 className='my-8 text-2xl text-white font-semibold'>Top Rated  Movies</h1>
                <SortDropDown onSorted={handleSort} currentSort={sort} />
            </div>

            <div className='rounded-box grid grid-cols-1 justify-center lg:grid-cols-5 gap-8'>
                <MovieList movies={sortedMovies} />
            </div>
        </div>
    )
}

export default TopRatedMovies   
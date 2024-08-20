import React, { Suspense, lazy } from 'react';
import { useLocation } from 'react-router-dom';
import LazyLoadingCard from './LazyLoadingCard';
import SortDropDown from './SortDropDown';
import useSortOrder from '../hooks/useSortOrder';
import { sortingUtils } from '../utils/sortingUtils';

const MovieSmallCard = lazy(() => import("../components/MovieSmallCard"));

const SearchResultComponent = () => {
    const location = useLocation();
    const { searchResults } = location.state || { searchResults: [] }

    const query = new URLSearchParams(location.search).get("query");
    const { sort, handleSort } = useSortOrder();
    const sortedSearchResultMovies = sortingUtils(searchResults, sort);
    return (
        <div className='lg:mt-28 mx-20'>
            <div className='flex justify-between items-center'>
                <h1 className='mt-6 text-3xl font-bold'>Search Result for {query}</h1>
                <SortDropDown onSorted={handleSort} currentSort={sort} />
            </div>
            <div className='mt-6 grid grid-cols-1 lg:grid-cols-6 gap-10'>
                {sortedSearchResultMovies.map(result => (
                    <Suspense fallback={<LazyLoadingCard />}>
                        <MovieSmallCard id={result?.id} poster={result.poster_path} rate={result.vote_average} releaseDate={new Date(result.release_date).getFullYear()} title={result.title} />
                    </Suspense>
                ))}
            </div>
        </div>
    )
}

export default SearchResultComponent
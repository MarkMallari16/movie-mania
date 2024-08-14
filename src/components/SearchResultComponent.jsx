import React, { Suspense, lazy } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchNotFound from '../assets/searchNotFound.svg';
import LazyLoadingCard from './LazyLoadingCard';

const MovieSmallCard = lazy(() => import("../components/MovieSmallCard"));

const SearchResultComponent = () => {
    const location = useLocation();
    const { searchResults } = location.state || { searchResults: [] }

    const query = new URLSearchParams(location.search).get("query");

    return (
        <div className='mt-28 mx-20'>
            <h1 className='mt-6 text-3xl font-bold'>Search Result for {query}</h1>
            <div className='mt-6 grid grid-cols-1 lg:grid-cols-6 gap-10'>
                {searchResults.map(result => (
                    <Suspense fallback={<LazyLoadingCard />}>
                        <MovieSmallCard id={result?.id} poster={result.poster_path} rate={result.vote_average} releaseDate={new Date(result.release_date).getFullYear()} title={result.title} />
                    </Suspense>
                ))}
            </div>
        </div>
    )
}

export default SearchResultComponent
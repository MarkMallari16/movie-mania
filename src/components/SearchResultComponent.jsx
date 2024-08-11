import React, { Suspense, lazy } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchNotFound from '../assets/searchNotFound.svg';
import LazyLoadingCard from './LazyLoadingCard';

const MovieSmallCard = lazy(() => import("../components/MovieSmallCard"));

const SearchResultComponent = () => {
    const location = useLocation();
    const { searchResults } = location.state || { searchResults: [] }



    const query = new URLSearchParams(location.search).get("query");

    console.log(query)
    return (
        <div className='mt-28 mx-20'>
            <h1 className='mt-6 text-2xl'>Search Result for {query}</h1>
            {searchResults.length > 0 ?

                <div className='mt-6 grid grid-cols-1 lg:grid-cols-6 gap-10'>
                    {searchResults.map(result => (
                        <Suspense fallback={<LazyLoadingCard />}>
                            <MovieSmallCard id={result.id} poster={result.poster_path} rate={result.vote_average} releaseDate={new Date(result.release_date).getFullYear()} title={result.title} />
                        </Suspense>
                    ))}
                </div>
                :
                <div className='mt-20 flex justify-center items-center'>
                    <div>
                        <img src={SearchNotFound} alt="Not Found Illustrator" className='w-80' />
                        <p className='mt-4 text-2xl text-center'>Oppss! Movie Not Found</p>
                        <Link to='/' className='btn btn-secondary mt-4 w-full'>Back to Home</Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default SearchResultComponent
import React from 'react'
import { useLocation } from 'react-router-dom'
import MovieSmallCard from './MovieSmallCard';

const SearchResultComponent = () => {
    const location = useLocation();
    const { searchResults } = location.state || { searchResults: [] }

    return (
        <div className='mx-20'>
            <h1 className='mt-6 text-2xl'>Search Result</h1>
            {searchResults.length > 0 ?

                <div className='mt-6 grid grid-cols-1 lg:grid-cols-6 gap-10'>
                    {searchResults.map(result => (
                        <MovieSmallCard id={result.id} poster={result.poster_path} rate={result.vote_average} releaseDate={result.release_date} title={result.title} />
                    ))}
                </div>

                :
                <div>
                    <p >Not Found</p>
                </div>
            }
        </div>
    )
}

export default SearchResultComponent
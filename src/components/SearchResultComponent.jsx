import React from 'react'
import { useLocation } from 'react-router-dom'
import MovieSmallCard from './MovieSmallCard';

const SearchResultComponent = () => {
    const location = useLocation();
    const { searchResults } = location.state || { searchResults: [] }

    console.log(searchResults)
    return (
        <div className='mx-20'>
            <h1 className='mt-6 text-2xl'>Search Result</h1>
            {searchResults.length > 0 ?

                <div className='mt-6 flex flex-wrap gap-5'>
                    {searchResults.map(result => (
                        <MovieSmallCard id={result.id} poster={result.poster_path} rate={result.vote_average} releaseDate={result.release_date} title={result.title}/>
                    ))}
                </div>

                :
                <p>Not Found</p>}
        </div>
    )
}

export default SearchResultComponent
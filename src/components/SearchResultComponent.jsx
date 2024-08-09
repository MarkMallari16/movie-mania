import React from 'react'
import { useLocation } from 'react-router-dom'
import MovieSmallCard from './MovieSmallCard';
import SearchNotFound from '../assets/searchNotFound.svg'

const SearchResultComponent = () => {
    const location = useLocation();
    const { searchResults } = location.state || { searchResults: [] }

    return (
        <div className='mt-28 mx-20'>
            <h1 className='mt-6 text-2xl'>Search Result</h1>
            {searchResults.length > 0 ?

                <div className='mt-6 grid grid-cols-1 lg:grid-cols-6 gap-10'>
                    {searchResults.map(result => (
                        <MovieSmallCard id={result.id} poster={result.poster_path} rate={result.vote_average} releaseDate={new Date(result.release_date).getFullYear()} title={result.title} />
                    ))}
                </div>
                :
                <div className='mt-20 flex justify-center items-center'>
                    <div>
                        <img src={SearchNotFound} alt="Not Found Illustrator" className='w-80' />
                        <p className='mt-4 text-2xl text-center'>Oppss! Movie Not Found</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default SearchResultComponent
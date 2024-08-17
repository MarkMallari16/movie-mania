import React from 'react'

const SearchInputDropDown = ({ currentQuery, currentSearchResults, onHandleMovieClick }) => {
    return (
        <>
            {currentQuery && (
                <div className='absolute mt-2 w-full max-h-60 bg-slate-900 overflow-y-auto  rounded-xl'>
                    {currentSearchResults.length > 0 ? (
                        currentSearchResults.map(movie => (
                            <div
                                key={movie.id}
                                className='flex gap-5 p-4 hover:bg-slate-700 transition-colors ease-out cursor-pointer rounded-xl'
                                onClick={() => onHandleMovieClick(movie)}
                            >
                                {!movie.poster_path ? <div className='w-25'>Poster not available</div> : <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className='max-w-12 rounded-xl' />}
                                <div>
                                    <p>{movie.title}</p>
                                    <span className='text-slate-400'>{new Date(movie.release_date).getFullYear()}</span>
                                </div>
                            </div>

                        ))
                    ) : (
                        <div className='p-4'>No results found</div>
                    )}
                </div>
            )}
        </>
    )
}

export default SearchInputDropDown
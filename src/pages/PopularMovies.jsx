import React, { useState } from 'react'

import MovieMediumCard from '../components/MovieMediumCard'
import MovieCarousel from '../components/MovieCarousel'

const PopularMovies = ({ popular }) => {
    const [sort, setSort] = useState('highest');

    const handleSort = (sortOrder) => {
        setSort(sortOrder);
    }
    const sortedMovies = sort === "highest" ? [...popular.results].sort((a, b) => b.vote_average - a.vote_average) : [...popular.results].sort((a, b) => a.vote_average - b.vote_average);
    return (
        <div className='mx-10 lg:mx-20 lg:mt-28'>
            <MovieCarousel movieData={popular} />
            <div className='flex justify-between items-center'>
                <h1 className='my-8 text-2xl text-white font-medium'>Popular Movies</h1>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                        </svg>

                        Sort by
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={() => handleSort('highest')} className={sort === 'highest' ? 'bg-base-300 rounded-lg' : '' }>
                            <p>Highest Stars</p>
                        </li>
                        <li onClick={() => handleSort('lowest')} className={sort === 'lowest' ? 'bg-base-300 rounded-lg' : ''}>
                            <p>Lowest Stars</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='rounded-box flex justify-center flex-wrap gap-10'>
                {sortedMovies.map(popularMovie => (
                    <MovieMediumCard key={popularMovie.id} movieId={popularMovie?.id} poster_path={popularMovie.poster_path} title={popularMovie.title} vote_average={popularMovie.vote_average} overview={popularMovie.overview} />

                ))}
            </div>
        </div>

    )
}

export default PopularMovies
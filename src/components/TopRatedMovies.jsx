import React from 'react'

const TopRatedMovies = ({ topRated }) => {
    return (
        <div className='mx-20'>
            <h1 className='my-8 text-2xl text-white font-medium'>Top Rated  Movies</h1>
            <div className='rounded-box grid grid-cols-3'>
                {topRated.results.map(topRatedMovie => (
                    <div className="card bg-base-100 w-96" key={topRatedMovie.id}>
                        <figure>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${topRatedMovie.backdrop_path}`}
                                alt={topRatedMovie.title} />
                        </figure>
                        <div className="py-5">
                            <h2 className="card-title">{topRatedMovie.title}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopRatedMovies
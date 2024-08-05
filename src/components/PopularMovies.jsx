import React from 'react'

const PopularMovies = ({ popular }) => {
    return (
        <div className='mx-20'>
            <h1 className='my-8 text-2xl text-white font-medium'>Popular Movies</h1>
            <div className='rounded-box grid grid-cols-3'>
                {popular.results.map(popularMovie => (
                    <div className="card bg-base-100 w-96" key={popularMovie.id}>
                        <figure>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${popularMovie.backdrop_path}`}
                                alt={popularMovie.title} />
                        </figure>
                        <div className="py-5">
                            <h2 className="card-title">{popularMovie.title}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PopularMovies
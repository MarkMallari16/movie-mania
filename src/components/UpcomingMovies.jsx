import React from 'react'

const UpcomingMovies = ({ upcoming }) => {
    return (
        <div className='mx-20'>
            <h1 className='my-8 text-2xl text-white font-medium'>Upcoming Movies</h1>
            <div className='rounded-box grid grid-cols-3'>
                {upcoming.results.map(upcomingMovie => (
                    <div className="card bg-base-100 w-96" key={upcomingMovie.id}>
                        <figure>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${upcomingMovie.backdrop_path}`}
                                alt={upcomingMovie.title} />
                        </figure>
                        <div className="py-5">
                            <h2 className="card-title">{upcomingMovie.title}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UpcomingMovies
import React from 'react'
import { Link } from 'react-router-dom'

const MovieMediumCard = ({ popularMovieId, poster_path, title, vote_average, overview }) => {
    return (
        <Link to={`/movie/${popularMovieId}`}  >
            <div className="card bg-base-100 w-60 hover:scale-105 transition-all ease-in-out" >
                <figure>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                        alt={title} className='rounded-lg' />
                </figure>
                <div className="py-5">
                    <div className='flex justify-between'>
                        <h2 className="card-title">{title}</h2>
                        <div className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-yellow-500">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                            </svg>
                            {vote_average.toFixed(1)}
                        </div>

                    </div>
                    <p className='mt-2'>{overview.length > 10 ? `${overview.slice(0, 32)}...view more` : overview}</p>
                </div>
            </div>
        </Link>
    )
}

export default MovieMediumCard
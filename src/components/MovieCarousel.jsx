import React from 'react'
import { Link } from 'react-router-dom'

const MovieCarousel = ({ movieData }) => {
    return (
        <div className='carousel carousel-center flex gap-5  rounded-lg mt-10'>
            {movieData.results.map(movie => (
                <div className='carousel-item ' key={movie?.id}>
                    <Link to={`/movie/${movie?.id}`} className='relative'>
                        <img src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`} alt={movie?.title} className='rounded-lg opacity-75' />
                        <div className=''>
                            <p className='absolute bottom-4 start-3 text-white text-xl'>{movie?.title}</p>
                            <div className='absolute bottom-4 end-3 flex gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-yellow-500">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                </svg>
                                <p>{movie?.vote_average.toFixed(1)}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default MovieCarousel
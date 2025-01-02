import React from 'react'
import { Link } from 'react-router-dom'

const MovieMediumCard = ({ movieId, poster, title, voteAverage, releaseDate }) => {
    return (
        <Link to={`/movie/${movieId}`}  >
            <div className="group card bg-base-100 w-full overflow-hidden rounded-xl" >
                <figure>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${poster}`}
                        alt={title} className='group-hover:scale-110 group-hover:opacity-75 transition-all ease-in-out duration-200 ' />
                </figure>

                {poster &&
                    <span className='absolute z-50 right-1/3 top-1/3 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" size-20 ">
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                        </svg>
                    </span>
                }
                
                <div >
                    <div className="mt-2">
                        <h2 className="card-title ">{title.length > 20 ? `${title.slice(0, 16)}...` : title}</h2>
                    </div>
                    <div className='mt-2 flex justify-between'>
                        <div className='flex items-center gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-yellow-500">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                            </svg>
                            {voteAverage.toFixed(1)}
                        </div>
                        <div>
                            <p>{releaseDate}</p>
                        </div>
                    </div>

                </div>
            </div>
        </Link>
    )
}

export default MovieMediumCard
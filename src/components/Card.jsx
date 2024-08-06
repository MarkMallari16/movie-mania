import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ id, poster, rate, releaseDate, title, type }) => {
    const roundedRate = rate.toFixed(1)
    const linkPath = type === "movie" ? `/movie/${id}` : `/tv/${id}`;

    return (
        <Link to={linkPath}>
            <div>
                <div className='w-full overflow-hidden hover:scale-105 transition-all ease-in-out rounded-lg'>
                    <img src={`https://image.tmdb.org/t/p/w200${poster}`} alt={title} className='w-full  bg-slate-900 ' />
                </div>
                <div className='mt-3 flex justify-between'>
                    <div className='flex gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-yellow-500">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>

                        <p className='text-white'>{roundedRate}</p>
                    </div>

                    <div>
                        <p className='text-white'>{releaseDate}</p>
                    </div>
                </div>

            </div>
        </Link>
    )
}

export default Card
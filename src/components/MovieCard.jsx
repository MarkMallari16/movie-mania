import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ poster, title, id }) => {
    return (
        <Link to={`/movie/${id}`}>
            <div className='w-full'>
                <img src={`https://image.tmdb.org/t/p/w200${poster}`} alt={title} className='rounded-lg bg-slate-900 hover:opacity-75 transition-all ease-in-out' />
            </div>
        </Link>
    )
}

export default MovieCard
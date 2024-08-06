import React from 'react'

const PopularMoviesCarousel = ({ popular }) => {
    return (
        <div className='carousel carousel-center flex gap-2 rounded-lg mt-10'>
            {popular.results.map(popularMovie => (
                <div key={popularMovie.id} className='carousel-item'>
                    <img src={`https://image.tmdb.org/t/p/w500${popularMovie.backdrop_path}`} alt={popularMovie.title} className='rounded-lg' />
                </div>

            ))}

        </div>
    )
}

export default PopularMoviesCarousel
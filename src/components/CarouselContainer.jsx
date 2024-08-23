import React from 'react'
import MovieSmallCard from './MovieSmallCard'

const CarouselContainer = ({ movieData }) => {
    return (
        <div className="flex carousel rounded-box w-full">
            <div className="carousel-item flex gap-6">
                {movieData &&  movieData.results.slice(0, 20).map((data, _) => (
                    <MovieSmallCard key={data.id} id={data.id} poster={data.poster_path} rate={data.vote_average} releaseDate={new Date(data.release_date).getFullYear()} title={data.title} />
                ))}
            </div>
        </div>
    )
}

export default CarouselContainer
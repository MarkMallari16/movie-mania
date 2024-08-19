import React from 'react'
import MovieSmallCard from './MovieSmallCard'

const CarouselContainer = ({ movieData }) => {
    return (
        <div className="gap-6 flex carousel carousel-end rounded-box w-full">
            <div className="carousel-item space-x-5 ">
                {movieData &&  movieData.results.slice(0, 20).map((data, _) => (
                    <MovieSmallCard key={data.id} id={data.id} poster={data.poster_path} rate={data.vote_average} releaseDate={new Date(data.release_date).getFullYear()} title={data.title} />
                ))}
            </div>
        </div>
    )
}

export default CarouselContainer
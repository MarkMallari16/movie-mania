import React, { lazy, Suspense } from 'react'
import LazyLoadingCard from './LazyLoadingCard'

const MovieSmallCard = lazy(() => import('./MovieSmallCard'))

const CarouselContainer = ({ movieData }) => {
    return (
        <div className="flex carousel rounded-box w-full max-h-full">
            <div className="carousel-item flex gap-6">
                {movieData && movieData.results.slice(0, 20).map((data, _) => (
                    <Suspense fallback={<LazyLoadingCard />}>
                        <MovieSmallCard key={data.id} id={data.id} poster={data.poster_path} rate={data.vote_average} releaseDate={new Date(data.release_date).getFullYear()} title={data.title} />
                    </Suspense>
                ))}
            </div>
        </div>
    )
}

export default CarouselContainer
import React, { Suspense, lazy } from 'react'
import LazyLoadingCard from './LazyLoadingCard';

const MovieMediumCard = lazy(() => import('../components/MovieMediumCard'));

const MovieList = ({ movies }) => {
    return (
        <>
            {movies.map(movie => (
                <Suspense fallback={<LazyLoadingCard />}>
                    <MovieMediumCard key={movie.id} movieId={movie?.id} poster_path={movie.poster_path} title={movie.title} vote_average={movie.vote_average} overview={movie.overview} releaseDate={new Date(movie.release_date).getFullYear()} />
                </Suspense>
            ))}
        </>
    )
}

export default MovieList
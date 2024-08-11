import React from 'react'
import useFetch from './useFetch';

const useMovieDetails = (id) => {
    const { data: movieDetail, loading: movieLoading, refetch: refetchMovie } = useFetch(`https://api.themoviedb.org/3/movie/${id}`);
    const { data: credits, loading: creditsLoading, refetch: refetchCredits } = useFetch(`https://api.themoviedb.org/3/movie/${id}/credits`);
    const { data: videoData, loading: videoLoading, refetch: refetchVideos } = useFetch(`https://api.themoviedb.org/3/movie/${id}/videos`);
    const { data: similarMovies, loading: loadingSimilarMovies, refetch: refetchSimilarMovies } = useFetch(`https://api.themoviedb.org/3/movie/${id}/similar`);

    return {
        movieDetail,
        credits,
        videoData,
        similarMovies,
        loading: movieLoading || videoLoading || creditsLoading || loadingSimilarMovies,
        refetch: () => {
            refetchMovie();
            refetchCredits();
            refetchVideos();
            refetchSimilarMovies();
        }
    };
}

export default useMovieDetails
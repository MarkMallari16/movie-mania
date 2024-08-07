// src/contexts/MovieContext.jsx
import React, { createContext, useState } from 'react';
import useFetch from '../hooks/useFetch';

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const { data: allMovies, loading: loadingAllMovies } = useFetch("https://api.themoviedb.org/3/discover/movie");
  const { data: topRated, loading: loadingTopRated } = useFetch("https://api.themoviedb.org/3/movie/top_rated");
  const { data: popular, loading: loadingPopular } = useFetch("https://api.themoviedb.org/3/movie/popular");
  const { data: upcomingMovie, loading: loadingUpcomingMovie } = useFetch("https://api.themoviedb.org/3/movie/upcoming");
  const { data: nowPlaying, loading: loadingNowPlaying } = useFetch("https://api.themoviedb.org/3/movie/now_playing");

  const isLoading = loadingAllMovies || loadingPopular || loadingNowPlaying || loadingTopRated || loadingUpcomingMovie;

  return (
    <MovieContext.Provider value={{ allMovies, popular, nowPlaying, topRated, upcomingMovie, isLoading }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieProvider, MovieContext };

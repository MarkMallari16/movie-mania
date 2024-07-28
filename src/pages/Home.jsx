import React from 'react'
import MovieCard from '../components/MovieCard'
import Navbar from '../components/Navbar'
import MovieCarousel from '../components/MovieCarousel'

const Home = ({ nowPlaying, popular, topRated, upcoming }) => {
    return (
        <>
            <Navbar />
            <div className='mx-10'>
                <MovieCarousel carouselTitle="Now Playing" movies={nowPlaying} />
                <MovieCarousel carouselTitle="Popular" movies={popular} />
                <MovieCarousel carouselTitle="Now Playing" movies={topRated} />
                <MovieCarousel carouselTitle="Upcoming" movies={upcoming} />
            </div>
        </>
    )
}

export default Home
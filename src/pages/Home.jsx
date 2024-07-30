import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../components/Navbar'
import MovieCarousel from '../components/MovieCarousel'

const Home = ({ nowPlaying, popular, topRated, upcoming }) => {
    const movieCarousels = [
        {
            title: "Now Playing",
            data: nowPlaying,
        },
        {
            title: "Popular",
            data: popular,
        },
        {
            title: "Top Rated",
            data: topRated,
        },
        {
            title: "Upcoming",
            data: upcoming,
        }

    ]
    return (
        <>
            <Navbar />
            <div className='mx-10'>
                {movieCarousels.map((movie, index) => (
                    <MovieCarousel key={index} carouselTitle={movie.title} movies={movie.data} />
                ))}
            </div>
        </>
    )
}

Home.propTypes = {
    nowPlaying: PropTypes.array.isRequired,
    popular: PropTypes.array.isRequired,
    topRated: PropTypes.array.isRequired,
    upcoming: PropTypes.array.isRequired,
}

export default Home
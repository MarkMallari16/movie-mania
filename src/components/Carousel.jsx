import React from 'react'
import PropTypes from 'prop-types';
import MovieSmallCard from './MovieSmallCard';
import { Link } from 'react-router-dom';
const Carousel = ({ carouselTitle, icon, movieData, type, link }) => {
    return (
        <>
            <header className='mt-10 mb-6 flex items-center justify-between'>
                <Link to={link}>
                    <div className='flex items-center gap-2 hover:text-secondary transition-all ease-in-out'>
                        <h1 className='text-2xl font-medium flex items-center gap-2'>
                            {icon}{carouselTitle}
                        </h1>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                        </svg>

                    </div>
                </Link>
            </header>
            <div className="gap-6 flex carousel carousel-end rounded-box w-full [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                <div className="carousel-item space-x-5 ">

                    {movieData && movieData.results.slice(0, 16).map((data, _) => (
                        <MovieSmallCard key={data.id} id={data.id} poster={data.poster_path} rate={data.vote_average} releaseDate={new Date(data.release_date).getFullYear()} title={data.title} type={type} />
                    ))}
                </div>
            </div>
        </>
    )
}
Carousel.propTypes = {
    carouselTitle: PropTypes.string.isRequired,
    movies: PropTypes.shape({
        results: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                poster_path: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired
            })
        ).isRequired
    }).isRequired
}

export default Carousel
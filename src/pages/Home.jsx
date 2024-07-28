import React from 'react'
import MovieCard from '../components/MovieCard'
import Navbar from '../components/Navbar'

const Home = ({ popular, topRated, upcoming, nowPlaying }) => {
    return (
        <>
            <Navbar />
            <div className='mx-10'>
                <h1 className='mt-10 mb-4 text-2xl text-white font-medium'>Now Playing</h1>
                <div className='carousel rounded-box'>
                    <div className='carousel-item space-x-6'>
                        {nowPlaying && nowPlaying.results.map((playing, _) => (
                            <MovieCard key={playing.id} id={playing.id} poster={playing.poster_path} title={playing.title} />
                        ))}
                    </div>
                </div>

                <h1 className='mt-10 mb-4 text-2xl text-white font-medium'>Popular</h1>
                <div className='carousel rounded-box'>
                    <div className='carousel-item space-x-6'>
                        {popular && popular.results.map((p, _) => (
                            <MovieCard key={p.id} id={p.id} poster={p.poster_path} title={p.title} />
                        ))}
                    </div>
                </div>

                <h1 className='mt-10 mb-4 text-2xl text-white font-medium'>Top Rated</h1>
                <div className='carousel rounded-box'>
                    <div className='carousel-item space-x-6'>
                        {topRated && topRated.results.map((tr, _) => (
                            <MovieCard key={tr.id} id={tr.id} poster={tr.poster_path} title={tr.title} />
                        ))}
                    </div>
                </div>

                <h1 className='mt-10 mb-4 text-2xl text-white font-medium'>Upcoming</h1>
                <div className='carousel rounded-box'>
                    <div className='carousel-item space-x-6'>
                        {upcoming && upcoming.results.map((up, _) => (
                            <MovieCard key={up.id} id={up.id} poster={up.poster_path} title={up.title} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
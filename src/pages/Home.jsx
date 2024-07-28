import React from 'react'
import MovieCard from '../components/MovieCard'
import Navbar from '../components/Navbar'

const Home = ({ popular }) => {
    return (
        <>
            <Navbar />
            <div className='mx-10'>

                <h1 className='mt-10 mb-4 text-2xl text-white font-medium'>Popular</h1>
                <div className='carousel rounded-box'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
                        </svg>

                    </div>
                    <div className='carousel-item space-x-6'>
                        {popular && popular.results.map((p, _) => (
                            <MovieCard key={p.id} id={p.id} poster={p.poster_path} title={p.title} />
                        ))}
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                        </svg>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home
import React from 'react'
import MovieCard from '../components/MovieCard'
import Navbar from '../components/Navbar'

const Home = ({ popular }) => {
    return (
        <>
            <Navbar />
            <div className='mx-10'>

                <h1 className='mt-10 mb-4 text-2xl text-white font-medium'>Popular</h1>
                <div className=' grid grid-cols-2 lg:grid-cols-7 gap-5 place-items-center'>
                    {popular && popular.results.slice(0, 7).map((p, _) => (
                        <MovieCard key={p.id} id={p.id} poster={p.poster_path} title={p.title} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home
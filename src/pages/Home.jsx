import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Home = ({ allMovies, nowPlaying, popular, topRated, upcoming }) => {


    const CarouselsData = [

        {
            title: "Now Playing",
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z" clipRule="evenodd" />
            </svg>
            ,
            type: "movie",
            data: nowPlaying,

        },
        {
            title: "Popular",
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z" clipRule="evenodd" />
            </svg>,
            type: "movie",
            data: popular,
        },
        {
            title: "Top Rated",
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
            </svg>
            ,
            type: "movie",
            data: topRated,
        },
        {
            title: "Upcoming",
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
            </svg>
            ,
            type: "movie",
            data: upcoming,
        },


    ]

    return (
        <>
            <Navbar />
            <div className='mt-10 mx-10 '>
                <h1 className='mt-10 mb-3 text-2xl text-white font-bold flex items-center gap-2'>

                    Recommend for you
                </h1>

            </div>
            <div className='grid grid-cols-1 lg:grid-cols-10  lg:grid-rows-3 gap-5 mx-10 mt-6'>
                {allMovies.results.slice(0, 1).map(nowPlay => (
                    <div key={nowPlay.id} className='relative bg-slate-900 col-span-6 row-span-4 hover:opacity-50 transition-all ease-in-out'>
                        <Link to={`movie/${nowPlay.id}`}>
                            <div key={nowPlay.id}>
                                <img src={`https://image.tmdb.org/t/p/w500${nowPlay.backdrop_path}`} alt={nowPlay.title} className='w-full lg:h-[68vh] rounded-lg aspect-auto bg-cover opacity-50' />
                            </div>
                            <div className='absolute inset-14 '>
                                <div className='flex items-center gap-5 '>
                                    <img src={`https://image.tmdb.org/t/p/w500${nowPlay.poster_path}`} alt={nowPlay.title} className='w-60 rounded-lg' />
                                    <div>
                                        <p className='text-4xl font-medium text-white'>{nowPlay.title}</p>
                                        <div className='mt-3 flex gap-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-yellow-500">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                            </svg>
                                            <p className='text-white'>{nowPlay.vote_average.toFixed(1)}+</p>
                                        </div>
                                        <div className='mt-3 flex gap-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                                            </svg>
                                            <p className='text-white'>Year: {new Date(nowPlay.release_date).getFullYear()}</p>
                                        </div>
                                        <div className='mt-3 flex gap-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                                <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
                                            </svg>

                                            <p className='text-white'>Popularity: {nowPlay.popularity.toFixed(1)}</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
                {allMovies.results.slice(1, 7).map(nowPlay => (
                    <div key={nowPlay.id} className='relative bg-slate-900 col-span-2 row-span-1 hover:opacity-50 transition-all ease-in-out'>
                        <Link to={`movie/${nowPlay.id}`}>
                            <div key={nowPlay.id} className=' rounded-lg overflow-hidden'>
                                <img src={`https://image.tmdb.org/t/p/w500${nowPlay.backdrop_path}`} alt={nowPlay.title} className='w-fullaspect-auto bg-cover opacity-50' />
                                <div className='absolute bottom-0 right-0 flex w-full'>
                                    <p className=' backdrop-blur-sm text-white py-2 pl-4 w-full h-10'>{nowPlay.title}</p>
                                    <div className='flex gap-1 items-center pe-4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-yellow-500">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                        </svg>
                                        <p className='text-white text-sm font-medium '>{nowPlay.vote_average.toFixed(1)}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className='mx-10'>
                {CarouselsData.map((datas, index) => (
                    <Carousel key={index} carouselTitle={datas.title} icon={datas.icon} datas={datas.data} type={datas.type} />
                ))}
            </div>


            <Footer />
        </>
    )
}

Home.propTypes = {
    nowPlaying: PropTypes.object.isRequired,
    popular: PropTypes.object.isRequired,
    topRated: PropTypes.object.isRequired,
    upcoming: PropTypes.object.isRequired,
};

export default Home
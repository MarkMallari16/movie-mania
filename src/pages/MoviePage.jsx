import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import ReactPlayer from 'react-player';
import CharacterComponent from '../components/CharacterComponent';
import MovieSmallCard from '../components/MovieSmallCard';
import TrailerAndClipsComponent from '../components/TrailerAndClipsComponent';
import { motion } from 'framer-motion';

const MovieDetail = () => {
    const { id } = useParams();
    const { data: movieDetail, loading: movieLoading, refetch: refetchMovie } = useFetch(`https://api.themoviedb.org/3/movie/${id}`);
    const { data: credits, loading: creditsLoading, refetch: refetchCredits } = useFetch(`https://api.themoviedb.org/3/movie/${id}/credits`);
    const { data: videoData, loading: videoLoading, refetch: refetchVideos } = useFetch(`https://api.themoviedb.org/3/movie/${id}/videos`);

    const { data: similarMovies, loading: loadingSimilarMovies, refetch: refetchSimilarMovies } = useFetch(`https://api.themoviedb.org/3/movie/${id}/similar`);

    const navigate = useNavigate();

    const trailerModalRef = useRef(null);

    const [isDelayed, setIsDelayed] = useState(true);
    const [isTrailerPlaying, setIsTrailerPlaying] = useState(false);
    const [isTeaserEnded, setIsTeaserEnded] = useState(false);
    const [isHeartFill, setIsHeartFill] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsDelayed(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, [])

    useEffect(() => {
        refetchMovie();
        refetchCredits();
        refetchVideos();
        refetchSimilarMovies();
    }, [id, refetchMovie, refetchCredits, refetchVideos, refetchSimilarMovies])

    if (movieLoading || videoLoading || creditsLoading || loadingSimilarMovies)
        return <div className='min-h-screen grid place-items-center bg-slate-900'>
            <span className="loading loading-dots loading-lg text-white"></span>
        </div>;

    const teaser = videoData?.results?.find(video => video.type === "Teaser" && video.site === "YouTube");
    const teaserUrl = teaser ? `https://www.youtube.com/watch?v=${teaser.key}` : null;


    const videos = videoData.results.filter(video => video.site === "YouTube" && video.type === 'Teaser' || video.type === "Trailer").slice(0, 8);
    const videoTrailer = videoData?.results?.find(video => video.type === "Trailer" && video.site === "YouTube");
    const videoTrailerUrl = videoTrailer ? `https://www.youtube.com/watch?v=${videoTrailer.key}` : null
    const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`;
    const directors = credits.crew.find(person => person.job === "Director");
    const allCharacters = credits.cast.slice(0, 10);
    const mainCharacters = credits.cast.slice(0, 6);

    const handleTrailerModalOpen = () => {
        if (trailerModalRef.current) {
            setIsTrailerPlaying(true);
            trailerModalRef.current.showModal();
        }
    }
    const handleTrailerModalClose = () => {
        if (trailerModalRef.current) {
            setIsTrailerPlaying(false);
            trailerModalRef.current.close();
        }
    }
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
    }

    return (
        <>
            <div className={`min-h-screen w-full text-white relative transition-all ease-in-out`}>

                <div style={{
                    backgroundImage: teaserUrl === null || isDelayed || isTeaserEnded ? `url(${backdropUrl})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>

                    {(!isDelayed && !isTeaserEnded) && (
                        <ReactPlayer
                            url={teaserUrl}
                            playing
                            muted
                            width="100%"
                            height="100vh"
                            onEnded={() => setIsTeaserEnded(true)}
                            className='absolute top-0 left-0  h-full z-0' />
                    )}

                    <div className='absolute z-20 left-10 top-8  lg:top-20'>
                        <button onClick={() => navigate(-1)} className='btn btn-ghost'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    <div className='bg-slate-900 bg-opacity-75 min-h-screen flex items-center p-10 lg:p-20 relative z-10 '
                    >
                        <div className='mt-10'>
                            <motion.div
                                className='mb-2 flex items-center gap-3'
                                initial="hidden"
                                whileInView="visible"
                                variants={variants}
                                viewport={{ once: true }}
                            >
                                {
                                    movieDetail.genres.reduce((prev, detail, index) => {
                                        return index === 0 ? (
                                            <p
                                                className='font-medium p-2 rounded-lg text-sm'
                                                key={detail.id}>
                                                {detail.name}
                                            </p>
                                        ) : (
                                            <>
                                                {prev}
                                                <span key={`separator-${index}`} className='px-1'>|</span>
                                                <p className='font-medium p-2 rounded-lg text-sm' key={detail.id}>{detail.name}</p>
                                            </>
                                        )
                                    }, null)

                                }
                            </motion.div>

                            <motion.h1
                                className='text-5xl lg:text-7xl font-black'
                                initial="hidden"
                                whileInView="visible"
                                variants={variants}
                                viewport={{ once: true }}>
                                {movieDetail.title}
                            </motion.h1>

                            <motion.div
                                className='items-center flex gap-6 mt-4'
                                initial="hidden"
                                whileInView="visible"
                                variants={variants}
                                viewport={{ once: true }}>
                                <div className='flex items-center gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500 size-6">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                    </svg>
                                    <p className='font-medium'>{movieDetail.vote_average.toFixed(1)}</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                        <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                                    </svg>
                                    <p className='font-medium'>{new Date(movieDetail.release_date).getFullYear()}</p>
                                </div>
                                <div className='flex items-center gap-2 '>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                                    </svg>
                                    <p>{movieDetail.runtime}m</p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                variants={variants}
                                viewport={{ once: true }}>
                                <p className='mt-6 lg:w-full max-w-4xl tracking-wide leading-8'>{movieDetail.overview}</p>
                            </motion.div>
                            <motion.div
                                className='mt-6'
                                initial="hidden"
                                whileInView="visible"
                                variants={variants}
                                viewport={{ once: true }}>
                                <p>
                                    <span className='text-slate-300 font-medium'>Starring:</span>
                                    {mainCharacters.map(character => character.name).join(" , ")}
                                </p>
                            </motion.div>

                            <motion.div
                                className='mt-2'
                                initial="hidden"
                                whileInView="visible"
                                variants={variants}
                                viewport={{ once: true }}>
                                <p><span className='text-slate-300 font-medium'>Director:</span> {directors.name}</p>
                            </motion.div>

                            <div className='flex gap-3 mt-6'>
                                <button className='btn btn-secondary' onClick={handleTrailerModalOpen}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                        <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                    </svg>
                                    <span>Watch Trailer</span>
                                </button>
                                <button className='btn btn-ghost' onClick={() => setIsHeartFill(!isHeartFill)}>
                                    {isHeartFill ?
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                    }
                                    <span>Add to list</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className='mx-10'>
                <h1 className='my-10 text-xl text-white font-bold'>Casts of {movieDetail.title}</h1>
                <section className='flex flex-wrap justify-center gap-4'>
                    <CharacterComponent characters={allCharacters} />
                </section>

                {videos.length > 0 &&
                    <section>
                        <h1 className='mt-6 text-xl text-white font-bold'>Trailers & Clips</h1>
                        <TrailerAndClipsComponent videos={videos} />
                    </section>
                }

                {similarMovies.results.length > 0 && (
                    <>
                        <h1 className='my-10 text-xl text-white font-bold'>Similar Movies</h1>
                        <div className="gap-6 flex carousel carousel-end rounded-box w-full [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                            <div className="carousel-item space-x-5">
                                {similarMovies.results.map(similar => (
                                    <MovieSmallCard
                                        key={similar.id}
                                        id={similar.id}
                                        poster={similar.poster_path}
                                        rate={similar.vote_average}
                                        releaseDate={new Date(similar.release_date).getFullYear()}
                                        title={similar.title}
                                        type="movie"
                                    />
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
            {/*Modal*/}
            <dialog className="modal" ref={trailerModalRef}>
                <div className="modal-box relative max-w-7xl p-0">
                    <div className='flex justify-between p-4' >
                        <h2 className='text-xl font-medium'>Official Trailer</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 cursor-pointer" onClick={handleTrailerModalClose}>
                            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className='overflow-hidden rounded-lg'>
                        <ReactPlayer
                            url={videoTrailerUrl}
                            playing={isTrailerPlaying}

                            controls
                            width="100%"
                            height="70vh"
                        />
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default MovieDetail;

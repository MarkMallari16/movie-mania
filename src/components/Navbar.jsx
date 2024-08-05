import React, { useRef, useState } from 'react'
import Logo from '../assets/logo1.png'
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const modalRef = useRef(null);
    const [query, setQuery] = useState("");


    const [searchUrl, setSearchUrl] = useState("");
    const { data, loading } = useFetch(searchUrl);

    const handleOpenSearchModal = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    }
    const handleCloseSearchModal = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
    }

    const handleSearchInputOpen = () => {
        setIsSearchInputOpen(!isSearchInputOpen);
    }
    const handleSearch = () => {
        const url = `https://api.themoviedb.org/3/search/movie?query=${query}`
        setSearchUrl(url);
    }
    return (
        <div className="navbar pt-4" >
            <div className='flex justify-between w-full mx-5'>
                <div>
                    <div>
                        <img src={Logo} alt="MovieMania" className='w-full' />
                    </div>
                </div>

                <div className='flex items-center'>
                    <ul className="menu menu-horizontal px-1 text-white uppercase font-medium">
                        <li>
                            <Link>Movies</Link>
                        </li>
                       
                        <li>
                            <Link to='/movies/popular'>Popular</Link>
                        </li>
                        <li>
                            <Link>Top Rated</Link>
                        </li>
                    </ul>
                </div>

                <div className='flex items-center gap-8'>
                    <div className='text-white'>|</div>
                    <div className='text-white btn btn-ghost' onClick={handleOpenSearchModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
            <dialog id="my_modal_2" className="modal" ref={modalRef}>
                <div className="modal-box bg-slate-900">


                    <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className='mt-6 input input-bordered w-full' placeholder='Search here...' />
                    <div className='flex gap-3'>
                        <button className='mt-4 btn btn-secondary' onClick={handleSearch}>Search</button>
                        <button className='mt-4 btn ' onClick={handleCloseSearchModal}>Close</button>
                    </div>

                    {loading && <p>Loading...</p>}
                    {data && data.results && (
                        <div>
                            {data.results.map((movie) => (
                                <div key={movie.id} className='text-white'>
                                    {movie.title}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </dialog>
        </div>
    )
}

export default Navbar
import React, { useRef, useState } from 'react'
import Logo from '../assets/logo1.png'
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import Profile from '../assets/profile.jpg'
const Navbar = () => {

    const [query, setQuery] = useState("");

    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    }
    const clearQuery = () => {
        setQuery("")
    }
    return (
        <div className="navbar py-4 bg-base-200" >
            <div className='flex justify-between w-full mx-5'>
                <div>
                    <Link to='/'>
                        <div>
                            <img src={Logo} alt="MovieMania" className='w-full' />
                        </div>
                    </Link>
                </div>

                <div className='relative w-full max-w-2xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute inset-3 size-6 ">
                        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                    </svg>
                    <input type="text" value={query} onChange={handleQueryChange} className='input input-bordered w-full pl-12' placeholder='Search movies here...' />
                    {query && <div className='tooltip-top' data-tip="Hello">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" absolute size-6 top-3 end-4 cursor-pointer" onClick={clearQuery} data-tip="clear">
                            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                    </div>}

                </div>

                <div className='flex items-center gap-5'>
                    <ul className="menu menu-horizontal px-2 text-white uppercase font-medium">
                        <li>
                            <Link to='/movies/popular'>Popular</Link>
                        </li>
                        <li>
                            <Link to='/movies/toprated'>Top Rated</Link>
                        </li>
                        <li>
                            <Link to='/movies/upcoming'>Upcoming</Link>
                        </li>
                    </ul>

                    <div className="dropdown dropdown-end">

                        <div tabIndex={0} role="button" className="avatar online">
                            <div className="w-12 rounded-full object-cover">
                                <img src={Profile} />
                            </div>
                        </div>


                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow">
                            <li><a href="/profile">View Profile</a></li>
                            <li><a href="/settings">Settings</a></li>
                            <li><a href="/logout">Logout</a></li>
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Navbar